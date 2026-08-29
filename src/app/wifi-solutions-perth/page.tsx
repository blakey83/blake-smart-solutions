import type { Metadata } from "next";
import Link from "next/link";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { whyNbnFeelsSlowContent } from "@/content/articles/whyNbnFeelsSlow";
import { wifiLandingPageContent } from "@/content/articles/wifiLandingPage";
import { wifiSolutionsPerthPageContent } from "@/content/solutions/wifiSolutionsPerth";
import { wifiSitelinkPages } from "@/content/solutions/wifiSitelinks";
import { wifiSolutionContent } from "@/content/solutions/wifiSolutionContent";
import { wifiSolutionTrustItems } from "@/content/solutions/wifiSolutionContent";
import { whyChooseUsWiFi } from "@/content/solutions/wifiSolutionContent";
import {
  buildFaqPageNode,
  buildSchemaGraph,
  buildServiceNode,
} from "@/lib/jsonLd";
import { buildSeoMetadata } from "@/lib/seoMetadata";

const pagePath = "/wifi-solutions-perth";

export const metadata: Metadata = buildSeoMetadata({
  title: wifiSolutionsPerthPageContent.metadata.title,
  description: wifiSolutionsPerthPageContent.metadata.description,
  path: pagePath,
  image: {
    url: "/images/solutions/wifi/WiFi_hero.png",
    alt: "WiFi coverage testing and installation in Perth",
  },
});

const structuredData = buildSchemaGraph([
  buildServiceNode({
    name: "WiFi Solutions Perth",
    description: wifiSolutionsPerthPageContent.metadata.description,
    path: pagePath,
    serviceType: "WiFi installation and network design",
    image: {
      url: "/images/solutions/wifi/WiFi_hero.png",
      alt: "WiFi coverage testing and installation in Perth",
    },
  }),
  buildFaqPageNode(pagePath, wifiSolutionContent.faqs),
]);

const relatedWifiArticles = [
  {
    title: wifiLandingPageContent.metadata.title,
    description: wifiLandingPageContent.metadata.description,
    href: "/articles/7-ways-to-fix-wifi",
    cta: wifiSolutionsPerthPageContent.guide.cta,
  },
  {
    title: whyNbnFeelsSlowContent.metadata.title,
    description: whyNbnFeelsSlowContent.metadata.description,
    href: whyNbnFeelsSlowContent.pagePath,
    cta: "Read why fast internet still feels slow",
  },
];

export default function WifiSolutionsPerthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <SolutionPageTemplate
        {...wifiSolutionContent}
        currentPath={pagePath}
        trustItems={wifiSolutionTrustItems}
        content={whyChooseUsWiFi}
      />
      <section className="border-t border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Explore Wi-Fi services
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            Start with the connectivity problem you need solved
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            See how we approach the most common Wi-Fi and network jobs for Perth homes and small businesses.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {wifiSitelinkPages.map((page) => (
              <Link
                key={page.slug}
                href={`/wifi-solutions-perth/${page.slug}`}
                className="group flex min-h-44 flex-col rounded-[24px] border border-[var(--color-border)] bg-[var(--color-page)] p-6 transition hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-white hover:shadow-[0_16px_34px_rgba(15,23,42,0.07)]"
              >
                <h3 className="text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                  {page.enquiryName}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[var(--color-muted)]">
                  {page.subhead}
                </p>
                <span className="mt-5 text-sm font-semibold text-[var(--color-accent)]">
                  View service <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-[var(--color-border)] bg-[var(--color-page)]">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-[0_14px_30px_rgba(15,23,42,0.04)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              {wifiSolutionsPerthPageContent.guide.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              {wifiSolutionsPerthPageContent.guide.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
              {wifiSolutionsPerthPageContent.guide.description}
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {relatedWifiArticles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-page)] p-5 transition hover:border-[var(--color-accent)] hover:bg-white"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-[var(--color-ink)]">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[var(--color-muted)]">
                    {article.description}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-[var(--color-accent)] transition group-hover:text-[var(--color-accent-strong)]">
                    {article.cta}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
