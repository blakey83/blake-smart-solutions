import type { Metadata } from "next";
import Link from "next/link";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { servicePageMetadataContent } from "@/content/solutions/pageMetadata";
import { greatStarlinkInstallerContent } from "@/content/articles/greatStarlinkInstaller";
import { isStarlinkWorthItContent } from "@/content/articles/isStarlinkWorthIt";
import { starlinkSetupGuideContent } from "@/content/articles/starlinkSetupPerth";
import { starlinkVsNbnPerthContent } from "@/content/articles/starlinkVsNbnPerth";
import { siteMetadataContent } from "@/content/components/siteContent";
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
  keywords: [
    "starlink installation perth",
    "starlink installer perth",
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

const pageUrl = `${siteMetadataContent.website}/starlink-installation-perth`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Starlink Installation Perth",
      serviceType: "Starlink installation",
      description: servicePageMetadataContent.starlinkInstallationPerth.description,
      url: pageUrl,
      provider: {
        "@id": `${siteMetadataContent.website}#localbusiness`,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Perth",
        },
        {
          "@type": "State",
          name: "Western Australia",
        },
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
        url: pageUrl,
        description:
          "Professional Starlink dish mounting, cable routing, router setup and Wi-Fi coverage options for Perth homes and properties.",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteMetadataContent.website}#localbusiness`,
      name: siteMetadataContent.businessName,
      url: siteMetadataContent.website,
      telephone: siteMetadataContent.telephone,
      image: `${siteMetadataContent.website}/images/products/starlink/Starlink.jpg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteMetadataContent.city,
        addressRegion: siteMetadataContent.region,
        addressCountry: siteMetadataContent.country,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: starlinkSolutionContent.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteMetadataContent.website,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Starlink Installation Perth",
          item: pageUrl,
        },
      ],
    },
  ],
};

const relatedStarlinkArticles = [
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
        currentPath="/starlink-installation-perth"
        trustItems={starlinkSolutionTrustItems}
        content={whyChooseUsStarlink}
      />
      <section className="border-t border-[var(--color-border)] bg-[var(--color-page)]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
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
            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
