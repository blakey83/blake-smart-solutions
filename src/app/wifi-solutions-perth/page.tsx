import type { Metadata } from "next";
import Link from "next/link";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { wifiSolutionsPerthPageContent } from "@/content/page-contents/wifiSolutionsPerth";
import { wifiSolutionContent } from "@/content/wifiSolutionContent";
import { wifiSolutionTrustItems } from "@/content/wifiSolutionContent";

export const metadata: Metadata = {
  title: wifiSolutionsPerthPageContent.metadata.title,
  description: wifiSolutionsPerthPageContent.metadata.description,
};

export default function WifiSolutionsPerthPage() {
  return (
    <>
      <SolutionPageTemplate
        {...wifiSolutionContent}
        currentPath="/wifi-solutions-perth"
        trustItems={wifiSolutionTrustItems}
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
            <Link
              href="/7-ways-to-fix-wifi"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] px-5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              {wifiSolutionsPerthPageContent.guide.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
