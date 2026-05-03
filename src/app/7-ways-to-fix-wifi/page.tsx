import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { wifiLandingPageContent } from "@/contents/landing-page-contents/wifiLandingPageContent";
import { WifiArticleInlineCta } from "./WifiArticleInlineCta";
import { WifiLandingPageCtas } from "./WifiLandingPageCtas";

type Fix = (typeof wifiLandingPageContent.fixes)[number];

const pagePath = "/7-ways-to-fix-wifi";

export const metadata: Metadata = {
  title:
    "Why Your Internet Still Sucks (Even With Fast NBN) — 7 Ways to Fix It at Home",
  description:
    "Learn why your internet still feels slow even with fast NBN, Starlink or fixed wireless, and how Blake Smart Solutions can diagnose Wi-Fi issues with a $99 Wi-Fi Health Check.",
  alternates: {
    canonical: `https://www.blakesmartsolutions.com.au${pagePath}`,
  },
};

function renderParagraphs(paragraphs: string[], className: string) {
  return paragraphs.map((paragraph) => (
    <p key={paragraph} className={className}>
      {paragraph}
    </p>
  ));
}

function parseBodySections(body: string) {
  return body
    .trim()
    .split("\n\n")
    .map((section) => section.trim())
    .filter(Boolean)
    .map((section) => {
      const lines = section
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

      const bulletLines = lines.filter((line) => line.startsWith("- "));

      if (bulletLines.length === lines.length) {
        return {
          type: "list" as const,
          items: bulletLines.map((line) => line.slice(2).trim()),
        };
      }

      return {
        type: "paragraph" as const,
        text: lines.join(" "),
      };
    });
}

function FixSection({ fix, index }: { fix: Fix; index: number }) {
  const sections = parseBodySections(fix.body);

  return (
    <article className="border-t border-[var(--color-border)] pt-10 first:border-t-0 first:pt-0">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-sm font-semibold text-[var(--color-accent)]">
          {index + 1}
        </span>
        <h2 className="pt-0.5 text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
          {fix.title}
        </h2>
      </div>

      <div className="mt-5 max-w-3xl space-y-4">
        {sections.map((section, sectionIndex) =>
          section.type === "paragraph" ? (
            <p
              key={`${fix.title}-paragraph-${sectionIndex}`}
              className="text-base leading-7 text-[var(--color-muted)] sm:text-lg"
            >
              {section.text}
            </p>
          ) : (
            <ul key={`${fix.title}-list-${sectionIndex}`} className="space-y-2">
              {section.items.map((item) => (
                <li
                  key={`${fix.title}-${item}`}
                  className="flex items-start gap-3 text-base leading-7 text-[var(--color-ink)]"
                >
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ),
        )}
      </div>
    </article>
  );
}

export default function WifiProblemsPerthPage() {
  const { hero, intro, fixes, offer } = wifiLandingPageContent;

  return (
    <div className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <section className="border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-4xl px-5 pt-14 pb-10 sm:px-6 lg:px-8 lg:pt-20 lg:pb-12">
          <div className="max-w-3xl">
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-5 mb-6 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              {hero.subtitle}
            </p>
          </div>
          <WifiArticleInlineCta />
        </div>
      </section>

      <section className="bg-[var(--color-page)]">
        <div className="mx-auto max-w-4xl px-5 pt-8 pb-14 sm:px-6 lg:px-8 lg:pt-10 lg:pb-20">
          <div className="space-y-5">
            {renderParagraphs(
              intro,
              "max-w-3xl text-base leading-7 text-[var(--color-muted)] sm:text-lg",
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="The guide"
            title="7 ways to fix it at home"
            description="Start with the simple checks first, then work through the practical reasons Wi-Fi often breaks down around a home."
          />

          <div className="mx-auto mt-10 max-w-3xl space-y-10">
            {fixes.map((fix, index) => (
              <Fragment key={fix.title}>
                <FixSection fix={fix} index={index} />
                {index === 3 ? <WifiArticleInlineCta /> : null}
              </Fragment>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/wifi-solutions-perth"
              className="inline-flex items-center text-sm font-semibold text-[var(--color-accent)] transition hover:text-[var(--color-accent-strong)]"
            >
              View Wi-Fi solutions Perth
            </Link>
          </div>
        </div>
      </section>

      <section
        id="wifi-diagnostic"
        className="border-y border-[var(--color-border)] bg-white"
      >
        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              {offer.title}
            </h2>
            <div className="mt-6 space-y-4">
              {renderParagraphs(
                offer.intro,
                "text-base leading-7 text-[var(--color-muted)]",
              )}
            </div>
            <p className="mt-6 text-sm leading-6 text-[var(--color-muted)]">
              This is the same process we use in businesses across Perth dealing
              with dropouts, dead zones, and unreliable coverage.
            </p>
          </div>

          <div className="mt-10 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-page)] p-6 sm:p-8">
            <p className="text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              For just $99, you can get a complete picture of what’s actually
              going on with your Wi-Fi. A professional WiFi survey for your home
              valued at $299.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                What&apos;s included
              </h3>
              <ul className="mt-5 space-y-4">
                {offer.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-7 text-[var(--color-ink)]"
                  >
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  Credited toward recommended work
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)] sm:text-base">
                  {offer.credit}
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  No obligation
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)] sm:text-base">
                  {offer.noObligation}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-[var(--color-accent)] bg-[var(--color-accent-soft)]/35 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                Guarantee
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--color-ink)]">
                {offer.guarantee}
              </p>
            </div>

            <div className="mt-8 space-y-4 text-base leading-7 text-[var(--color-muted)]">
              <p>{offer.premium}</p>
              <p>{offer.scarcity}</p>
              <p>{offer.closing}</p>
            </div>

            <WifiLandingPageCtas
              className="mt-8"
              primaryLabel={offer.cta}
              showSecondary={false}
            />
          </div>
        </div>
      </section>

      <section
        id="final-cta"
        className="border-t border-[var(--color-border)] bg-white"
      >
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Ready when you are
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            Get professional Wi-Fi diagnosis that gives you clarity and
            practical next steps?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base font-semibold leading-7 text-[var(--color-ink)]">
            Credited toward any recommended work.
          </p>

          <WifiLandingPageCtas
            className="mt-8 justify-center"
            primaryLabel="Book your $99 WiFi Diagnosis"
            showSecondary={false}
          />
        </div>
      </section>
    </div>
  );
}
