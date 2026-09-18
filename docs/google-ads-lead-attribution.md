# Google Ads → website enquiry → EspoCRM

## Current status

**Resolved: the fourth production test saved `Test_Click_123` in the dedicated Google Ads Click ID field.** The user's screenshot of `Attribution Test 4 — Do Not Contact`, created by the `website` user at 14:54 Perth, confirms the exact value in that field. The test message did not contain the identifier. The corrected mapping is deployed at commit `0538908`.

The confirmed cause was a field-name mismatch: the website sent `cGoogleAdsClickId`, while Espo's saved metadata and lead API returned `cCGoogleAdsClickId` (extra capital `C`). The route now uses `ESPO_GCLID_FIELD = "cCGoogleAdsClickId"` for both the outgoing payload and response diagnostics. The CRM field can stay as it is. The successful test confirms CRM persistence for this synthetic identifier; earlier submissions are not replayed or backfilled, and Google Ads conversion imports/enhanced conversions remain separate work described below.

Diagnostic cleanup: disable/remove `ENQUIRY_ATTRIBUTION_DEBUG` for a subsequent production deployment. The assistant has not changed that environment setting. No further diagnostic enquiry is needed for the resolved mapping issue.

The follow-on Lead → Opportunity → Job work is tracked in [CRM conversion attribution](crm-conversion-attribution.md). Inspection of the live conversion configuration is pending; that work has not yet changed CRM fields or behavior. A read-only inventory script and synthetic acceptance checks are prepared there. Google Ads export remains separate.

## Diagnosis and verification history

The diagnostic deployment gap was resolved earlier. With explicit user approval, the assistant pushed `89d96a4dbde24aabff5a485f8fc00060f92ab6c9` to GitHub main. A fresh `git ls-remote` confirmed that exact remote head. GitHub's Vercel commit status and deployment record `6518731297` both report **success / Deployment has completed**, with environment **Production** and source commit `89d96a4`. [Vercel deployment](https://vercel.com/blakey83s-projects/blake-smart-solutions/9aKw3g1FqaFmJXE9aKe4CQ8JSXmc).

Before that push, GitHub main was `33e50df`, which contained GCLID mapping but no diagnostics. The diagnostic commit existed only locally, so earlier redeployments could not produce the requested messages even after the environment flag was added. The assistant should have verified the remote commit before the live diagnostic test. The local production build retains the logging code; no console-removal configuration was found.

The browser's storage and a real request payload are confirmed to contain `Test_Click_123`. During the first three tests, the server sent it as `cGoogleAdsClickId`. The earlier field-editor screenshot was incorrectly read as matching that name; the subsequent API reads exposed `cCGoogleAdsClickId`. The field editor showed max length 512. The user reported role Edit: No and later showed newly created leads with a blank click field, so the earlier claim that this permission setting explained the entire failure was premature. The fourth test confirms that the website API can populate the actual field; the full effective role configuration was not audited.

After reporting the diagnostic environment variable added and the project redeployed, the user explicitly approved one live diagnostic enquiry. The assistant sent exactly that request with synthetic name `Attribution Test — Do Not Contact`, email `attribution-test@example.invalid`, and `gclid: "Test_Click_123"`. It returned HTTP 200, `{"ok":true}`, at 13:37:00 Perth / 05:37:00 UTC. The user then confirmed this exact lead exists with Google Ads Click ID displayed as None. The identifier in its description came from the synthetic test message and is not proof of the dedicated field mapping.

The request ID was `wnwqn-1789709815935-2c3ecd3c1310` (full response header `syd1::iad1::wnwqn-1789709815935-2c3ecd3c1310`), on deployment `dpl_52oYRztKNaZfTZsFaJgEtajbumHN`. The user showed the matching Vercel request with no log messages. This request cannot gain diagnostics retroactively.

The user then explicitly approved one additional diagnostic enquiry after the verified Production deployment. The assistant sent exactly one request, named `Attribution Test 2 — Do Not Contact`, with synthetic email `attribution-test-2@example.invalid` and `gclid: "Test_Click_123"`. It returned HTTP 200, `{"ok":true}`, at **14:18:58 Perth / 06:18:58 UTC**, after about 4.7 seconds. No retries or redirects were followed, and the click identifier was not included in the test message/description.

**Diagnostics before the CRM correction:** the user supplied all three diagnostic messages for request `6v8fw-1789712334255-2d01b0b304c2` (14:18:54–14:18:58 Perth). `received` reports `gclidProvided: true` and `gclidAccepted: true`; `crm_request` reports `field: "cGoogleAdsClickId"` and `gclidIncluded: true`; `crm_response` reports `status: 200`, `responseIsRecord: true`, `fieldReturned: false`, `fieldMatches: false`. The user also confirmed the second test lead exists with Google Ads Click ID displayed as None. The later API read established that the CRM attribute had a different name. These logs do not describe behaviour after the user's correction.

After the reported CRM correction, the user explicitly approved a third live diagnostic enquiry. The assistant sent exactly one request named `Attribution Test 3 — Do Not Contact`, with synthetic email `attribution-test-3@example.invalid` and `gclid: "Test_Click_123"`. The message did not contain the click ID. The canonical `/api/enquiry` endpoint returned HTTP 200, `{"ok":true}`, at **14:39:05 Perth / 06:39:05 UTC**, after about 4.4 seconds. The initial sandbox attempt failed DNS resolution before sending a request; the permitted network attempt completed with no HTTP retry or redirect.

**Third-test diagnostics, before the website mapping fix:** the user supplied the third test lead screenshot and all three logs for request **`w5fj4-1789713541735-c438a81a6177`**, around **14:39:01–14:39:05 Perth** (full response header `syd1::iad1::w5fj4-1789713541735-c438a81a6177`), on deployment `dpl_9aKw3g1FqaFmJXE9aKe4CQ8JSXmc`. The lead exists with Google Ads Click ID displayed as None. `received` reports `gclidProvided: true`, `gclidAccepted: true`; `crm_request` reports `field: "cGoogleAdsClickId"`, `gclidIncluded: true`; `crm_response` reports `status: 200`, `responseIsRecord: true`, `fieldReturned: false`, `fieldMatches: false`. The subsequent metadata read established that the saved attribute still differed from this outgoing key.

The successful schema read used [GET Metadata](https://docs.espocrm.com/development/api/metadata/) (`key=entityDefs.Lead.fields`) and `GET Lead/6aacdc8997b6619ab`. Earlier console attempts accidentally used a Role ID or undefined as the Lead ID; those 404s were unrelated to field persistence. The corrected fixed-ID check returned the schema/record evidence above.

The user approved pushing the mapping fix, verifying deployment, and sending one more test lead. On inspection, the fix was already committed and pushed as `0538908402d19c7e1101fb731d10ba2a0914f8b4` (`Cc`), with a clean workspace; a fresh `git ls-remote` confirmed that same GitHub main head. The assistant did not create a duplicate commit or deployment. Vercel's GitHub commit status and deployment record `6519183755` both confirmed success for that exact source commit in **Production**. [Verified mapping-fix deployment](https://vercel.com/blakey83s-projects/blake-smart-solutions/FpfT3yS6L8gihGtpLeRuuRBTuFR4).

After verifying deployment, the assistant sent exactly one live request named `Attribution Test 4 — Do Not Contact`, with synthetic email `attribution-test-4@example.invalid` and `gclid: "Test_Click_123"`. The message did not contain the click ID. The canonical `/api/enquiry` endpoint returned HTTP 200, `{"ok":true}`, at **14:54:40 Perth / 06:54:40 UTC**, after about 4.9 seconds, with no retry or redirect.

**Successful verification:** the user supplied `Screenshot_20260918_145553.png`, showing the exact fourth test lead with `Test_Click_123` in its dedicated Google Ads Click ID field. This confirms persistence after the mapping fix, beyond the website's HTTP 200 response. The associated request is **`sb5hr-1789714475862-54bb805811c1`**, around **14:54:35–14:54:40 Perth** (full response header `syd1::iad1::sb5hr-1789714475862-54bb805811c1`). The fourth request's diagnostic log messages were not supplied; no matching-response flags are claimed. All four separate one-test approvals have been used; no additional live test is authorized or needed to establish this result.

Local verification of this mapping fix passed: `npm run test:attribution`, `npx tsc --noEmit`, `npm run lint`, and `npm run build -- --webpack`. The mock checks the exact `cCGoogleAdsClickId` payload, omission for absent/invalid identifiers, and response diagnostics for both the actual and previously assumed field names. These checks send no live email or CRM request and do not verify production persistence.

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

The forms include optional `gclid` in JSON. Server validation accepts 1–512 URL-safe alphanumeric, underscore or hyphen characters. Missing/invalid identifiers are omitted without rejecting an enquiry. The corrected server maps valid IDs to the dedicated Espo attribute `cCGoogleAdsClickId`, leaving lead source as Website. Privacy copy now discloses this storage and CRM use.

## Espo setup required BEFORE deployment

1. This instance already has the optional **Varchar** field labelled **Google Ads Click ID**, max length **512**, whose exact saved attribute is **`cCGoogleAdsClickId`**. Reuse that field. For another instance, verify the final attribute through Name/View Details and the API, then set `ESPO_GCLID_FIELD` in `src/app/api/enquiry/route.ts` to match. Espo adds a custom prefix automatically; do not infer the final API name from a typed name or display label.
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


## Browser evidence and server diagnostics — 18 September 2026

User-provided screenshots confirmed that localStorage on the www origin contained `Test_Click_123` and the actual General Quote Request JSON included that exact `gclid`. The selected `/api/enquiry` POST returned HTTP 200 at 05:12:12 UTC (13:12:12 Perth). This confirms delivery to the website API; its success response does not confirm CRM persistence. The field editor showed Varchar, max length 512, not required, and not read-only. Its name was initially misread as `cGoogleAdsClickId`; the later API read showed `cCGoogleAdsClickId` (see Current status). The field editor does not establish the API role's access or the stored value on the specific lead.

The remaining failure is between processing the website API request and the field as read in Espo. Check the lead created by this latest request, rather than an older pre-deployment test. Inspect the role assigned to the website API user: Field Level Security → Lead → Google Ads Click ID, especially Edit and Read. A field absent from Field Level Security is not automatically denied; see [Espo role rules](https://docs.espocrm.com/administration/roles-management/). Do not widen permissions without checking the effective role.

An opt-in server diagnostic is now implemented to distinguish these stages. It requires deploying the updated API route and setting the **server-only** environment variable `ENQUIRY_ATTRIBUTION_DEBUG=true`. In Vercel runtime logs for an enquiry invocation, filter for `Enquiry attribution`. Each log contains only fixed labels, booleans and an HTTP status, never the identifier, lead ID, contact details, API key or raw CRM response:

- `received`: `gclidProvided` and `gclidAccepted` show whether the API received and validated the field.
- `crm_request`: `field` names the configured CRM attribute and `gclidIncluded` shows whether the outgoing Espo JSON includes it. The corrected mapping uses `cCGoogleAdsClickId`; historical logs before the fix used `cGoogleAdsClickId`.
- `crm_response`: `status`, `responseIsRecord`, `fieldReturned`, and `fieldMatches` describe Espo's existing create response. A matching field supports successful creation with attribution. A missing field may mean response filtering/read permissions, unknown field configuration, or lack of persistence; it does not by itself prove write denial. A returned but different/empty field needs examination of Espo permissions, field settings and save hooks/workflows. With no submitted ID, `fieldMatches` is null.

If `received` exists without `crm_request`, check the invocation's email/configuration logs; email runs first and missing CRM configuration skips creation. If `crm_request` exists without `crm_response`, inspect fetch/network failures in that invocation. HTTP 200 from the website can still accompany a CRM failure. Error messages now retain the CRM HTTP status but omit raw CRM error bodies to avoid disclosure.

These diagnostics inspect the existing create response only: no extra CRM requests, writes, retry, altered user-facing success response or Google events are added. They are disabled unless the flag is exactly `true`. Remove/disable the flag after diagnosis. Use staging or the next genuine enquiry; another live test enquiry still requires explicit approval. Existing submissions cannot be diagnosed retroactively with newly added logs.

Mock tests cover diagnostics disabled, matching/omitted/empty/different response fields, malformed responses, HTTP failure, unchanged enquiry success and absence of sensitive values in diagnostic logs. No live lead or email was sent by the assistant.
