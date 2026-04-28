import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { wifiLandingPageContent } from "@/contents/landing-page-contents/wifiLandingPageContent";
import { WifiLandingPageCtas } from "./WifiLandingPageCtas";

type Fix = (typeof wifiLandingPageContent.fixes)[number];

const pagePath = "/wifi-problems-perth";

export const metadata: Metadata = {
  title: "Wi-Fi Problems Perth | Fix Slow Internet & Wi-Fi Dropouts",
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

function FixList({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-page)] p-4 sm:p-5">
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={`${title}-${item}`}
            className="flex items-start gap-3 text-sm leading-6 text-[var(--color-ink)] sm:text-base"
          >
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FixCard({ fix, index }: { fix: Fix; index: number }) {
  return (
    <article className="rounded-[24px] border border-[var(--color-border)] bg-white p-6 sm:p-8">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-sm font-semibold text-[var(--color-accent)]">
          {index + 1}
        </span>
        <h2 className="pt-1 text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
          {fix.title}
        </h2>
      </div>

      {fix.intro ? (
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-ink)]">
          {fix.intro}
        </p>
      ) : null}

      {fix.body?.length ? (
        <div className="mt-5 space-y-4">
          {renderParagraphs(
            fix.body,
            "text-base leading-7 text-[var(--color-muted)]",
          )}
        </div>
      ) : null}

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <FixList title="Try this" items={fix.tryThis ?? []} />
        <FixList title="Look for" items={fix.lookFor ?? []} />
        <FixList title="Avoid" items={fix.avoid ?? []} />
        <FixList title="Better approach" items={fix.better ?? []} />
        <FixList title="Signal blockers" items={fix.blockers ?? []} />
        <FixList title="Common causes" items={fix.causes ?? []} />
        <FixList title="Bands to know" items={fix.bands ?? []} />
      </div>

      {fix.mistake ? (
        <div className="mt-6 rounded-2xl border-l-4 border-amber-300 bg-amber-50/70 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">
            Common mistake
          </h3>
          <p className="mt-3 text-base leading-7 text-amber-950">
            {fix.mistake}
          </p>
        </div>
      ) : null}

      {fix.takeaway ? (
        <div className="mt-6 rounded-2xl border-l-4 border-[var(--color-accent)] bg-[var(--color-accent-soft)]/35 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            Key takeaway
          </h3>
          <p className="mt-3 text-base leading-7 text-[var(--color-ink)]">
            {fix.takeaway}
          </p>
        </div>
      ) : null}
    </article>
  );
}

export default function WifiProblemsPerthPage() {
  const { hero, intro, fixes, offer } = wifiLandingPageContent;

  return (
    <div className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <section className="border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-page)]">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
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

          <div className="mt-10 space-y-6">
            {fixes.map((fix, index) => (
              <FixCard key={fix.title} fix={fix} index={index} />
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Professional Wi-Fi diagnostic
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              Know Exactly What’s Causing Your Wi-Fi Issues — and the Right Way
              to Fix Them
            </h2>
            <p className="mt-3 text-xl font-semibold tracking-tight text-[var(--color-muted)] sm:text-2xl">
              {offer.title}
            </p>
            <div className="mt-6 space-y-4">
              {renderParagraphs(
                offer.intro,
                "text-base leading-7 text-[var(--color-muted)]",
              )}
            </div>
            <p className="mt-6 text-sm leading-6 text-[var(--color-muted)]">
              This is the same process we use in homes across Perth dealing with
              dropouts, dead zones, and unreliable coverage.
            </p>
          </div>

          <div className="mt-10 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-page)] p-6 sm:p-8">
            <p className="text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              You can get a full diagnostic for{" "}
              <span className="font-semibold text-[var(--color-ink)]">$99</span>
              . We test the property properly, explain what is going wrong, and
              give you practical next-step advice.
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
            primaryLabel="Book your Wi-Fi Health Check"
            showSecondary={false}
          />
        </div>
      </section>
    </div>
  );
}
