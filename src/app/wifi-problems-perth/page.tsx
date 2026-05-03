import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TrustStrip } from "@/components/home/TrustStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WifiProblemsCta } from "./WifiProblemsCta";

const pagePath = "/wifi-problems-perth";
const pageUrl = `https://www.blakesmartsolutions.com.au${pagePath}`;
const pageTitle =
  "WiFi Problems Perth | Fix Dropouts, Dead Zones & Slow Speeds";
const pageDescription =
  "Perth WiFi help for homes with dropouts, dead zones, slow speeds and poor coverage. Book a WiFi fix visit from $99.";

const problemItems = [
  "WiFi drops out in certain rooms",
  "Slow speeds away from the router",
  "Dead zones in bedrooms, home offices or outdoor areas",
  "Devices constantly reconnecting",
  "Streaming, gaming or work calls becoming unreliable",
];

const processItems = [
  {
    step: "1",
    title: "Test",
    description:
      "We check signal strength, coverage, interference and how your current setup is performing.",
  },
  {
    step: "2",
    title: "Diagnose",
    description:
      "We show you what is actually causing the issue, without guessing or randomly selling equipment.",
  },
  {
    step: "3",
    title: "Fix",
    description:
      "Where possible, we make practical improvements on the spot and recommend the right long-term solution if needed.",
  },
];

const includedItems = [
  "Full WiFi diagnosis",
  "Clear fix plan",
  "Practical on-site improvements where possible",
  "$99 credit towards any further improvements, if needed",
];

const trustItems = [
  "Perth-based service",
  "Fully insured",
  "Single visit improvements",
  "Practical fixes for real homes",
];

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
    siteName: "Blake Smart Solutions",
    images: [
      {
        url: "https://www.blakesmartsolutions.com.au/Blake_shop_front.jpeg",
        width: 1536,
        height: 1024,
        alt: "Blake Smart Solutions WiFi technician in Perth",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["https://www.blakesmartsolutions.com.au/Blake_shop_front.jpeg"],
  },
};

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WiFi Problems Perth",
  description: pageDescription,
  url: pageUrl,
  areaServed: {
    "@type": "City",
    name: "Perth",
  },
  provider: {
    "@type": "LocalBusiness",
    name: "Blake Smart Solutions",
    url: "https://www.blakesmartsolutions.com.au",
    telephone: "+61477948079",
    image: "https://www.blakesmartsolutions.com.au/Blake_shop_front.jpeg",
  },
  offers: {
    "@type": "Offer",
    price: "99",
    priceCurrency: "AUD",
    url: pageUrl,
    description: "WiFi fix visit from $99",
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
                Perth WiFi help
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
                WiFi Problems in Perth? We Fix Dropouts, Dead Zones & Slow
                Speeds
              </h1>
              <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                Get reliable WiFi in every room — for streaming, work calls,
                gaming and everyday use — without wasting money on the wrong
                equipment.
              </p>
              <div className="mt-8">
                <WifiProblemsCta className="w-full px-6 sm:w-auto">
                  Book WiFi Fix — from $99
                </WifiProblemsCta>
                <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--color-muted)]">
                  Includes proper diagnosis, clear fix plan and practical fixes
                  where possible.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/Blake_shop_front.jpeg"
                  alt="Blake Smart Solutions WiFi technician in Perth"
                  fill
                  sizes="(min-width: 1024px) 38rem, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="border-t border-[var(--color-border)] bg-white p-5 sm:p-6">
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  Proper testing before equipment recommendations.
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  We find the weak spots, interference and setup issues that
                  make WiFi unreliable around the home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip trustItems={trustItems} />

      <section className="bg-[var(--color-page)]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                What is really happening
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                It’s usually not your internet — it’s your WiFi setup
              </h2>
              <div className="mt-5 space-y-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                <p>
                  Most people upgrade their plan, restart the router, buy a new
                  modem or switch providers… and still have the same problem.
                </p>
                <p>
                  In many homes, the real issue is how WiFi is spreading through
                  the house: walls, layout, router placement, interference and
                  weak coverage.
                </p>
              </div>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {problemItems.map((item) => (
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
              eyebrow="Our process"
              title="How we fix it properly"
              description="A WiFi survey is part of the fix process, not the whole offer. The goal is reliable coverage that works in the rooms you actually use."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {processItems.map((item) => (
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
                From $99
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                WiFi Fix Visit from $99
              </h2>
              <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                For most homes, the first step is a proper diagnosis. We test
                your WiFi, show you what’s going wrong, and give you a clear
                plan to get reliable coverage across the home.
              </p>
              <div className="mt-8">
                <WifiProblemsCta className="w-full px-6 sm:w-auto">
                  Book Your WiFi Fix
                </WifiProblemsCta>
              </div>
            </div>

            <div className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-page)] p-6 sm:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                Included in the visit
              </h3>
              <ul className="mt-6 space-y-4">
                {includedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-7 text-[var(--color-ink)]"
                  >
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
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
                  Why Blake Smart Solutions
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                  Practical WiFi help for Perth homes
                </h2>
                <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
                  We focus on what is happening inside your actual home, then
                  recommend the simplest reliable fix.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-page)] p-5 text-sm font-semibold leading-6 text-[var(--color-ink)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-page)]">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
              Want to understand what might be causing the issue?
            </h2>
            <Link
              href="/7-ways-to-fix-wifi"
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white px-5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Read the 7 common reasons WiFi fails at home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
