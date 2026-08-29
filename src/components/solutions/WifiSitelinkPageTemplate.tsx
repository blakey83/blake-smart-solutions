import Image from "next/image";
import Link from "next/link";
import type { WifiSitelinkPage } from "@/content/solutions/wifiSitelinks";
import { whyChooseUsWiFi } from "@/content/solutions/wifiSolutionContent";
import { WifiSitelinkCtas } from "@/components/solutions/WifiSitelinkCtas";

const processSteps = [
  { number: "01", title: "Assess", text: "We confirm what needs connecting, where it needs to work and what is getting in the way." },
  { number: "02", title: "Recommend", text: "You get a clear scope for the right equipment, placement and cabling—not a generic bundle." },
  { number: "03", title: "Install", text: "We complete the agreed cabling, mounting and equipment installation neatly and safely." },
  { number: "04", title: "Configure & test", text: "The network is configured and checked in the areas and on the devices that matter." },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
      {children}
    </p>
  );
}

type Review = (typeof whyChooseUsWiFi.whySection.reviews)[number];

function FeaturedReview({
  review,
  className = "",
}: {
  review: WifiSitelinkPage["review"];
  className?: string;
}) {
  return (
    <figure
      className={`max-w-2xl rounded-2xl border border-white/20 bg-[var(--color-ink)]/80 p-5 shadow-[0_18px_44px_rgba(15,23,42,0.26)] backdrop-blur-sm ${className}`.trim()}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-soft)]">
          Google review
        </span>
        <span
          className="text-sm tracking-[0.14em] text-amber-400"
          aria-label="Five-star review"
        >
          ★★★★★
        </span>
      </div>
      <blockquote className="mt-3 text-sm leading-6 text-white/90">
        “{review.quote}”
      </blockquote>
      <figcaption className="mt-3 text-sm font-semibold text-white/65">
        {review.author}
      </figcaption>
    </figure>
  );
}

function HeroReviewStrip({ reviews }: { reviews: Review[] }) {
  const visibleReviews = reviews.slice(0, 3);

  return (
    <section className="border-b border-[var(--color-border)] bg-white">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-6 lg:px-8 lg:pb-14 lg:pt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
          Trusted by Perth homeowners and businesses
        </p>
        <div className="mt-3 grid gap-3 lg:grid-cols-2 xl:grid-cols-3">
          {visibleReviews.map((review, index) => (
            <article
              key={review.name}
              className={[
                "rounded-2xl border border-[var(--color-border)] bg-[var(--color-page)] p-4 text-left shadow-[0_10px_24px_rgba(15,23,42,0.04)]",
                index === 1 ? "hidden lg:block" : "",
                index > 1 ? "hidden xl:block" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div
                className="text-xs font-semibold tracking-[0.12em] text-amber-500"
                aria-label="Five-star review"
              >
                ★★★★★
              </div>
              <p className="mt-2 max-h-[3.75rem] overflow-hidden text-xs leading-5 text-[var(--color-muted)]">
                “{review.text}”
              </p>
              <p className="mt-2 text-xs font-semibold text-[var(--color-ink)]">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection({ reviews }: { reviews: Review[] }) {
  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-section)]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionLabel>Reviews</SectionLabel>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {whyChooseUsWiFi.whySection.reviewsHeading}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
          Recent feedback from customers who wanted clear advice, tidy work and technology that works properly when it matters.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-[24px] border border-[var(--color-border)] bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.05)]"
            >
              <div
                className="text-sm font-semibold tracking-[0.12em] text-amber-500"
                aria-label="Five-star review"
              >
                ★★★★★
              </div>
              <p className="mt-4 font-semibold text-[var(--color-ink)]">
                {review.name}
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                “{review.text}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WifiSitelinkPageTemplate({ page }: { page: WifiSitelinkPage }) {
  return (
    <main className="bg-[var(--color-page)] pb-20 text-[var(--color-ink)] sm:pb-0">
      <section className="relative isolate overflow-hidden border-b border-white/15 bg-[var(--color-ink)] text-white">
        <Image
          src={page.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(31,41,55,0.97)_0%,rgba(31,41,55,0.91)_52%,rgba(31,41,55,0.55)_100%)]" />

        <div className="mx-auto max-w-6xl px-5 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-20 lg:pt-8">
          <nav aria-label="Breadcrumb" className="text-xs text-white/65">
            <Link href="/wifi-solutions-perth" className="transition hover:text-white">
              Wi-Fi Solutions Perth
            </Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span>{page.enquiryName}</span>
          </nav>

          <div className="mt-8 max-w-3xl">
            <FeaturedReview review={page.review} className="hidden lg:block" />
            <div className="lg:mt-6">
            <SectionLabel>Perth Wi-Fi &amp; Connectivity</SectionLabel>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              {page.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              {page.subhead}
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {page.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-white sm:text-base">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-1 text-sm font-semibold leading-6 text-white sm:text-base">
              {page.heroCtaLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-5">
              <WifiSitelinkCtas productName={page.enquiryName} />
            </div>

            <FeaturedReview review={page.review} className="mt-7 lg:hidden" />
            </div>
          </div>
        </div>
      </section>

      <HeroReviewStrip reviews={whyChooseUsWiFi.whySection.reviews} />

      <section className="border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-20">
          <div>
            <SectionLabel>The problem</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{page.problem.title}</h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
            {page.problem.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-section)]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
            <div>
              <SectionLabel>The solution</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{page.solution.title}</h2>
              <div className="mt-5 space-y-4 text-base leading-7 text-[var(--color-muted)]">
                {page.solution.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
            <ul className="grid gap-3 self-start">
              {page.solution.points.map((point) => (
                <li key={point} className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-sm font-bold text-[var(--color-accent)]">✓</span>
                  <span className="pt-0.5 font-semibold leading-6">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {page.installationGallery ? (
        <section className="border-y border-[var(--color-border)] bg-white">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
            <SectionLabel>{page.installationGallery.eyebrow}</SectionLabel>
            <div className="mt-4 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {page.installationGallery.title}
              </h2>
              <p className="text-base leading-7 text-[var(--color-muted)]">
                {page.installationGallery.intro}
              </p>
            </div>

            <div
              className={
                page.installationGallery.images.length === 1
                  ? "mt-9 max-w-4xl"
                  : "mt-9 grid gap-5 lg:grid-cols-[1.55fr_0.75fr]"
              }
            >
              {page.installationGallery.images.map((item, index) => (
                <figure
                  key={item.image}
                  className="overflow-hidden rounded-[26px] border border-[var(--color-border)] bg-[var(--color-page)] shadow-[0_14px_30px_rgba(15,23,42,0.05)]"
                >
                  <div
                    className={`relative bg-[var(--color-ink)] ${
                      index === 0
                        ? "aspect-[4/3] sm:aspect-[16/10]"
                        : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes={
                        index === 0
                          ? "(min-width: 1024px) 42rem, 100vw"
                          : "(min-width: 1024px) 20rem, 100vw"
                      }
                      className={
                        item.fit === "top"
                          ? "object-cover object-top"
                          : "object-cover"
                      }
                    />
                  </div>
                  <figcaption className="p-6">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                      {item.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-y border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionLabel>Where it works</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Common situations we can help with</h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.useCases.map((useCase) => (
              <article key={useCase.title} className="rounded-[22px] border border-[var(--color-border)] bg-[var(--color-page)] p-6">
                <h3 className="text-lg font-semibold tracking-tight">{useCase.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{useCase.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white">
        <div className="mx-auto grid max-w-6xl gap-9 px-5 py-14 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">Why do it properly?</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{page.whyProperly.title}</h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            {page.whyProperly.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-page)] shadow-[0_18px_40px_rgba(15,23,42,0.07)] lg:grid-cols-[1fr_1.05fr]">
            <div className="relative min-h-80 lg:min-h-[36rem]">
              <Image src={page.proof.image} alt={page.proof.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="p-7 sm:p-9 lg:p-12">
              <SectionLabel>Real installation</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{page.proof.title}</h2>
              <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">{page.proof.intro}</p>
              <dl className="mt-8 space-y-5">
                {([
                  ["Problem", page.proof.problem],
                  ["Solution", page.proof.solution],
                  ["Result", page.proof.result],
                ] as const).map(([label, value]) => (
                  <div key={label} className="grid gap-1 border-t border-[var(--color-border)] pt-5 sm:grid-cols-[6rem_1fr] sm:gap-4">
                    <dt className="text-sm font-semibold text-[var(--color-accent)]">{label}</dt>
                    <dd className="text-sm leading-6 text-[var(--color-muted)]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-section)]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionLabel>What to expect</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">A clear path from problem to working connection</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.number} className="rounded-[22px] border border-[var(--color-border)] bg-white p-6">
                <p className="text-sm font-semibold text-[var(--color-accent)]">{step.number}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Questions about {page.enquiryName.toLowerCase()}</h2>
          <div className="mt-9 divide-y divide-[var(--color-border)] rounded-[24px] border border-[var(--color-border)]">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:hidden">
                  {faq.question}
                  <span className="text-2xl font-light text-[var(--color-accent)] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-6 text-[var(--color-muted)] sm:text-base">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection reviews={whyChooseUsWiFi.whySection.reviews} />

      <section className="border-t border-[var(--color-border)] bg-[var(--color-page)]">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
          <SectionLabel>Get a clear quote</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{page.finalTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            Tell us what you need connected and where the problem is. We’ll come back with a clear quote for the right solution.
          </p>
          <div className="mt-8">
            <WifiSitelinkCtas productName={page.enquiryName} layout="center" />
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--color-border)] bg-white/95 px-5 py-3 shadow-[0_-8px_24px_rgba(15,23,42,0.1)] backdrop-blur sm:hidden">
        <WifiSitelinkCtas productName={page.enquiryName} layout="mobile" />
      </div>
    </main>
  );
}
