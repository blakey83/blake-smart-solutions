/* eslint-disable @typescript-eslint/no-require-imports -- Execute actual inline tracking code in an offline VM. */
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

const source = fs.readFileSync(path.join(__dirname, '../src/app/layout.tsx'), 'utf8');
const ast = ts.createSourceFile('layout.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
const scripts = [];
function visit(node) {
  const opening = ts.isJsxElement(node) ? node.openingElement : ts.isJsxSelfClosingElement(node) ? node : null;
  if (opening?.tagName.getText(ast) === 'Script') {
    const attrs = Object.fromEntries(opening.attributes.properties.filter(ts.isJsxAttribute).map(a => [a.name.getText(ast), a.initializer?.text]));
    const code = ts.isJsxElement(node) ? node.children.filter(ts.isJsxExpression).map(c => {
      assert.ok(ts.isNoSubstitutionTemplateLiteral(c.expression), 'tracking scripts must be inspectable literal code');
      return c.expression.text;
    }).join('\n') : '';
    scripts.push({ ...attrs, code });
  }
  ts.forEachChild(node, visit);
}
visit(ast);

function initialise() {
  const existing = ['existing queued command'];
  const context = vm.createContext({ dataLayer: [existing], exports: {} });
  context.window = context;
  for (const script of scripts.filter(s => !s.src)) vm.runInContext(script.code, context);
  return { context, existing };
}
function commands(context) {
  return JSON.parse(JSON.stringify(context.dataLayer.map(entry => Array.from(entry))));
}

test('one explicit Google loader, with existing afterInteractive timing', () => {
  assert.deepEqual(scripts.filter(s => s.src).map(s => s.src), [
    'https://www.googletagmanager.com/gtag/js?id=AW-18035265737',
  ]);
  assert.ok(scripts.every(s => s.strategy === 'afterInteractive'));
  assert.ok(!source.includes('@next/third-parties/google'), 'no second loader hidden in a wrapper');
});

test('preserves queued commands and exact Ads, phone and GA4 configuration', () => {
  const { context, existing } = initialise();
  assert.equal(context.dataLayer[0], existing);
  const queued = commands(context).slice(1);
  assert.equal(queued[0][0], 'js');
  assert.equal(queued.filter(c => c[0] === 'js').length, 1);
  assert.deepEqual(queued.slice(1), [
    ['config', 'AW-18035265737'],
    ['config', 'AW-18035265737/ia68COyZw8YcEMmh8ZdD', { phone_conversion_number: '0477 948 079' }],
    ['config', 'G-ZFPD80HG5B'],
  ]);
});

test('actual event helpers queue each event once while the external library is unavailable', () => {
  const { context } = initialise();
  const analytics = fs.readFileSync(path.join(__dirname, '../src/lib/analytics.ts'), 'utf8');
  vm.runInContext(ts.transpileModule(analytics, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, context);
  const api = context.exports;
  api.trackEnquiryOpen({ source: 'offline-test' });
  api.trackEnquirySubmit();
  api.trackPhoneClick();
  api.trackHandshakeTrigger();
  api.trackHandshakeDecline();
  api.trackStarlinkReferralClick('top');
  const events = commands(context).filter(c => c[0] === 'event');
  assert.deepEqual(events.map(c => c[1]), ['enquiry_open', 'enquiry_submit', 'phone_click', 'handshake_trig', 'handshake_dec', 'starlink_referral_click']);
  assert.equal(events[0][2].source, 'offline-test');
  assert.equal(events[5][2].cta_position, 'top');
  assert.ok(events.every(c => !('send_to' in c[2])), 'preserve existing default event routing');
});

test('queue preserves conversion routing, value and currency without sending a real conversion', () => {
  const { context } = initialise();
  // Synthetic command stays entirely inside this VM; no Google library or network is loaded.
  context.gtag('event', 'conversion', { send_to: 'AW-18035265737/offline-test', value: 123.45, currency: 'AUD', transaction_id: 'offline-only' });
  assert.deepEqual(commands(context).at(-1), ['event', 'conversion', {
    send_to: 'AW-18035265737/offline-test', value: 123.45, currency: 'AUD', transaction_id: 'offline-only',
  }]);
});
