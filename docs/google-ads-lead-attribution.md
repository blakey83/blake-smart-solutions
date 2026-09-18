# Google Ads → website enquiry → EspoCRM

## Repository audit

- `src/app/layout.tsx`: production-only direct Google tag `AW-18035265737`, phone conversion configuration `AW-18035265737/ia68COyZw8YcEMmh8ZdD` for `0477 948 079`, and GA4 `G-ZFPD80HG5B`. No GTM container found.
- `src/lib/analytics.ts`: enquiry_open, enquiry_submit, handshake_trig, handshake_dec, phone_click events. No explicit Ads form conversion label or user_data hashing/sending. Whether GA4 events are imported or Google-tag automatic enhanced conversions are enabled requires account inspection.
- No CMP, consent banner, consent storage, or Google Consent Mode default/update calls were found. Existing tags run unconditionally in production. This change follows that existing setup; it does not claim consent has been granted or implement a new consent policy. If a consent manager is configured outside this repository, connect its actual advertising consent state before deployment. A future CMP must gate capture AND submission in `getEnquiryGclid`, clear stored/memory attribution on withdrawal, and control Google tags (`ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage`). Do not treat the enquiry action as advertising consent.
- Both `EnquiryModal` and `TimedAvailabilityPopup` POST JSON to `/api/enquiry`. Origin checks, rate limiting, honeypot, minimum fill time, validation, contact parsing, success events and UI remain in place.
- The API sends SMTP email first, then POSTs `/api/v1/Lead` using server environment credentials. Missing CRM configuration skips CRM; CRM errors are logged and email success still returns success. Thus enquiry_submit means the enquiry email succeeded, not a qualified lead or confirmed CRM creation. There is no CRM retry queue.
- Canonical redirects clone the URL, retaining its query string.

## Implemented

A root client component captures on initial load and Next.js pathname/query navigation. Both forms also read attribution immediately before submitting. The latest valid GCLID wins; direct navigation keeps the existing click. IDs retain their case and are neither hashed nor truncated. Non-Ads `gclsrc` values are ignored. This supports GCLID only, not GBRAID/WBRAID or telephone attribution.

First-party localStorage key `bss.googleAdsClick` contains `{gclid, capturedAt}`. Retention is 90 days from capture, checked on read; expired values are removed on the next read. Re-reading the same click does not refresh its timestamp. Storage is scoped to the browser/origin. Storage failures fall back to memory for the current page lifecycle; retention across full reloads cannot be guaranteed when storage is unavailable. No cookies, PII analytics events, or client CRM credentials are added.

The forms include optional `gclid` in JSON. Server validation accepts 1–512 URL-safe alphanumeric, underscore or hyphen characters. Missing/invalid identifiers are omitted without rejecting an enquiry. The server maps valid IDs to the dedicated Espo attribute `cGoogleAdsClickId`, leaving lead source as Website. Privacy copy now discloses this storage and CRM use.

## Espo setup required BEFORE deployment

1. In **Administration → Entity Manager → Lead → Fields**, create an optional **Varchar** field labelled **Google Ads Click ID**, with max length **512**. Verify the final attribute is exactly **`cGoogleAdsClickId`** (modern Espo versions prefix custom fields with `c`; check the actual Name/View Details). If your instance uses a different name, change the explicit mapping in `src/app/api/enquiry/route.ts`.
2. Add it to the Lead detail layout. Give the existing API user's role permission to create/write this field and the outcome export user permission to read it. Rebuild if required by your Espo version.
3. Existing server-only configuration remains `ESPOCRM_BASE_URL` and `ESPOCRM_API_KEY`, plus the existing SMTP/LEADS_* variables. Never use NEXT_PUBLIC for secrets. No new secret is needed.
4. On a non-production CRM instance, submit a synthetic `?gclid=Staging_Test-123` enquiry, navigate before submitting, and read back the lead to confirm exact persistence. Repeat without a click ID using a clean browser. Use sandbox SMTP. Mock tests verify the outbound contract, but cannot prove your actual Espo field schema/permissions. An unknown field can be rejected or ignored depending on configuration.
5. Before converting leads into Opportunities/jobs, configure a field copy/mapping or retain a durable relationship to the original lead. Test that attribution survives conversion, merging, and job creation. This mapping is not implemented by the website.

Espo references: [Entity Manager](https://docs.espocrm.com/administration/entity-manager/) and [API attribute naming](https://docs.espocrm.com/administration/terms-and-naming/).

## Qualified leads and won jobs: still required

Define the business milestones precisely (for example, salesperson accepts lead as qualified; job is booked/contract accepted). Store each milestone's actual timestamp, stable lead/job ID, and won value/currency in Espo. Avoid using every status update or export time as a conversion time.

Enable Google Ads auto-tagging and create separate offline actions for qualified leads and won jobs, with appropriate goal categories, windows, values and primary/secondary bidding settings. Check existing enquiry/phone conversion actions to avoid counting a single milestone twice. Google's [GCLID setup guide](https://support.google.com/google-ads/answer/7012522?hl=en) explains account setup; browser retention does not extend conversion eligibility windows.

Build/configure an authenticated CRM export and scheduled import using a supported Google Ads Data Manager source or API. Map GCLID, conversion action, actual conversion time with timezone, value/currency, and stable event/order ID where supported. Keep a delivery ledger keyed by record + milestone, retry failures safely, inspect import diagnostics, and handle corrections/retractions. Export promptly and confirm current eligibility windows for the selected source. There is no exporter, scheduler, Google credential, status webhook, or import implemented here. Google documents an ongoing move of offline uploads to Data Manager; verify the current supported integration path before building against an API: [offline conversion imports](https://support.google.com/google-ads/answer/2998031?hl=en-AU).

## Enhanced conversions for leads: still required

GCLID persistence alone is not enhanced conversions. Enable enhanced conversions for leads in Google Ads, accept the applicable customer-data terms, and establish the required consent handling and disclosures. Configure the existing Google tag (or intentionally migrate to GTM) to supply permitted user-provided email/phone data at successful lead submission. Use Google's required normalization and SHA-256 handling; avoid double hashing. The site's existing phone parser should not be assumed to implement Google's full normalization requirements.

Extend the CRM export to include permitted normalized/hashed identifiers and appropriate consent signals, consistently with website tagging. The forms currently accept email OR phone, so handle either and do not assume both exist. Test with Tag Assistant and import diagnostics. Do not send free-text enquiry messages as enhanced conversion data. No customer identifiers have been added to Google tags by this change. See [Google tag enhanced conversions for leads setup](https://support.google.com/google-ads/answer/11021502?hl=en).

## Safe verification

Run `npm run test:attribution`, `npx tsc --noEmit`, `npm run lint`, and `npm run build`.

The test loads the actual TypeScript attribution and API modules, replaces SMTP transport and all HTTP fetches, and uses `.invalid` addresses/fake credentials. It checks navigation/reload retention, latest-click replacement, no timestamp refresh, expiry, malformed IDs/storage, unavailable storage, server payload mapping, missing identifiers, phone normalization and existing CRM-failure behaviour. It makes no production lead or email. Account configuration, actual CRM persistence and live Ads attribution are not verified by these tests.


## Live failure diagnosis — 18 September 2026

**Initial diagnosis (resolved by the subsequent deployment): the public deployment did not include the attribution changes. See the post-deployment retest below for current status.**

Read-only downloads of the live homepage at `/?gclid=Test_Click_123`, including a cache-busted request with `Cache-Control: no-cache`, referenced the same 11 JavaScript files. None contained `bss.googleAdsClick` or `gclid`. The deployed modal in `/_next/static/immutable/chunks/2c7v4lhnxc552.js` constructs the enquiry body as:

```js
JSON.stringify({...y,...t,productName:c.name,formStartedAt:b})
```

There is no attribution capture or `gclid` property in that deployed form. General Quote Request uses this modal. The local version includes `gclid: getEnquiryGclid()` and the root capture component, but these changes are still uncommitted in this workspace at inspection time.

| Check | Result |
| --- | --- |
| Live deployment contains capture | No; confirmed from deployed scripts and fresh homepage response. |
| Browser localStorage | User's incognito browser was not connected, so its actual storage could not be inspected. The deployed application has no code to populate this key. |
| Browser `/api/enquiry` payload | The historical request was unavailable; deployed submit code demonstrably omits `gclid`. No new live submission was made. |
| Server → Espo mapping | Local API validates `gclid` and sends `cGoogleAdsClickId`. Existing mocked API tests pass. The live server payload cannot be inspected through public JavaScript. |
| Actual Espo attribute/permissions | Not inspected: no connected CRM session or local CRM configuration was available. The confirmed failure occurs before this step; field persistence still needs staging verification after deployment. |

Publish the complete attribution changes through the normal deployment process, including the new untracked modules and the API route; deploying only the documentation or a previously committed revision will not fix this. No additional application patch is needed for this confirmed cause. No deployment was performed during diagnosis.

After deployment, verify the live bundle contains `bss.googleAdsClick`. In a fresh browser, visit `/?gclid=Test_Click_123`, then inspect Application → Local Storage for the current origin: the key should contain `gclid: "Test_Click_123"` and a capture timestamp. Navigate to another page and confirm it remains. These checks need no enquiry submission. On staging, inspect the form request's `gclid` and read back Espo's `cGoogleAdsClickId`; only send another production test enquiry with explicit approval. If the field is still blank despite a verified outbound CRM payload, inspect Espo's exact attribute name and the API role's field write access.

Re-ran `npm run test:attribution`, `npm run lint`, and `npx tsc --noEmit`: all passed. No live leads or emails were created, and no credentials were displayed.


## Post-deployment retest — 18 September 2026

The deployment issue above is resolved. The repository is clean at commit `529c6bf` (`Added google ads leads attributions`). A fresh public homepage response now loads `0lg0cjq9iri5u.js` (capture component and form) and `0o4ar0u5pfrkl.js` (attribution helper). The redirect from the non-www test URL ends at `https://www.blakesmartsolutions.com.au/?gclid=Test_Click_123`, preserving the identifier.

The downloaded production attribution helper and General Quote Request submit handler were executed locally with simulated localStorage, React hooks and a fetch mock. The helper stored `Test_Click_123` under `bss.googleAdsClick`, retained it after simulated navigation, and the actual deployed submit handler included `gclid: "Test_Click_123"` in its intercepted `/api/enquiry` JSON. This tests deployed JavaScript logic; it is not proof of hydration/storage/network behaviour in the user's actual browser. No live submission occurred.

`npm run test:attribution` also passes, including the local server mapping to `cGoogleAdsClickId`. No connected browser/CRM session or server CRM credentials are available here. The remaining reported failure is therefore not yet localized: inspect the user's actual localStorage at the **www** origin, the existing enquiry request payload, deployed server payload, and Espo field Name/API field permissions. Do not conclude the field permissions are wrong from these tests alone. No new application patch or further deployment is currently established as necessary.
