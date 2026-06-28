import type { Metadata } from "next";
import Link from "next/link";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { whyNbnFeelsSlowContent } from "@/content/article-content/content";
import { wifiLandingPageContent } from "@/content/landing-page-contents/wifiLandingPage";
import { wifiSolutionsPerthPageContent } from "@/content/page-contents/wifiSolutionsPerth";
import { wifiSolutionContent } from "@/content/wifiSolutionContent";
import { wifiSolutionTrustItems } from "@/content/wifiSolutionContent";
import { whyChooseUsWiFi } from "@/content/wifiSolutionContent";
import { buildSeoMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildSeoMetadata({
  title: wifiSolutionsPerthPageContent.metadata.title,
  description: wifiSolutionsPerthPageContent.metadata.description,
  path: "/wifi-solutions-perth",
  image: {
    url: "/images/solutions/wifi/WiFi_hero.png",
    alt: "WiFi coverage testing and installation in Perth",
  },
});

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
      <SolutionPageTemplate
        {...wifiSolutionContent}
        currentPath="/wifi-solutions-perth"
        trustItems={wifiSolutionTrustItems}
        content={whyChooseUsWiFi}
      />
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
