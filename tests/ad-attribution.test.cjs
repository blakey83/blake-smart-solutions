/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS loader isolates real TS modules and mocks all outbound transports. */
const { test } = require('node:test');
const assert = require('node:assert/strict');
const ts = require('typescript');
const fs = require('node:fs');
const Module = require('node:module');
const path = require('node:path');

// Compile the actual application modules in memory; no server or network used.
require.extensions['.ts'] = (module, filename) => {
  const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  });
  module._compile(compiled.outputText, filename);
};
const attributionPath = path.resolve(__dirname, '../src/lib/adAttribution.ts');
function browser(search = '', blocked = false) {
  delete require.cache[attributionPath];
  const values = new Map();
  global.window = {
    location: { search },
    localStorage: {
      getItem: (key) => { if (blocked) throw Error('blocked'); return values.get(key) ?? null; },
      setItem: (key, value) => { if (blocked) throw Error('blocked'); values.set(key, value); },
      removeItem: (key) => values.delete(key),
    },
  };
  return { ...require(attributionPath), values };
}

test('landing click survives navigation and reload; latest valid click wins', () => {
  let a = browser('?gclid=Test_Click-123');
  assert.equal(a.getEnquiryGclid(), 'Test_Click-123');
  const original = a.values.get(a.GCLID_STORAGE_KEY);
  a.getEnquiryGclid();
  assert.equal(a.values.get(a.GCLID_STORAGE_KEY), original);
  window.location.search = '';
  assert.equal(a.getEnquiryGclid(), 'Test_Click-123');
  delete require.cache[attributionPath];
  a = require(attributionPath);
  assert.equal(a.getEnquiryGclid(), 'Test_Click-123');
  window.location.search = '?gclid=New_Click';
  assert.equal(a.getEnquiryGclid(), 'New_Click');
  window.location.search = '?gclid=wrong&gclsrc=ds';
  assert.equal(a.getEnquiryGclid(), 'New_Click');
});

test('missing, malformed, expired and unavailable storage do not break enquiries', () => {
  const a = browser('?gclid=%3Cbad%3E');
  assert.equal(a.getEnquiryGclid(), undefined);
  a.values.set(a.GCLID_STORAGE_KEY, '{bad json');
  assert.equal(a.getEnquiryGclid(), undefined);
  a.values.set(a.GCLID_STORAGE_KEY, JSON.stringify({ gclid: 'old', capturedAt: Date.now() - a.GCLID_RETENTION_MS }));
  assert.equal(a.getEnquiryGclid(), undefined);
  assert.equal(a.values.has(a.GCLID_STORAGE_KEY), false);
  const b = browser('?gclid=Memory_Click', true);
  assert.equal(b.getEnquiryGclid(), 'Memory_Click');
  window.location.search = '';
  assert.equal(b.getEnquiryGclid(), 'Memory_Click');
  delete global.window;
  assert.equal(b.getEnquiryGclid(), undefined);
});

test('actual enquiry route sends optional GCLID to mocked Espo; preserves email and CRM failure behaviour', async () => {
  const originalLoad = Module._load;
  const originalFetch = global.fetch;
  const originalEnv = { ...process.env };
  const originalError = console.error;
  const emails = [];
  const crm = [];
  let failCrm = false;
  Module._load = function(id, ...args) {
    if (id === 'nodemailer') return { createTransport: () => ({ sendMail: async (mail) => emails.push(mail) }) };
    return originalLoad.call(this, id, ...args);
  };
  // Every outbound HTTP request is intercepted and checked, never forwarded.
  global.fetch = async (url, options) => {
    assert.equal(url, 'https://crm.invalid/api/v1/Lead');
    assert.equal(options.headers['X-Api-Key'], 'fake-test-key');
    crm.push(JSON.parse(options.body));
    return new Response('{}', { status: failCrm ? 500 : 200 });
  };
  Object.assign(process.env, {
    ESPOCRM_BASE_URL: 'https://crm.invalid/', ESPOCRM_API_KEY: 'fake-test-key',
    SMTP_HOST: 'smtp.invalid', SMTP_USER: 'test', SMTP_PASS: 'test',
    LEADS_TO_EMAIL: 'to@example.invalid', LEADS_FROM_EMAIL: 'from@example.invalid',
  });
  try {
    const { POST } = require('../src/app/api/enquiry/route.ts');
    const a = browser('?gclid=End_to_End-123');
    a.getEnquiryGclid();
    window.location.search = '';
    let count = 0;
    for (const gclid of [a.getEnquiryGclid(), undefined, '<invalid>', 'x'.repeat(513), { bad: true }]) {
      const result = await POST(new Request('https://website.invalid/api/enquiry', {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'x-forwarded-for': `test-${count++}` },
        body: JSON.stringify({ name: 'Test Person', email: 'test@example.invalid', phone: '0412345678', suburb: 'Test', message: 'Synthetic test', productName: 'WiFi', formStartedAt: Date.now() - 10000, gclid }),
      }));
      assert.equal(result.status, 200);
      assert.deepEqual(await result.json(), { ok: true });
      assert.equal(crm.at(-1).cGoogleAdsClickId, typeof gclid === 'string' && gclid === 'End_to_End-123' ? gclid : undefined);
      assert.equal(crm.at(-1).phoneNumber, '+61412345678');
      assert.equal(crm.at(-1).source, 'Website');
    }
    assert.equal(emails.length, 5);
    assert.equal(crm.length, 5);
    failCrm = true;
    console.error = () => {};
    const result = await POST(new Request('https://website.invalid/api/enquiry', {
      method: 'POST', headers: { 'x-forwarded-for': 'crm-failure' },
      body: JSON.stringify({ name: 'Test', email: 'test@example.invalid', message: 'Test', productName: 'Test', formStartedAt: Date.now() - 10000 }),
    }));
    assert.equal(result.status, 200);
  } finally {
    Module._load = originalLoad;
    global.fetch = originalFetch;
    console.error = originalError;
    process.env = originalEnv;
    delete global.window;
  }
});
