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

test('one deferred Google loader, with configuration and event queue available after hydration', () => {
  assert.deepEqual(scripts.filter(s => s.src).map(s => s.src), [
    'https://www.googletagmanager.com/gtag/js?id=AW-18035265737',
  ]);
  assert.ok(scripts.filter(s => s.src).every(s => s.strategy === 'lazyOnload'));
  assert.ok(scripts.filter(s => !s.src).every(s => s.strategy === 'afterInteractive'));
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

test('Google callback drives React phone text and dial targets across mounts and renders', () => {
  const { context } = initialise();
  const listeners = new Set();
  context.Event = class { constructor(type) { this.type = type; } };
  context.addEventListener = (type, listener) => listeners.add(listener);
  context.removeEventListener = (type, listener) => listeners.delete(listener);
  context.dispatchEvent = () => listeners.forEach(listener => listener());
  const callback = context.dataLayer.find(c => c[1] === 'AW-18035265737/ia68COyZw8YcEMmh8ZdD')[2].phone_conversion_callback;
  assert.equal(typeof callback, 'function');
  const React = require('react');
  let server = false;
  let notifications = 0;
  const react = { ...React, useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
    subscribe(() => notifications++);
    return server ? getServerSnapshot() : getSnapshot();
  } };
  function load(file, dependencies) {
    const exports = {};
    const code = ts.transpileModule(fs.readFileSync(path.join(__dirname, '../src', file), 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
    }).outputText;
    vm.runInNewContext(code, { exports, window: context, require: name => dependencies[name] ?? require(name) });
    return exports;
  }
  const forwarding = load('lib/phoneForwarding.tsx', { react });
  let clicks = 0;
  const { PhoneLink } = load('components/PhoneLink.tsx', {
    '@/lib/phoneForwarding': forwarding,
    '@/lib/analytics': { trackPhoneClick: () => clicks++ },
  });
  const props = { href: 'tel:0477948079', children: ['Call ', React.createElement('span', { key: 'number' }, '0477 948 079'), ' for a Free Quote'] };
  const html = () => require('react-dom/server').renderToStaticMarkup(PhoneLink(props));
  assert.match(html(), /href="tel:0477948079"/);
  assert.match(html(), /0477 948 079/);
  callback(undefined, undefined);
  callback('bad', 'javascript:bad');
  assert.equal(context.bssForwardingNumber, undefined);
  // Test fixture supplied directly to the isolated callback; no Google request or call.
  callback('TEST FORWARDING NUMBER', '+61123456789');
  assert.ok(notifications > 0);
  for (let render = 0; render < 3; render++) {
    assert.match(html(), /href="tel:\+61123456789"/);
    assert.match(html(), /Call <span>TEST FORWARDING NUMBER<\/span> for a Free Quote/);
    assert.doesNotMatch(html(), /0477 948 079/);
  }
  assert.equal(PhoneLink({ href: 'tel:1800123456', children: 'Other number' }).props.href, 'tel:1800123456');
  assert.equal(PhoneLink({ href: 'tel:+61477948079' }).props.href, 'tel:+61123456789');
  server = true;
  assert.match(html(), /href="tel:0477948079"/, 'SSR/hydration snapshot keeps the original number');
  server = false;
  let suppliedHandler = 0;
  PhoneLink({ ...props, onClick: () => suppliedHandler++ }).props.onClick({});
  assert.equal(clicks, 1);
  assert.equal(suppliedHandler, 1);
});
