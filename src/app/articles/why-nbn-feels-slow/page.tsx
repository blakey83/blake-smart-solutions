import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { siteMetadataContent } from "@/content/components/siteContent";
import { WifiArticleInlineCta } from "../7-ways-to-fix-wifi/WifiArticleInlineCta";
import { WifiLandingPageCtas } from "../7-ways-to-fix-wifi/WifiLandingPageCtas";
import {
  whyNbnFeelsSlowContent,
  whyNbnFeelsSlowImages,
} from "@/content/articles/whyNbnFeelsSlow";

const pagePath = whyNbnFeelsSlowContent.pagePath;
const pageUrl = `${siteMetadataContent.website}${pagePath}`;

export const metadata: Metadata = {
  title: whyNbnFeelsSlowContent.metadata.title,
  description: whyNbnFeelsSlowContent.metadata.description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: whyNbnFeelsSlowContent.metadata.title,
    description: whyNbnFeelsSlowContent.metadata.description,
    url: pageUrl,
    siteName: siteMetadataContent.businessName,
    images: [
      {
        url: `${siteMetadataContent.website}${whyNbnFeelsSlowImages[0].src}`,
        alt: whyNbnFeelsSlowImages[0].alt,
      },
    ],
    locale: "en_AU",
    type: "article",
    publishedTime: whyNbnFeelsSlowContent.metadata.publishedTime,
    modifiedTime: whyNbnFeelsSlowContent.metadata.modifiedTime,
  },
  twitter: {
    card: "summary_large_image",
    title: whyNbnFeelsSlowContent.metadata.title,
    description: whyNbnFeelsSlowContent.metadata.description,
    images: [`${siteMetadataContent.website}${whyNbnFeelsSlowImages[0].src}`],
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: whyNbnFeelsSlowContent.metadata.title,
  description: whyNbnFeelsSlowContent.metadata.description,
  image: whyNbnFeelsSlowImages.map(
    (image) => `${siteMetadataContent.website}${image.src}`,
  ),
  datePublished: whyNbnFeelsSlowContent.metadata.publishedTime,
  dateModified: whyNbnFeelsSlowContent.metadata.modifiedTime,
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

const majorHeadings = new Set([
  "Internet vs WiFi",
  "The Real Reasons Fast NBN Feels Slow",
  "Mesh Wi-Fi vs Access Points",
  "What We Actually Do",
  "Signs Your Home Needs Better Wi-Fi Design",
  "The Bottom Line",
]);

const minorHeadings = new Set(["Mesh Wi-Fi", "Wireless Access Points (APs)"]);

type ArticleBlock =
  | { type: "heading"; text: string; level: 2 | 3 }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

function parseArticle(body: string): ArticleBlock[] {
  const blocks: ArticleBlock[] = [];
  const lines = body.split("\n").map((line) => line.trim());
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      blocks.push({ type: "list", items: listItems });
      listItems = [];
    }
  };

  for (const line of lines) {
    if (!line) {
      flushList();
      continue;
    }

    if (line.startsWith("· ")) {
      listItems.push(line.slice(2));
      continue;
    }

    flushList();

    if (majorHeadings.has(line) || /^\d+\.\s/.test(line)) {
      blocks.push({ type: "heading", text: line, level: 2 });
      continue;
    }

    if (minorHeadings.has(line)) {
      blocks.push({ type: "heading", text: line, level: 3 });
      continue;
    }

    blocks.push({ type: "paragraph", text: line });
  }

  flushList();
  return blocks;
}

function ArticleImage({
  image,
}: {
  image: (typeof whyNbnFeelsSlowImages)[number];
}) {
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

function ArticleBlockView({ block }: { block: ArticleBlock }) {
  if (block.type === "heading") {
    if (block.level === 3) {
      return (
        <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
          {block.text}
        </h3>
      );
    }

    return (
      <h2 className="mt-12 border-t border-[var(--color-border)] pt-10 text-3xl font-semibold tracking-tight text-[var(--color-ink)] first:mt-0 first:border-t-0 first:pt-0">
        {block.text}
      </h2>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="my-5 space-y-2">
        {block.items.map((item) => (
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

  return (
    <p className="text-base leading-7 text-[var(--color-muted)] sm:text-lg">
      {block.text}
    </p>
  );
}

export default function WhyNbnFeelsSlowPage() {
  const blocks = parseArticle(whyNbnFeelsSlowContent.article.body);
  const leadBlock = blocks[0]?.type === "paragraph" ? blocks[0] : null;
  const imageAfterIndexes = new Map([
    [24, whyNbnFeelsSlowImages[1]],
    [48, whyNbnFeelsSlowImages[2]],
  ]);

  return (
    <div className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <section className="border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
              {whyNbnFeelsSlowContent.article.title}
            </h1>
            {leadBlock ? (
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                {leadBlock.text}
              </p>
            ) : null}
          </div>

          <figure className="overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-white shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={whyNbnFeelsSlowImages[0].src}
                alt={whyNbnFeelsSlowImages[0].alt}
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
          {blocks.slice(1).map((block, offset) => {
            const index = offset + 1;

            return (
              <Fragment key={`${block.type}-${index}`}>
                <ArticleBlockView block={block} />
                {whyNbnFeelsSlowContent.inlineCtaIndexes.includes(index) ? (
                  <WifiArticleInlineCta className="my-12 sm:my-14" />
                ) : null}
                {imageAfterIndexes.has(index) ? (
                  <ArticleImage image={imageAfterIndexes.get(index)!} />
                ) : null}
              </Fragment>
            );
          })}
        </article>
      </main>

      <section
        id="final-cta"
        className="border-t border-[var(--color-border)] bg-white"
      >
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {whyNbnFeelsSlowContent.finalCta.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            {whyNbnFeelsSlowContent.finalCta.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            {whyNbnFeelsSlowContent.finalCta.intro}
          </p>

          <WifiLandingPageCtas
            className="mt-8 justify-center"
            primaryLabel={whyNbnFeelsSlowContent.finalCta.cta}
            showSecondary={false}
          />
          <Link
            href="/wifi-solutions-perth"
            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white px-5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            View Wi-Fi solutions Perth
          </Link>
        </div>
      </section>
    </div>
  );
}
