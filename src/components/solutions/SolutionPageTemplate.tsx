"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductCardGrid } from "@/components/products/ProductCardGrid";
import { RelatedServicesSection } from "@/components/services/RelatedServicesSection";
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

interface TrustItems {
  trustItems: string[];
}

type SolutionPageTemplateViewProps = SolutionPageTemplateProps &
  TrustItems & {
    content: WhyChooseUsContent;
  };

export function SolutionPageTemplate({
  currentPath = "/",
  title,
  intro,
  heroEyebrow = solutionPageTemplateContent.heroEyebrow,
  heroImage,
  heroImageAlt,
  bulletPoints,
  heroBullets,
  heroBulletPoints,
  heroPoints,
  heroSocialProof,
  primaryCta,
  secondaryCta,
  problemsEyebrow = solutionPageTemplateContent.problemsEyebrow,
  problemsTitle,
  problemsIntro = solutionPageTemplateContent.problemsIntro,
  problems,
  brandBlock,
  productsEyebrow = solutionPageTemplateContent.productsEyebrow,
  productsTitle,
  productsIntro,
  productsFallbackIntro = solutionPageTemplateContent.productsFallbackIntro,
  products,
  imageSectionEyebrow = solutionPageTemplateContent.imageSectionEyebrow,
  imageSection,
  finalCtaEyebrow = solutionPageTemplateContent.finalCtaEyebrow,
  finalCtaTitle,
  finalCtaIntro,
  finalCtaButton,
  trustItems,
  content,
}: SolutionPageTemplateViewProps) {
  const heroBulletItems =
    bulletPoints ?? heroBullets ?? heroBulletPoints ?? heroPoints;

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
                {title}
              </h1>
              <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                {intro}
              </p>

              {heroBulletItems?.length ? (
                <ul className="mt-6 space-y-2">
                  {heroBulletItems.map((item) => (
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

              {heroSocialProof ? (
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
                    “{heroSocialProof.quote}”
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[var(--color-muted)]">
                    {heroSocialProof.author}
                  </p>
                </div>
              ) : null}

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
                    alt={heroImageAlt ?? title}
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
            eyebrow={problemsEyebrow}
            title={problemsTitle}
            description={problemsIntro}
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {problems.map((problem) => (
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

      {brandBlock ? (
        <section className="border-y border-[var(--color-border)] bg-white">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div
              className={`items-center gap-8 lg:gap-12 ${
                brandBlock.image
                  ? "grid lg:grid-cols-[1.05fr_0.95fr]"
                  : "max-w-4xl"
              }`}
            >
              <div className={brandBlock.image ? "" : "max-w-4xl"}>
                {brandBlock.eyebrow ? (
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {brandBlock.eyebrow}
                  </p>
                ) : null}
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                  {brandBlock.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                  {brandBlock.intro}
                </p>

                {brandBlock.points?.length ? (
                  <ul className="mt-6 grid gap-3 text-sm leading-6 text-[var(--color-ink)] sm:text-base">
                    {brandBlock.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              {brandBlock.image ? (
                <div className="relative overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={brandBlock.image}
                      alt={brandBlock.imageAlt ?? brandBlock.title}
                      fill
                      sizes="(min-width: 1024px) 36rem, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[var(--color-section)]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={productsEyebrow}
            title={productsTitle}
            description={productsIntro ?? productsFallbackIntro}
          />

          <div className="mt-10">
            <ProductCardGrid products={products} />
          </div>
        </div>
      </section>

      {imageSection ? (
        <section className="border-y border-[var(--color-border)] bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                {imageSectionEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                {imageSection.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                {imageSection.intro}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={imageSection.image}
                  alt={imageSection.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 36rem, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <WhyBSS content={content} />

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
      <RelatedServicesSection currentPath={currentPath} />
    </div>
  );
}
