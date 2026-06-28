import type { Metadata } from "next";
import Link from "next/link";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { servicePageMetadataContent } from "@/content/solutions/pageMetadata";
import { starlinkSetupGuideContent } from "@/content/articles/starlinkSetupPerth";
import {
  starlinkSolutionContent,
  starlinkSolutionTrustItems,
  whyChooseUsStarlink,
} from "@/content/solutions/starlink_product";
import { buildSeoMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildSeoMetadata({
  title: servicePageMetadataContent.starlinkInstallationPerth.title,
  description: servicePageMetadataContent.starlinkInstallationPerth.description,
  path: "/starlink-installation-perth",
  image: {
    url: "/images/products/starlink/Starlink.jpg",
    alt: "Starlink dish installed on a Perth roof",
  },
});

export default function StarlinkPage() {
  return (
    <>
      <SolutionPageTemplate
        {...starlinkSolutionContent}
        currentPath="/starlink-installation-perth"
        trustItems={starlinkSolutionTrustItems}
        content={whyChooseUsStarlink}
      />
      <section className="border-t border-[var(--color-border)] bg-[var(--color-page)]">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-[0_14px_30px_rgba(15,23,42,0.04)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Starlink guide
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              Planning a Starlink setup?
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
              Read the setup guide for dish placement, mounting, cable routing,
              Wi-Fi setup and the common mistakes that affect Starlink
              performance in WA homes.
            </p>
            <Link
              href={starlinkSetupGuideContent.pagePath}
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] px-5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Read the Starlink setup guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
