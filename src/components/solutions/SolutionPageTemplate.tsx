"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductCardGrid } from "@/components/products/ProductCardGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutionPageTemplateContent } from "@/content/siteContent";
import type { WhyChooseUsContent } from "@/content/page-contents/whyUsContent";
import { openEnquiryModal } from "@/lib/enquiryModal";
import type {
  CtaButton,
  SolutionPageTemplateProps,
} from "@/components/solutions/types";
import { TrustStrip } from "../home/TrustStrip";
import { WhyBSS } from "../landingPages/WhyBSS";

type SolutionCtaProps = {
  button: CtaButton;
  variant?: "primary" | "secondary";
  className?: string;
};

function SolutionCta({
  button,
  variant = "primary",
  className = "",
}: SolutionCtaProps) {
  const baseClasses =
    "inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-semibold transition";
  const variantClasses =
    variant === "primary"
      ? "bg-[var(--color-accent)] text-white shadow-[0_10px_24px_rgba(0,110,184,0.16)] hover:bg-[var(--color-accent-strong)]"
      : "border border-[var(--color-border-strong)] bg-white text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]";
  const classes = `${baseClasses} ${variantClasses} ${className}`.trim();

  if (button.action === "enquiry") {
    return (
      <button
        type="button"
        onClick={() => openEnquiryModal()}
        className={classes}
      >
        {button.label}
      </button>
    );
  }

  return (
    <Link href={button.href ?? "/"} className={classes}>
      {button.label}
    </Link>
  );
}

function SolutionReviewsSection({ content }: { content: WhyChooseUsContent }) {
  return (
    <section className="bg-[var(--color-section)]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Reviews"
          title={content.whySection.reviewsHeading}
          description="Recent feedback from customers who wanted clear advice, tidy work and technology that works properly when it matters."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {content.whySection.reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-[24px] border border-[var(--color-border)] bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.05)]"
            >
              <div
                className="text-sm font-semibold tracking-[0.12em] text-amber-500"
                aria-label="Five star review"
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

interface TrustItems {
  trustItems: string[];
}

type SolutionPageTemplateViewProps = SolutionPageTemplateProps &
  TrustItems & {
    content: WhyChooseUsContent;
  };

export function SolutionPageTemplate({
  headline,
  subHeadline,
  heroEyebrow = solutionPageTemplateContent.heroEyebrow,
  heroImage,
  heroImageAlt,
  bulletPoints,
  heroSocialProof,
  primaryCta,
  secondaryCta,
  problemSolutionEyebrow = solutionPageTemplateContent.problemSolutionEyebrow,
  problemSolutionTitle,
  problemSolutionIntro = solutionPageTemplateContent.problemSolutionIntro,
  problemSolutionCards,
  realInstallationsEyebrow = solutionPageTemplateContent.realInstallationsEyebrow,
  realInstallationsTitle,
  realInstallationsIntro,
  realInstallationsFallbackIntro = solutionPageTemplateContent.realInstallationsFallbackIntro,
  products,
  faqsEyebrow = solutionPageTemplateContent.faqsEyebrow,
  faqsTitle,
  faqsIntro,
  faqs,
  finalCtaEyebrow = solutionPageTemplateContent.finalCtaEyebrow,
  finalCtaTitle,
  finalCtaIntro,
  finalCtaButton,
  trustItems,
  content,
}: SolutionPageTemplateViewProps) {
  return (
    <div className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <section className="border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div
            className={`items-center gap-10 lg:gap-14 ${
              heroImage ? "grid lg:grid-cols-[1.05fr_0.95fr]" : "max-w-3xl"
            }`}
          >
            <div className={heroImage ? "" : "max-w-3xl"}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                {heroEyebrow}
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
                {headline}
              </h1>
              <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                {subHeadline}
              </p>

              {bulletPoints.length ? (
                <ul className="mt-6 space-y-2">
                  {bulletPoints.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base leading-7 text-[var(--color-ink)]"
                    >
                      <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-6 max-w-2xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-page)] p-5">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span
                    className="text-sm font-semibold tracking-[0.12em] text-amber-500"
                    aria-label={heroSocialProof.ratingLabel}
                  >
                    ★★★★★
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                    {heroSocialProof.eyebrow}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--color-ink)] sm:text-base">
                  &quot;{heroSocialProof.quote}&quot;
                </p>
                <p className="mt-3 text-sm font-semibold text-[var(--color-muted)]">
                  {heroSocialProof.author}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <SolutionCta button={primaryCta} />
                {secondaryCta ? (
                  <SolutionCta button={secondaryCta} variant="secondary" />
                ) : null}
              </div>
            </div>

            {heroImage ? (
              <div className="relative overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={heroImage}
                    alt={heroImageAlt ?? headline}
                    fill
                    sizes="(min-width: 1024px) 40rem, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <TrustStrip trustItems={trustItems} />

      <section className="bg-[var(--color-section)]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={problemSolutionEyebrow}
            title={problemSolutionTitle}
            description={problemSolutionIntro}
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {problemSolutionCards.map((problem) => (
              <article
                key={problem.title}
                className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-white shadow-[0_14px_30px_rgba(15,23,42,0.04)]"
              >
                {problem.image ? (
                  <div className="relative aspect-[16/10] w-full bg-[var(--color-card)]">
                    <Image
                      src={problem.image}
                      alt={problem.imageAlt ?? problem.title}
                      fill
                      sizes="(min-width: 1280px) 20rem, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                    {problem.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-muted)] sm:text-base">
                    {problem.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={realInstallationsEyebrow}
            title={realInstallationsTitle}
            description={
              realInstallationsIntro ?? realInstallationsFallbackIntro
            }
          />

          <div className="mt-10">
            <ProductCardGrid products={products} />
          </div>
        </div>
      </section>

      <WhyBSS content={content} showReviews={false} />
      <SolutionReviewsSection content={content} />

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={faqsEyebrow}
            title={faqsTitle}
            description={faqsIntro ?? ""}
          />

          <div className="mt-10 divide-y divide-[var(--color-border)] rounded-[24px] border border-[var(--color-border)] bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-[var(--color-ink)] marker:hidden">
                  {faq.question}
                  <span className="text-2xl font-light leading-none text-[var(--color-accent)] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-6 text-[var(--color-muted)] sm:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="final-cta"
        className="border-t border-[var(--color-border)] bg-white"
      >
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {finalCtaEyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            {finalCtaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            {finalCtaIntro}
          </p>

          <div className="mt-8 flex justify-center">
            <SolutionCta button={finalCtaButton} />
          </div>
        </div>
      </section>
    </div>
  );
}
