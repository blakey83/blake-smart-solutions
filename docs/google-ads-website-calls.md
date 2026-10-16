# Google Ads website-call audit — 16 October 2026

## Findings before edits

- Root layout uses direct gtag.js in production only, with one loader and three `afterInteractive` inline scripts: Ads `AW-18035265737`, website calls `AW-18035265737/ia68COyZw8YcEMmh8ZdD` with `phone_conversion_number: '0477 948 079'`, and GA4 `G-ZFPD80HG5B`. No GTM container or second tag loader found. An installed Google tag AND a phone snippet were already present.
- A read-only fetch of the public `/starlink-installation-perth` page also contained that existing phone configuration and original `tel:0477948079` links. This inspects delivered source, not browser execution or forwarding eligibility.
- No `phone_conversion_callback`, shared forwarding state or navigation replacement handling existed. Clickable links had static original destinations. Google's documentation specifically requires the callback to replace both display text and the dial destination for clickable numbers. The existing snippet therefore did not explicitly guarantee both were replaced. This does not establish why the particular missed call was absent.
- Displayed numbers use `0477 948 079`; dial links use `0477948079`; LocalBusiness structured data uses `+61477948079`. These are consistent representations of the same number, not conflicting business numbers. Structured data and public/llms.txt should retain the business number.
- Phone entry points audited: shared navbar (mobile), footer, home HeroSection and FinalCtaSection, landing LandingHero/MiniCTA/CTASection, SolutionCta (including Starlink's hero, navigation enquiry configuration and page sections), ProductPageTemplate, WorkShowcasePageTemplate, EnquiryModal and article CTAs. All rendered business phone links now use PhoneLink, directly or via ButtonLink/SolutionCta. Existing PhoneLink consumers already cover the footer, home, product and article links.
- App Router keeps the root layout and scripts across client navigation; modal and responsive navigation can mount/re-render later. Imperative number replacement alone does not provide React with forwarding state. No explicit manual GA4 navigation page views were found; account-side enhanced measurement/history configuration remains unverified. No additional page_view/config calls were added.
- No repository CMP/banner or Consent Mode default/update calls were found. Production tags retain existing unconditional loading. Browser extensions, external consent controls, blocked requests and CSP/network failures require browser inspection. No consent policy was changed.
- GA4 events, phone_click parameters, GCLID storage/capture, enquiry requests, Espo mapping and offline imports were left unchanged. The forwarding callback emits no conversion event. The existing VM conversion-routing test is fully offline and sends nothing.
- The existing ID/label were retained exactly. Google Ads account settings were not accessible through repository inspection: action identity, 20-second threshold, status, call-reporting data, auto-tagging, qualification/job-won import configuration and bidding must be checked in the account. The 20-second setting is reported by the user, not independently verified.

## Repair and changed files

- `src/app/layout.tsx`: add Google's supported callback to the existing phone configuration. It validates callback arguments, retains the returned number in page memory and notifies subscribers. No forwarding number is hardcoded.
- `src/lib/phoneForwarding.tsx` (new): shared React subscription with a stable SSR fallback; narrowly match business-number links and replace number text while preserving surrounding copy/icons.
- `src/components/PhoneLink.tsx`: render callback-provided text and `tel:` together; preserve one phone_click and any supplied click handler.
- `src/components/NavBarClient.tsx`, `EnquiryModal.tsx`, `work/WorkShowcasePageTemplate.tsx`, `landingPages/LandingHero.tsx`, `MiniCTA.tsx`, `CTASection.tsx`: route remaining literal anchors through PhoneLink and remove their redundant phone_click handlers.
- `src/components/ui/ButtonLink.tsx`, `solutions/SolutionCta.tsx`: route telephone CTAs through PhoneLink.
- `src/types/global.d.ts`: declare the callback result.
- `tests/google-tracking.test.cjs`: isolated callback/component regression test, without Google requests or real calls.

The callback can arrive before or after link mount. A valid result remains available throughout the document lifecycle, including navigation and later modal mounts. React owns the final anchor props, so re-rendering will retain the active number. With no callback (ineligible visitor, blocked tag or timeout), original text/dial destinations remain. A full reload lets Google determine eligibility again; no custom persistence or invented attribution is added.

## Verification performed

- `npm run lint`: passed, no warnings after cleanup.
- `npm run test:tracking`: passed (existing tracking tests plus callback regression).
- `npm run test:attribution`: passed; mocked network only.
- Regression covers absent/invalid callback, callback before later renders, displayed nested text and tel destination, repeated renders, SSR fallback, unrelated-number exclusion, national/international business hrefs, and a single phone_click. Hooks/subscriptions are simulated and markup is rendered locally; this is not real-browser hydration/navigation proof.
- `node node_modules/typescript/bin/tsc --noEmit`: passed.
- `npm run build`: blocked by Turbopack worker-port permission error, including elevated retry.
- `npm run build -- --webpack`: passed outside the sandbox (compilation, TypeScript, all 38 static pages, including the priority landing page). The sandbox webpack attempt failed parsing TypeScript subprocess output; the elevated run completed successfully.

## Exact live deployment checks

1. Deploy the reviewed change using the normal production workflow. No deployment was performed during this audit. In Google Ads → Goals → Conversions → `Call (0477 948 079)` → Tag setup, compare the conversion ID `18035265737`, label `ia68COyZw8YcEMmh8ZdD` and displayed business number. Confirm Calls from website, enabled action, 20-second duration and the intended reporting/import setup without changing bidding or creating actions.
2. Use Tag Assistant at https://tagassistant.google.com/ to connect to https://www.blakesmartsolutions.com.au/starlink-installation-perth. Disable blockers for this verification. Confirm the Ads destination and GA4 destination initialize once, the phone config contains `phone_conversion_callback`, and there is no extra GTM/gtag installation. Check console errors and failed/blocked Google requests. Tag loading alone is not success.
3. In a separate clean browser profile with no previous Ads cookies, enter the URL directly. Confirm visible numbers and dial links remain the business number if Google supplies no forwarding result. Open/close mobile navigation and the enquiry modal; check desktop and mobile widths. Do not submit an enquiry or click the dial link merely to test event counting.
4. With a genuine eligible Google Search ad visit, use the actual ad landing flow (do not append a fabricated GCLID or use a debug-forced forwarding number). Preserve the landing URL/click attribution. In Tag Assistant/browser developer tools verify Google actually invokes the callback and returns a forwarding number. If it does not, inspect tag diagnostics, action setup, eligibility, consent/storage and blocked network requests before declaring a website-code failure.
5. On that visit, inspect every relevant phone CTA, navbar, footer and modal. The displayed number must be Google's formatted callback value, and each business-number anchor's `href` must equal `tel:` plus Google's mobile callback value. Non-numeric “Call” labels may remain. In DevTools inspect `window.bssForwardingNumber` and run this read-only check:

   ```js
   [...document.querySelectorAll('a[href^="tel:"]')].map(a => ({ text: a.textContent.trim(), href: a.getAttribute('href') }))
   ```

   Check desktop/mobile widths, open/close navigation and modal, navigate internally to another solution/article and back to `/starlink-installation-perth` without reloading. Confirm forwarding remains and original dial destinations do not reappear. Confirm normal GA4 page_view/session behaviour and no duplicate events in Tag Assistant; account-side history tracking determines navigation reporting.
6. For the next genuine incoming lead call, confirm the caller actually dials that Google forwarding number and the call reaches the business. Record the real original caller number, original start timestamp/timezone and duration in the normal workflow. Do not manufacture a test call or fake conversion. Once reporting has processed, inspect Google Ads Call details for the original call using the correct date range/timezone, including short calls; inspect the standard conversion separately against its 20-second threshold. A short call's lack of a standard conversion alone does not establish that its call-details record is missing.
7. If that real lead is later qualified, use EspoCRM's existing export/import workflow with the real original caller number, original call start and qualification timestamp. Check import diagnostics and matching. No new artificial lead or import is needed for this code audit.

Without an eligible Ads visit and genuine call, forwarding allocation, call routing, original-call reporting (especially short calls), caller-number visibility and offline match success cannot be proven. Account access and original-call evidence are needed to determine the historical failure.

Reference: [Google's website-call setup and callback/mobile examples](https://support.google.com/google-ads/answer/6095883).
