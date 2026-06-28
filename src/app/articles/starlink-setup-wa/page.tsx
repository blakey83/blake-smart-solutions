import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PhoneLink } from "@/components/PhoneLink";
import { starlinkSetupGuideContent } from "@/content/articles/starlinkSetupPerth";
import { siteMetadataContent } from "@/content/components/siteContent";
import { StarlinkSetupCta } from "./StarlinkSetupCta";

const pagePath = starlinkSetupGuideContent.pagePath;
const pageUrl = `${siteMetadataContent.website}${pagePath}`;
const pageTitle = starlinkSetupGuideContent.pageTitle;
const pageDescription = starlinkSetupGuideContent.pageDescription;
const heroImageUrl = `${siteMetadataContent.website}${starlinkSetupGuideContent.hero.image.src}`;
const allImageUrls = [
  heroImageUrl,
  `${siteMetadataContent.website}${starlinkSetupGuideContent.intro.image.src}`,
  ...starlinkSetupGuideContent.sections.map(
    (section) => `${siteMetadataContent.website}${section.image.src}`,
  ),
  `${siteMetadataContent.website}${starlinkSetupGuideContent.conclusion.image.src}`,
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Starlink setup Perth",
    "Starlink setup WA",
    "Starlink installation Perth",
    "Starlink installation WA",
    "how to set up Starlink",
    "Starlink dish mounting",
    "Starlink cable routing",
    "Starlink WiFi setup",
  ],
  alternates: {
    canonical: pageUrl,
  },
  authors: [{ name: siteMetadataContent.businessName }],
  category: "Starlink installation guide",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: starlinkSetupGuideContent.siteName,
    images: [
      {
        url: heroImageUrl,
        alt: starlinkSetupGuideContent.hero.image.alt,
      },
    ],
    locale: "en_AU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [heroImageUrl],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: pageTitle,
      description: pageDescription,
      image: allImageUrls,
      articleSection: "Starlink setup guide",
      inLanguage: "en-AU",
      mainEntityOfPage: pageUrl,
      author: {
        "@type": "Organization",
        name: siteMetadataContent.businessName,
        url: siteMetadataContent.website,
      },
      publisher: {
        "@type": "Organization",
        name: siteMetadataContent.businessName,
        logo: {
          "@type": "ImageObject",
          url: `${siteMetadataContent.website}/images/branding/BSS_logo.png`,
        },
      },
    },
    {
      "@type": "HowTo",
      "@id": `${pageUrl}#howto`,
      name: starlinkSetupGuideContent.hero.title,
      description: pageDescription,
      image: heroImageUrl,
      inLanguage: "en-AU",
      areaServed: {
        "@type": "City",
        name: siteMetadataContent.city,
      },
      provider: {
        "@type": "LocalBusiness",
        name: siteMetadataContent.businessName,
        url: siteMetadataContent.website,
        telephone: siteMetadataContent.telephone,
      },
      step: starlinkSetupGuideContent.sections.map((section, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: section.title,
        url: `${pageUrl}#${section.id}`,
        image: `${siteMetadataContent.website}${section.image.src}`,
        text: [
          section.intro,
          ...(section.paragraphs ?? []),
          ...section.bullets,
        ].join(" "),
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
          item: `${siteMetadataContent.website}/starlink-installation-perth`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: starlinkSetupGuideContent.hero.title,
          item: pageUrl,
        },
      ],
    },
  ],
};

type StarlinkImageProps = {
  image: { src: string; alt: string };
  loading?: "eager" | "lazy";
};

function StarlinkImage({ image, loading = "lazy" }: StarlinkImageProps) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 34rem, 100vw"
          loading={loading}
          className="object-cover"
        />
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-base leading-7 text-[var(--color-ink)]"
        >
          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function StarlinkSetupWaPage() {
  return (
    <div className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <section className="border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              {starlinkSetupGuideContent.hero.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
              {starlinkSetupGuideContent.hero.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              {starlinkSetupGuideContent.hero.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <StarlinkSetupCta className="w-full px-6 sm:w-auto">
                {starlinkSetupGuideContent.hero.cta}
              </StarlinkSetupCta>
              <Link
                href="/starlink-installation-perth"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white px-5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {starlinkSetupGuideContent.hero.secondaryCta}
              </Link>
            </div>
          </div>

          <StarlinkImage
            image={starlinkSetupGuideContent.hero.image}
            loading="eager"
          />
        </div>
      </section>

      <section className="bg-[var(--color-page)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-20">
          <StarlinkImage image={starlinkSetupGuideContent.intro.image} />
          <div className="max-w-2xl lg:order-first">
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              {starlinkSetupGuideContent.intro.title}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              {starlinkSetupGuideContent.intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {starlinkSetupGuideContent.sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={
            index % 2 === 0
              ? "border-y border-[var(--color-border)] bg-white"
              : "bg-[var(--color-page)]"
          }
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
            <div className={index % 2 === 0 ? "" : "lg:order-2"}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                {section.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                {section.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                {section.intro}
              </p>
              {section.paragraphs ? (
                <div className="mt-4 space-y-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              <BulletList items={section.bullets} />
              {section.callout ? (
                <div className="mt-6 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-page)] p-5">
                  <h3 className="text-lg font-semibold tracking-tight text-[var(--color-ink)]">
                    {section.callout.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                    {section.callout.text}
                  </p>
                </div>
              ) : null}
            </div>

            <StarlinkImage image={section.image} />
          </div>
        </section>
      ))}

      <section
        id="final-cta"
        className="border-t border-[var(--color-border)] bg-white"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              {starlinkSetupGuideContent.conclusion.title}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              {starlinkSetupGuideContent.conclusion.paragraphs.map(
                (paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ),
              )}
            </div>

            <div className="mt-8 rounded-[28px] border border-[var(--color-border)] bg-[var(--color-page)] p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
                {starlinkSetupGuideContent.conclusion.cta.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
                {starlinkSetupGuideContent.conclusion.cta.text}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <StarlinkSetupCta>
                  {starlinkSetupGuideContent.conclusion.cta.buttonLabel}
                </StarlinkSetupCta>
                <PhoneLink
                  href="tel:0477948079"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white px-5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  {
                    starlinkSetupGuideContent.conclusion.cta
                      .secondaryButtonLabel
                  }
                </PhoneLink>
              </div>
            </div>
          </div>

          <StarlinkImage image={starlinkSetupGuideContent.conclusion.image} />
        </div>
      </section>

      <section className="bg-[var(--color-page)]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Related services
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              Keep Building A Better Connection
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {starlinkSetupGuideContent.relatedServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]"
              >
                <h3 className="text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-[var(--color-accent)]">
                  View service
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
