import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { isStarlinkWorthItContent } from "@/content/articles/isStarlinkWorthIt";
import { siteMetadataContent } from "@/content/components/siteContent";
import { StarlinkSetupCta } from "../starlink-setup-wa/StarlinkSetupCta";

const pagePath = isStarlinkWorthItContent.pagePath;
const pageUrl = `${siteMetadataContent.website}${pagePath}`;
const heroImageUrl = `${siteMetadataContent.website}${isStarlinkWorthItContent.hero.image.src}`;

export const metadata: Metadata = {
  title: isStarlinkWorthItContent.pageTitle,
  description: isStarlinkWorthItContent.pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: isStarlinkWorthItContent.pageTitle,
    description: isStarlinkWorthItContent.pageDescription,
    url: pageUrl,
    siteName: siteMetadataContent.businessName,
    images: [
      {
        url: heroImageUrl,
        alt: isStarlinkWorthItContent.hero.image.alt,
      },
    ],
    locale: "en_AU",
    type: "article",
    publishedTime: isStarlinkWorthItContent.publishedTime,
    modifiedTime: isStarlinkWorthItContent.modifiedTime,
  },
  twitter: {
    card: "summary_large_image",
    title: isStarlinkWorthItContent.pageTitle,
    description: isStarlinkWorthItContent.pageDescription,
    images: [heroImageUrl],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: isStarlinkWorthItContent.pageTitle,
  description: isStarlinkWorthItContent.pageDescription,
  image: [
    heroImageUrl,
    ...isStarlinkWorthItContent.images.map(
      (image) => `${siteMetadataContent.website}${image.src}`,
    ),
  ],
  datePublished: isStarlinkWorthItContent.publishedTime,
  dateModified: isStarlinkWorthItContent.modifiedTime,
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
};

type ArticleImageProps = {
  image: (typeof isStarlinkWorthItContent.images)[number];
};

function ArticleImage({ image }: ArticleImageProps) {
  return (
    <figure className="my-10 overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-white shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 48rem, 100vw"
          className="object-cover"
        />
      </div>
    </figure>
  );
}

function Paragraphs({ paragraphs }: { paragraphs?: string[] }) {
  if (!paragraphs?.length) {
    return null;
  }

  return (
    <>
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className="text-base leading-7 text-[var(--color-muted)] sm:text-lg"
        >
          {paragraph}
        </p>
      ))}
    </>
  );
}

function BulletList({ items }: { items?: string[] }) {
  if (!items?.length) {
    return null;
  }

  return (
    <ul className="my-5 space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-base leading-7 text-[var(--color-ink)] sm:text-lg"
        >
          <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function IsStarlinkWorthItPage() {
  const images = isStarlinkWorthItContent.images;

  return (
    <div className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <section className="border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              {isStarlinkWorthItContent.hero.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
              {isStarlinkWorthItContent.pageTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              {isStarlinkWorthItContent.hero.intro}
            </p>
          </div>

          <figure className="overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-white shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={isStarlinkWorthItContent.hero.image.src}
                alt={isStarlinkWorthItContent.hero.image.alt}
                fill
                sizes="(min-width: 1024px) 32rem, 100vw"
                loading="eager"
                className="object-cover"
              />
            </div>
          </figure>
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <article className="max-w-3xl space-y-5">
          <div className="rounded-2xl border-l-4 border-[var(--color-accent)] bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
            <p className="text-base leading-7 text-[var(--color-ink)] sm:text-lg">
              {isStarlinkWorthItContent.summary}
            </p>
          </div>

          {isStarlinkWorthItContent.sections.map((section, index) => (
            <Fragment key={section.title}>
              <section className="pt-8 first:pt-0">
                <h2 className="mt-8 border-t border-[var(--color-border)] pt-10 text-3xl font-semibold tracking-tight text-[var(--color-ink)] first:mt-0 first:border-t-0 first:pt-0">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-5">
                  <Paragraphs paragraphs={section.paragraphs} />
                  {section.subsections?.map((subsection) => (
                    <div key={subsection.title} className="space-y-3">
                      <h3 className="pt-3 text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
                        {subsection.title}
                      </h3>
                      <Paragraphs paragraphs={subsection.paragraphs} />
                      <BulletList items={subsection.bullets} />
                    </div>
                  ))}
                </div>
              </section>
              {images[index] ? <ArticleImage image={images[index]} /> : null}
            </Fragment>
          ))}
        </article>
      </main>

      <section className="border-y border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Related articles
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              Keep researching your connection
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {isStarlinkWorthItContent.relatedArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-page)] p-6 transition hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-white"
              >
                <h3 className="text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {article.description}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-[var(--color-accent)]">
                  Read article
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {isStarlinkWorthItContent.finalCta.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            {isStarlinkWorthItContent.finalCta.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            {isStarlinkWorthItContent.finalCta.description}
          </p>
          <div className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3">
            <StarlinkSetupCta className="w-full">
              {isStarlinkWorthItContent.finalCta.buttonLabel}
            </StarlinkSetupCta>
            <Link
              href="/starlink-installation-perth"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white px-5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              View Starlink installation Perth
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
