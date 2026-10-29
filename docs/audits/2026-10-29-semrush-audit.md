# SEMrush findings: implementation and live HTML audit

Audit date: 29 October 2026 (Perth). Baseline supplied: SEMrush Site Audit, 4 October 2026.

Status: report only. No application code, copy, metadata, links or deployment changed.

## Scope and evidence

Inspected the Next.js source and fetched all 32 current public sitemap URLs with curl, without executing JavaScript. All fetches succeeded with HTTP error checking enabled; redirect chains and response headers were not separately captured. Parsed actual HTML anchors, title, H1, canonical, robots metadata, main text and JSON-LD. Also checked live robots.txt and the breadcrumb destination /articles (404). Source entry points: src/lib/seoRoutes.ts, src/app/sitemap.ts, src/app/robots.ts, src/lib/jsonLd.ts, src/app/layout.tsx, src/app/articles/starlink-setup-wa/page.tsx, src/components/seo/BreadcrumbJsonLd.tsx, service templates and content files.

The October 4 URL-level SEMrush export, thresholds and crawl settings were not supplied. This is a current-state audit, not proof of what the site returned on October 4. Counts that differ are not automatically SEMrush false positives. Search Console indexing, actual rankings, conversion performance and Google rendering were not available. No claim is made that sales copy is underperforming.

The companion CSV records every sitemap page. Incoming links count distinct other sitemap source pages containing an HTML <a href>, excluding self-links, fragments and queries; repeated navigation links count once per source page. Body incoming links use anchors inside <main>. This census covers the sitemap, not every possible historic or unlisted URL. JSON-LD URLs and serialized React data do not count as crawlable anchors.

## Findings and decisions

| Supplied finding | Current evidence | Decision |
| --- | --- | --- |
| Two invalid structured data items | HowTo has unsupported areaServed; nested LocalBusiness lacks address and a shared identity | Confirmed vocabulary/Google eligibility problems, not malformed JSON |
| Three sitemap orphans | Two currently have zero incoming links and are unreachable from homepage anchors: rural Starlink and Wi-Fi enquiry | Confirmed two current orphans; historical third cannot be identified |
| Six pages with one incoming link | Seven current pages have one referring sitemap page; listed below | Discovery weakness varies by page; do not add links mechanically |
| Six identical H1/title pages | Six reproduced, all articles | Diagnostic only; keep unless a clearer search title is justified |
| Five overlong titles | Eight exceed an illustrative 65-character threshold | Truncation risk, not a Google length violation; exact SEMrush threshold unknown |
| Two content optimisation warnings | URLs and warning details absent | Unverified; no copy changes justified from counts alone |
| 25 low text-to-HTML ratios | All 32 are below 4% by this audit's byte method | Low ratios reproduced; inference that content is missing is unsupported for service/article pages |

## Structured data: priority 1

The live setup article emits parseable JSON-LD: shared LocalBusiness, BreadcrumbList and an Article/HowTo graph. All JSON-LD script blocks across the 32 fetched pages parse as JSON. This does not establish complete vocabulary or rich-result validation for every schema type on the site.

1. **HowTo.areaServed is outside its documented domain.** HowTo inherits CreativeWork; areaServed is defined for Organization, Service and other listed types, not CreativeWork/HowTo. City is a valid value type, but the subject type is wrong. provider is valid on CreativeWork, and LocalBusiness inherits Organization, so provider itself is not the error. Steps have names, text, images and matching page section IDs in the implementation.
2. **The nested provider is a separate incomplete LocalBusiness.** It contains name, URL and telephone but no address or @id. Google requires name and physical address for LocalBusiness rich-result eligibility. Schema.org itself does not impose Google's required-field rules: missing address is not a JSON syntax error or necessarily a Schema.org vocabulary error.
3. **Shared business address merits an accuracy review.** src/lib/jsonLd.ts supplies only Perth, Western Australia and AU, with no street or postcode. This is not the same as the nested node's entirely missing address, and this audit has not established that Google rejects it. Confirm whether it represents an actual business location rather than just the service area. Do not invent or publish a private street address to satisfy an SEO tool. If a suitable public location cannot be represented, consider an accurate Organization node instead, updating Service provider references consistently.

**Proposed minimal fix:** remove the optional HowTo node, retaining Article, the visible guide and the shared business entity. This removes the unsupported property and duplicate nested business without touching sales copy or design. Google retired HowTo rich results in September 2023; removing it is schema cleanup, not recovery of a rich-result feature. Alternatively, keep HowTo for other consumers, remove areaServed (or use appropriate spatialCoverage), and reference the shared business @id rather than creating another entity. Choose one approach, not both.

**Additional confirmed schema destination problem:** article breadcrumbs reference https://www.blakesmartsolutions.com.au/articles, which returns 404. JSON-LD is not an incoming HTML link. Proposed fix: omit the nonexistent intermediate Articles crumb and keep Home → article. Creating a genuine article hub is a larger optional project, not required for this correction.

Validation here is manual comparison of emitted data with official definitions, plus JSON parsing; no automated Schema Markup Validator or Google Rich Results Test result is claimed. After an approved fix, validate the generated markup in both tools, noting that Google's test no longer evaluates HowTo rich-result eligibility.

## Crawlability and useful discovery: priority 2

Live robots.txt permits public pages and points to the correct sitemap. All 32 sitemap pages have expected self-canonicals and no noindex directive in parsed HTML. No general JavaScript-only content barrier was found.

**Orphans and proposed treatment:**

- /rural-starlink-installation-wa: zero incoming anchors. Add a descriptive link from the main Starlink page's relevant rural-property discussion. Its current title, “Starlink Installation | Dish, Cable & Wi-Fi Setup”, omits its rural WA distinction. Proposed title: “Rural Starlink Installation WA | Blake Smart Solutions”. Add a rural-page link to the Darlington whole-property case study and the shed connectivity service where those examples help explain the options. Darlington is a Perth Hills example; do not imply a remote regional installation or coverage beyond the actual business service area.
- /wifi-enquiry: zero incoming anchors; a utility page that opens a quote modal, not a substantive service landing page. Recommended: remove from sitemap and set noindex,follow if intended solely as a conversion endpoint. Keep usable for direct campaigns. If intentionally searchable, give it a meaningful service-page entry and a usable standalone enquiry experience. Do not add sitewide SEO links solely to clear an orphan warning.

**Pages with one incoming source:**

- /articles/7-ways-to-fix-wifi — from /wifi-solutions-perth.
- /articles/starlink-installation-cost-perth — from /starlink-installation-perth.
- /articles/where-to-book-starlink-installer-perth — from /starlink-installation-perth.
- /case-studies — from /starlink-installation-perth.
- /recent-installations/ajax — from /ajax-security-perth.
- /starlink-installation-perth/business-starlink-installation — from /starlink-installation-perth.

Proposed selective additions: installation cost advice → booking guide where a reader is ready to arrange installation; booking guide → cost advice where discussing quote expectations; Starlink setup guide → City Beach case study where discussing mounting/cable/router finish; shed service → rural Starlink only where the upstream connection is relevant. These are proposed editorial placements, not changes already made. The case studies hub, Ajax gallery and business Starlink page already have appropriate parent-service discovery; no extra link is required merely because each has one source. A business Wi-Fi → business Starlink link may help readers evaluating incoming connectivity, but should only be added where the paragraph supports that intent.

**Existing links to retain:** main Starlink already links directly to all three case studies and the case-studies hub. Main Wi-Fi links directly to Darlington; all five Wi-Fi detail pages also link to Darlington. City Beach and Oakford each have two sources (main Starlink and case-studies hub); Darlington has eight. Adding duplicate case-study blocks to these service pages is unnecessary.

The setup guide currently sends both “WiFi Boost” and “Shed WiFi” cards to the general Wi-Fi page. Proposed precise destination for the latter: /wifi-solutions-perth/internet-to-sheds-workshops, keeping its useful existing label and copy.

## Server-rendered content and ratios

Curl responses contain headings, service explanations, FAQs, installation descriptions, article steps and case-study text in HTML, outside scripts. Client component declarations alone do not mean content is absent from the server response. Service/article main text is substantial; see per-page counts in CSV. The short case-studies hub is a directory with linked summaries, so its roughly 141 words do not establish thin-content failure.

**Real exception:** /enquiry and /wifi-enquiry have approximately 13 and 27 main-text words respectively. Their form is not in initial HTML: EnquiryPageClient opens a modal in useEffect; EnquiryModalProvider dynamically loads it with ssr:false. The button also requires JavaScript. Site phone links remain available in shared HTML. This is an enquiry resilience/accessibility issue, not evidence that the site's service copy is hidden. Proposed small improvement: a visible telephone/email fallback next to the opener; consider a standalone server-rendered form separately if required. Do not pad either endpoint with SEO text. Consider whether /enquiry also belongs outside the sitemap with noindex as a utility page.

Raw responses are approximately 259–435 KB. On the setup guide, script elements account for about 244 KB and inline styles about 75 KB. next.config.ts enables experimental.inlineCss; React hydration/Flight data and JSON-LD add markup bytes. Consequently the denominator is large even when useful text is delivered. Ratios in CSV = whitespace-normalized body text UTF-8 bytes / raw HTML bytes, excluding script/style/noscript text. This is not claimed to reproduce SEMrush's proprietary calculation or actual visual visibility. Main word counts include button/link labels and shared template content inside main.

Do not remove inline CSS, hydration or structured data just to raise ratios. Any future payload work should demonstrate an actual performance improvement and preserve rendering/interaction. No content expansion or design change is proposed for the 25 historical ratio warnings.

## Titles and content: priority 3

The six matching H1/title pairs are:

- /articles/is-starlink-worth-it: Is Starlink Worth It? A Perth Installer's Honest Opinion
- /articles/starlink-installation-cost-perth: Starlink Installation Cost Perth | Real-World Pricing Guide
- /articles/starlink-vs-nbn-perth: Starlink vs NBN: Which Is Better in Perth?
- /articles/what-makes-a-great-starlink-installer: What Makes a Great Starlink Installer?
- /articles/where-to-book-starlink-installer-perth: Where to Book a Starlink Installer in Perth
- /articles/why-nbn-feels-slow: Why Fast NBN (or Starlink) Still Feels Slow (And How To Fix It)

These are descriptive article titles; matching a page H1 is not independently a defect. Retain them unless search intent or performance evidence supports a change. Existing successful copy has not been established by analytics, so avoid speculative rewrites.

Long-title candidates below use >65 characters as a review threshold, not a hard SEO limit. Counts include decoded whitespace as delivered. Google truncates by available display width; narrow/wide letters and devices differ. Suggested alternatives alter metadata only, leaving H1 and body copy intact. For case studies, preserve the useful differentiating detail while removing verbosity and repetitive branding where needed.

| Page | Current characters | Proposed metadata title for review |
| --- | ---: | --- |
| / | 77 | Blake Smart Solutions Perth | CCTV, Wi-Fi & Starlink |
| /ajax-security-perth | 70 | Ajax Alarm Installation Perth | Home & Business Security |
| /articles/7-ways-to-fix-wifi | 77 | 7 Ways to Fix Slow Home Wi-Fi | Perth Internet Guide |
| /case-studies/starlink-installation-city-beach-gen-3-router-bracket | 99 | City Beach Starlink Install | Gen 3 Router Bracket |
| /case-studies/starlink-installation-oakford-poor-nbn-fixed-wireless | 98 | Oakford Starlink Install After Poor NBN Fixed Wireless |
| /case-studies/starlink-wifi-wireless-bridge-darlington | 99 | Darlington Starlink, Wi-Fi & Shed Internet Installation |
| /wifi-solutions-perth/business-wifi-installation | 67 | Business Wi-Fi Installation Perth | Blake Smart Solutions |
| /wifi-solutions-perth/internet-to-sheds-workshops | 66 | Internet to Sheds Perth | Wireless Bridge Installation |

The current titles and H1s are in the CSV. No missing title or canonical was found. No generic keyword expansion is proposed. The two unspecified content optimisation warnings remain unresolved pending the affected URLs and exact messages; do not assume they refer to the two enquiry pages. No conclusion about inadequate word count can be drawn from the aggregate warning alone.

## Proposed implementation order after review

1. Clean setup-page HowTo/duplicate business markup; correct dead article breadcrumb destination. Review shared business entity accuracy without fabricating address data.
2. Restore rural-page discovery and its distinguishing metadata; decide utility-page indexing policy. Correct the existing shed-card destination and add only useful contextual links described above.
3. Add enquiry contact fallback. Review the optional shorter metadata titles individually; preserve article H1/title matches unless there is another reason to change them.
4. Verify a fresh production build, raw HTML content/anchors/canonicals/robots, JSON parsing, schema validators and sitemap consistency. Deploy only after explicit approval, then recrawl and compare URL-level SEMrush results. Search Console URL Inspection would provide Google-specific rendering/indexing evidence.

No website fixes or deployment have been performed. Only this report and its evidence CSV have been added to the workspace.

## Official references checked

- [Schema.org HowTo](https://schema.org/HowTo): type inheritance and supported properties.
- [Schema.org areaServed](https://schema.org/areaServed): supported subject types.
- [Schema.org provider](https://schema.org/provider): CreativeWork domain and Organization/Person values.
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness): business vocabulary.
- [Google LocalBusiness documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business): required name/address and physical-location meaning.
- [Google HowTo retirement announcement](https://developers.google.com/search/blog/2023/08/howto-faq-changes): September 2023 retirement; unused markup need not be removed solely for retirement.
- [Google title guidance](https://developers.google.com/search/docs/appearance/title-link): concise descriptive titles, no fixed character maximum.
- [Google crawlable links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable): HTML anchors and useful internal links.
- [Google helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): people-first content; no preferred word count.
