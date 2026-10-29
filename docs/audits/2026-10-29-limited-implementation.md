# Limited technical SEO implementation

Completed locally on 29 October 2026. Not deployed.

## Changed application files

| File | Change and reason |
| --- | --- |
| `src/app/articles/starlink-setup-wa/page.tsx` | Removed the optional HowTo node, its unsupported areaServed property and its incomplete nested LocalBusiness. Preserved Article metadata and explicitly linked its publisher to the existing sitewide `#localbusiness` entity. The shared business definition and address were not altered. |
| `src/components/seo/BreadcrumbJsonLd.tsx` | Removed the nonexistent `/articles` intermediate crumb from five article configurations. These now use Home → article. Existing valid service-parent breadcrumbs remain unchanged; no hub was created. |
| `src/content/articles/starlinkSetupPerth.ts` | Changed only the existing Shed WiFi card destination to `/wifi-solutions-perth/internet-to-sheds-workshops`. |
| `src/components/ContextualArticleText.tsx` | Added a server component that wraps a matching existing phrase in a link while preserving the original text. |
| `src/app/articles/starlink-installation-cost-perth/page.tsx` | Linked existing quote-request wording to the booking guide and the existing Oakford installation reference to its case study. Each destination occurs once in the article body. |
| `src/app/articles/where-to-book-starlink-installer-perth/page.tsx` | Linked existing installation-quote wording to the cost guide and point-to-point-link wording to the shed connectivity service. Each destination occurs once in the article body. |
| `src/components/EnquiryContactFallback.tsx` | Added a shared visible telephone/email fallback. Uses the existing PhoneLink component to retain phone-click tracking and forwarding behavior, and existing business contact constants. The anchors are present in server HTML. |
| `src/app/enquiry/page.tsx` | Rendered the contact fallback below the existing form opener, within the existing container. |
| `src/app/wifi-enquiry/page.tsx` | Rendered the same contact fallback; existing Wi-Fi product selection and return destination remain intact. |

This implementation note is the only new report for this implementation. The initial audit markdown and evidence CSV remain the historical pre-change baseline.

## Validation results

- `npm run build -- --webpack`: passed compilation, TypeScript checking and static generation (38 generated pages/endpoints).
- `npm run lint`: passed.
- `node --test tests/*.test.cjs`: passed both existing suites (ad attribution and Google tracking).
- `git diff --check`: passed.
- Parsed production-build HTML for every one of the 32 sitemap pages. Titles, H1s, canonicals and robots directives match the audited baseline. Main text outside the two enquiry pages is unchanged when whitespace is normalized; the approved contact fallback is the only added enquiry copy.
- Every generated JSON-LD block parses. Setup page contains the retained Article, one shared LocalBusiness, no HowTo and a publisher reference resolving to that shared business. Compared against the official definitions reviewed in the audit; no hosted Schema Markup Validator or Google Rich Results Test run is claimed.
- Checked that no BreadcrumbList points to `/articles`, all five approved new/retargeted body links are present once per intended page, and all HTML internal page-link targets are present among generated sitemap pages (the existing image link is excluded).
- Generated sitemap matches the audited live sitemap, including its 32 URLs, priorities and frequencies. Neither enquiry indexing policy nor rural Starlink linking changed.
- Headless Chrome against the local production server: both enquiry pages automatically open their modals, close with Escape and reopen via the existing button. Both forms completed intercepted successful submissions; phone-click, enquiry-open and enquiry-submit tracking events were observed in the production event queue. No real lead was submitted and external analytics requests were blocked.
- Browser navigation through the new booking → cost link works; existing service navigation is present. Both enquiry pages expose telephone and email links with JavaScript disabled. No uncaught browser exceptions occurred during the checks.

The initial default Turbopack build failed while fetching the existing Google font under restricted networking. An escalated retry then encountered a Turbopack CSS subprocess/port permission failure. The webpack production build passed; build configuration and package scripts were not changed. The default Turbopack path is therefore not claimed to have passed.

Checks use local production output. They do not establish Google indexing/rich-result eligibility or actual email delivery; the real enquiry backend and external analytics delivery were intentionally not exercised.

## Scope preserved

No title or H1 changes, sales-copy rewrites, layout redesign, sitemap edits, noindex changes, rural-page visibility/linking changes, content padding or payload optimisation. Existing navigation, modal implementation, tracking code and shared structured-data builders are unchanged. The only other schema changes are the explicitly approved removal of dead article breadcrumbs.

Ready for review. Deployment requires a separate instruction.
