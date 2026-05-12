import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TrustStrip } from "@/components/home/TrustStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { wifiProblemsPerthPageContent } from "@/content/page-contents/wifiProblemsPerth";
import { siteMetadataContent } from "@/content/siteContent";
import { WifiProblemsCta } from "./WifiProblemsCta";

const pagePath = wifiProblemsPerthPageContent.pagePath;
const pageUrl = `${siteMetadataContent.website}${pagePath}`;
const pageTitle = wifiProblemsPerthPageContent.pageTitle;
const pageDescription = wifiProblemsPerthPageContent.pageDescription;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: wifiProblemsPerthPageContent.siteName,
    images: [
      {
        url: wifiProblemsPerthPageContent.heroImage.url,
        width: wifiProblemsPerthPageContent.heroImage.width,
        height: wifiProblemsPerthPageContent.heroImage.height,
        alt: wifiProblemsPerthPageContent.heroImage.alt,
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [wifiProblemsPerthPageContent.heroImage.url],
  },
};

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: wifiProblemsPerthPageContent.serviceName,
  description: pageDescription,
  url: pageUrl,
  areaServed: {
    "@type": "City",
    name: siteMetadataContent.city,
  },
  provider: {
    "@type": "LocalBusiness",
    name: siteMetadataContent.businessName,
    url: siteMetadataContent.website,
    telephone: siteMetadataContent.telephone,
    image: wifiProblemsPerthPageContent.heroImage.url,
  },
  offers: {
    "@type": "Offer",
    price: "99",
    priceCurrency: "AUD",
    url: pageUrl,
    description: wifiProblemsPerthPageContent.offerDescription,
  },
};

export default function WifiProblemsPerthPage() {
  return (
    <div className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
      <section className="border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                {wifiProblemsPerthPageContent.hero.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
                {wifiProblemsPerthPageContent.hero.title}
              </h1>
              <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                {wifiProblemsPerthPageContent.hero.what}
              </p>
              <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                {wifiProblemsPerthPageContent.hero.intro}
              </p>
              <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                {wifiProblemsPerthPageContent.hero.guarantee}
              </p>
              <div className="mt-8">
                <WifiProblemsCta className="w-full px-6 sm:w-auto">
                  {wifiProblemsPerthPageContent.hero.cta}
                </WifiProblemsCta>
                <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-6 text-[var(--color-muted)]">
                  <span>{wifiProblemsPerthPageContent.hero.contactPrompt}</span>
                  <a
                    href="tel:0477948079"
                    className="font-semibold text-[var(--color-accent)] underline-offset-4 transition hover:text-[var(--color-accent-strong)] hover:underline"
                  >
                    {wifiProblemsPerthPageContent.hero.callLabel}
                  </a>
                  <span>{wifiProblemsPerthPageContent.hero.orLabel}</span>
                  <a
                    href="sms:0477948079"
                    className="font-semibold text-[var(--color-accent)] underline-offset-4 transition hover:text-[var(--color-accent-strong)] hover:underline"
                  >
                    {wifiProblemsPerthPageContent.hero.textLabel}
                  </a>
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={wifiProblemsPerthPageContent.heroImage.src}
                  alt={wifiProblemsPerthPageContent.heroImage.alt}
                  fill
                  sizes="(min-width: 1024px) 38rem, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="border-t border-[var(--color-border)] bg-white p-5 sm:p-6">
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  {wifiProblemsPerthPageContent.hero.cardTitle}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {wifiProblemsPerthPageContent.hero.cardDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip
        trustItems={wifiProblemsPerthPageContent.whySection.trustItems}
      />

      <section className="bg-[var(--color-page)]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                {wifiProblemsPerthPageContent.problemSection.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                {wifiProblemsPerthPageContent.problemSection.title}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                {wifiProblemsPerthPageContent.problemSection.paragraphs.map(
                  (paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ),
                )}
              </div>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {wifiProblemsPerthPageContent.problemItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[var(--color-border)] bg-white p-5 text-base leading-7 text-[var(--color-ink)] shadow-[0_10px_24px_rgba(15,23,42,0.03)]"
                >
                  <span className="mb-4 block h-1.5 w-10 rounded-full bg-[var(--color-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-page)]">
        <div className="mx-auto max-w-6xl px-5 pb-14 sm:px-6 lg:px-8 lg:pb-20">
          <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-[0_14px_30px_rgba(15,23,42,0.04)] sm:p-8 lg:p-10">
            <SectionHeading
              eyebrow={wifiProblemsPerthPageContent.processSection.eyebrow}
              title={wifiProblemsPerthPageContent.processSection.title}
              description={
                wifiProblemsPerthPageContent.processSection.description
              }
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {wifiProblemsPerthPageContent.processSection.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-page)] p-6"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-sm font-semibold text-[var(--color-accent)]">
                    {item.step}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                {wifiProblemsPerthPageContent.offerSection.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                {wifiProblemsPerthPageContent.offerSection.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                {wifiProblemsPerthPageContent.offerSection.description}
              </p>
              <div className="mt-8">
                <WifiProblemsCta className="w-full px-6 sm:w-auto">
                  {wifiProblemsPerthPageContent.offerSection.cta}
                </WifiProblemsCta>
              </div>
            </div>

            <div className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-page)] p-6 sm:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                {wifiProblemsPerthPageContent.offerSection.includedTitle}
              </h3>
              <ul className="mt-6 space-y-4">
                {wifiProblemsPerthPageContent.offerSection.includedItems.map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base leading-7 text-[var(--color-ink)]"
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-14 sm:px-6 lg:px-8 lg:pb-20">
          <div className="border-t border-[var(--color-border)] pt-14 lg:pt-16">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {wifiProblemsPerthPageContent.whySection.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                  {wifiProblemsPerthPageContent.whySection.title}
                </h2>
                <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
                  {wifiProblemsPerthPageContent.whySection.description}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {wifiProblemsPerthPageContent.whySection.trustItems.map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-page)] p-5 text-sm font-semibold leading-6 text-[var(--color-ink)]"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-page)]">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
              {wifiProblemsPerthPageContent.guideSection.title}
            </h2>
            <Link
              href="/7-ways-to-fix-wifi"
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white px-5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              {wifiProblemsPerthPageContent.guideSection.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
