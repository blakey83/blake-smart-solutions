/* eslint-disable @typescript-eslint/no-require-imports -- Test real form handlers with mocked transport and hooks. */
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const React = require('react');
function compile(file, imports, globals = {}) {
  const source = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  }).outputText;
  const context = { exports: {}, require: name => name in imports ? imports[name] : require(name), ...globals };
  vm.runInNewContext(source, context);
  return context.exports;
}
const content = compile('src/content/components/siteContent.ts', { '@/lib/seoConfig': { SITE_URL: 'https://example.test' } });
function harness({ serviceOptions, selectedServices = [], presentation = 'inline', productName = content.enquiryProductContent.starlinkInstallation, contact = '0412345678', ok = true, networkError = false, status = { type: 'idle', message: '' } } = {}) {
  let hook = 0;
  const states = [{ name: 'Test', contact, suburb: 'Perth', message: 'Test enquiry', website: '' }, 123, false, status, selectedServices];
  const calls = [], effects = [], tracking = [];
  const { EnquiryForm } = compile('src/components/EnquiryForm.tsx', {
    react: { ...React, useState: () => { const i = hook++; return [states[i], value => { states[i] = typeof value === "function" ? value(states[i]) : value; }]; }, useCallback: fn => fn, useRef: value => ({ current: value }), useEffect: fn => effects.push(fn) },
    'next/navigation': { usePathname: () => '/starlink-installation-perth' },
    'next/link': { default: 'a', __esModule: true },
    '@/components/PhoneLink': { PhoneLink: 'a' },
    '@/lib/adAttribution': { getEnquiryGclid: () => 'saved-click-id' },
    '@/content/components/siteContent': content,
    '@/lib/analytics': { trackEnquiryOpen: () => tracking.push('open'), trackEnquirySubmit: () => tracking.push('submit') },
  }, { fetch: async (url, options) => { calls.push({ url, payload: JSON.parse(options.body) }); if (networkError) throw Error('offline'); return { ok, json: async () => ({ error: 'Server error' }) }; } });
  const tree = EnquiryForm({ presentation, serviceOptions, isOpen: true, product: { name: productName }, onClose() {} });
  const nodes = [];
  function walk(node) { if (!node || typeof node !== 'object') return; if (Array.isArray(node)) return node.forEach(walk); nodes.push(node); walk(node.props?.children); }
  walk(tree);
  return { nodes, states, calls, tracking, effects, submit: () => nodes.find(n => n.type === 'form').props.onSubmit({ preventDefault() {} }) };
}
for (const presentation of ['inline', 'modal']) {
  test(`${presentation}: successful submission keeps endpoint, attribution and success tracking`, async () => {
    const h = harness({ presentation });
    await h.submit();
    assert.equal(h.calls[0].url, '/api/enquiry');
    assert.equal(h.calls[0].payload.gclid, 'saved-click-id');
    assert.equal(h.calls[0].payload.formStartedAt, 123);
    assert.equal(h.calls[0].payload.phone, '0412345678');
    assert.equal(h.calls[0].payload.productName, 'Starlink Installation');
    assert.equal(h.states[3].type, 'success');
    assert.deepEqual(h.tracking, ['submit']);
    assert.equal(h.nodes.find(n => n.type === 'textarea').props.required, false);
    assert.equal(h.nodes.find(n => n.props?.name === 'contact').props.autoComplete, 'off');
  });
}
test('invalid contact, server failure and network failure do not track a successful lead', async () => {
  for (const options of [{ contact: 'invalid' }, { ok: false }, { networkError: true }]) {
    const h = harness(options);
    await h.submit();
    assert.equal(h.states[3].type, 'error');
    assert.deepEqual(h.tracking, []);
    assert.equal(h.states[2], false);
    if (options.contact) assert.equal(h.calls.length, 0);
  }
});
test('inline form does not lock body scrolling or track a modal open', () => {
  const h = harness();
  h.effects.forEach(fn => fn()); // No document is supplied: modal-only document access would fail.
  assert.deepEqual(h.tracking, []);
  assert.ok(!h.nodes.some(n => n.type === 'button' && n.props['aria-label'] === content.enquiryModalContent.closeLabel));
});
test('inline success acknowledgement resets the form for the same service', () => {
  const h = harness({ status: { type: 'success', message: 'Received' } });
  h.nodes.find(n => n.type === 'button' && n.props.children === content.enquiryModalContent.okCta).props.onClick();
  assert.equal(h.states[3].type, 'idle');
  assert.equal(h.states[0].message, '');
});

test('each solution uses its own configured copy, including Wi-Fi detail services', () => {
  for (const key of ['wifiConnectivityQuote', 'starlinkInstallationQuote', 'ajaxSecurityQuote', 'cctvQuote', 'dataCablingQuote', 'tvAntennaQuote']) {
    const copy = content.enquiryModalContent[key];
    for (const productName of copy.productNames) {
      const h = harness({ productName });
      assert.equal(h.nodes.find(n => n.type === 'h2').props.children, copy.title);
      assert.ok(h.nodes.some(n => n.type === 'p' && n.props.children === copy.intro));
      assert.equal(h.nodes.find(n => n.type === 'textarea').props.placeholder, copy.messagePlaceholder);
      h.effects.forEach(fn => fn());
      assert.equal(h.states[0].message, '', `${productName} must start empty so its placeholder is visible`);
      assert.equal(h.nodes.find(n => n.props?.type === 'submit').props.children, copy.submitCta);
    }
  }
});
test('general and unmatched product enquiries use the complete general intro', () => {
  for (const productName of ['General Quote Request', 'Example product']) {
    const h = harness({ productName });
    assert.equal(h.nodes.find(n => n.type === 'h2').props.children, productName);
    assert.ok(h.nodes.some(n => n.type === 'p' && n.props.children === content.enquiryModalContent.intro));
  }
});


test('home service dropdown includes four services and submits the selected service', async () => {
  const serviceOptions = [
    { label: 'Wi-Fi & networks', value: 'WiFi Solutions' },
    { label: 'Security cameras', value: 'Security Cameras' },
    { label: 'Ajax alarms', value: 'Ajax Alarm Systems' },
    { label: 'Starlink', value: 'Starlink Installation' },
  ];
  const h = harness({ serviceOptions, selectedServices: ['Security Cameras'] });
  const dropdown = h.nodes.find(n => n.type === 'select');
  assert.equal(h.nodes.filter(n => n.type === 'option').length, 5);
  assert.equal(dropdown.props.value, 'Security Cameras');
  assert.ok(h.nodes.some(n => n.props?.href === 'tel:0477948079'));
  dropdown.props.onChange({ target: { value: 'Starlink Installation' } });
  assert.deepEqual(Array.from(h.states[4]), ['Starlink Installation']);
  dropdown.props.onChange({ target: { value: '' } });
  assert.deepEqual(Array.from(h.states[4]), []);
  await h.submit();
  assert.equal(h.calls[0].payload.productName, 'Security Cameras');
});

test('home enquiry can be submitted without choosing a service', async () => {
  const h = harness({
    productName: content.enquiryProductContent.generalQuoteRequest,
    serviceOptions: [{ label: 'Starlink', value: 'Starlink Installation' }],
  });
  assert.ok(!h.nodes.find(n => n.type === 'select').props.required);
  await h.submit();
  assert.equal(h.calls[0].payload.productName, content.enquiryProductContent.generalQuoteRequest);
  assert.equal(h.states[3].type, 'success');
});
