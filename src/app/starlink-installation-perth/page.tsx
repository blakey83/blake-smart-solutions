import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { servicePageMetadataContent } from "@/content/solutions/pageMetadata";
import { greatStarlinkInstallerContent } from "@/content/articles/greatStarlinkInstaller";
import { isStarlinkWorthItContent } from "@/content/articles/isStarlinkWorthIt";
import { bookStarlinkInstallerPerthContent } from "@/content/articles/bookStarlinkInstallerPerth";
import { starlinkInstallationCostPerthContent } from "@/content/articles/starlinkInstallationCostPerth";
import { starlinkSetupGuideContent } from "@/content/articles/starlinkSetupPerth";
import { starlinkVsNbnPerthContent } from "@/content/articles/starlinkVsNbnPerth";
import { caseStudies } from "@/content/case-studies/starlinkCityBeach";
import {
  starlinkSolutionContent,
  starlinkSolutionTrustItems,
  whyChooseUsStarlink,
} from "@/content/solutions/starlink_product";
import {
  absoluteUrl,
  buildFaqPageNode,
  buildSchemaGraph,
  buildServiceNode,
} from "@/lib/jsonLd";
import { buildSeoMetadata } from "@/lib/seoMetadata";

const pagePath = "/starlink-installation-perth";

export const metadata: Metadata = buildSeoMetadata({
  title: servicePageMetadataContent.starlinkInstallationPerth.title,
  description: servicePageMetadataContent.starlinkInstallationPerth.description,
  path: pagePath,
  keywords: [
    "Starlink Installation",
    "Starlink Installation Perth",
    "starlink installation perth",
    "professional starlink installation perth",
    "starlink installer perth",
    "starlink installers perth",
    "starlink dish installation perth",
    "starlink setup perth",
    "starlink cable installation perth",
    "starlink roof mount perth",
  ],
  image: {
    url: "/images/products/starlink/Starlink.jpg",
    alt: "Starlink installation Perth dish mounted on a roof",
  },
});

const structuredData = buildSchemaGraph([
  buildServiceNode({
    name: "Starlink Installation Perth",
    description: servicePageMetadataContent.starlinkInstallationPerth.description,
    path: pagePath,
    serviceType: "Starlink installation",
    image: {
      url: "/images/products/starlink/Starlink.jpg",
      alt: "Starlink installation Perth dish mounted on a roof",
    },
    offerDescription:
      "Professional Starlink Installation Perth service for dish mounting, cable routing, router setup and Wi-Fi coverage options for Perth homes and properties.",
  }),
  {
    "@type": "ItemList",
    "@id": `${absoluteUrl(pagePath)}#case-studies`,
    name: "Starlink installation case studies",
    itemListElement: caseStudies.map((caseStudy, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: caseStudy.pageTitle,
      url: absoluteUrl(caseStudy.pagePath),
    })),
  },
  buildFaqPageNode(pagePath, starlinkSolutionContent.faqs),
]);

const relatedStarlinkArticles = [
  {
    title: bookStarlinkInstallerPerthContent.pageTitle,
    description: bookStarlinkInstallerPerthContent.pageDescription,
    href: bookStarlinkInstallerPerthContent.pagePath,
    cta: "Book a Starlink installer",
  },
  {
    title: starlinkInstallationCostPerthContent.pageTitle,
    description: starlinkInstallationCostPerthContent.pageDescription,
    href: starlinkInstallationCostPerthContent.pagePath,
    cta: "View Starlink install costs",
  },
  {
    title: starlinkSetupGuideContent.pageTitle,
    description: starlinkSetupGuideContent.pageDescription,
    href: starlinkSetupGuideContent.pagePath,
    cta: "Read the Starlink setup guide",
  },
  {
    title: isStarlinkWorthItContent.pageTitle,
    description: isStarlinkWorthItContent.pageDescription,
    href: isStarlinkWorthItContent.pagePath,
    cta: "Read the honest Starlink opinion",
  },
  {
    title: starlinkVsNbnPerthContent.pageTitle,
    description: starlinkVsNbnPerthContent.pageDescription,
    href: starlinkVsNbnPerthContent.pagePath,
    cta: "Compare Starlink and NBN",
  },
  {
    title: greatStarlinkInstallerContent.pageTitle,
    description: greatStarlinkInstallerContent.pageDescription,
    href: greatStarlinkInstallerContent.pagePath,
    cta: "Choose a Starlink installer",
  },
];

export default function StarlinkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <SolutionPageTemplate
        {...starlinkSolutionContent}
        currentPath={pagePath}
        trustItems={starlinkSolutionTrustItems}
        content={whyChooseUsStarlink}
      />
      <section className="border-t border-[var(--color-border)] bg-[var(--color-page)]">
        <div className="mx-auto max-w-6xl space-y-6 px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-[0_14px_30px_rgba(15,23,42,0.04)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Starlink installation case studies
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              See how real Perth Starlink installs are planned and finished
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted)]">
              Read in-depth installation reviews showing dish placement,
              mounting, cable routing, router location and the practical
              problems we solve on Perth homes and rural properties.
            </p>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {caseStudies.map((caseStudy) => (
                <Link
                  key={caseStudy.slug}
                  href={caseStudy.pagePath}
                  className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-page)] transition hover:border-[var(--color-accent)] hover:bg-white"
                >
                  <Image
                    src={caseStudy.hero.image.src}
                    alt={caseStudy.hero.image.alt}
                    width={768}
                    height={576}
                    sizes="(min-width: 768px) 32rem, 100vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                      {caseStudy.location}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                      {caseStudy.pageTitle}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                      {caseStudy.pageDescription}
                    </p>
                    <span className="mt-5 inline-flex text-sm font-semibold text-[var(--color-accent)] transition group-hover:text-[var(--color-accent-strong)]">
                      Read case study
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/case-studies"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,110,184,0.16)] transition hover:bg-[var(--color-accent-strong)]"
              >
                View all case studies
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-[0_14px_30px_rgba(15,23,42,0.04)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Starlink Installation Perth guides
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              Planning a Starlink installation?
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
              Read our Starlink installation guides for dish placement,
              mounting, cable routing, Wi-Fi setup and the common mistakes that
              affect Starlink performance in Perth and WA homes.
            </p>
            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {relatedStarlinkArticles.map((article) => (
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
