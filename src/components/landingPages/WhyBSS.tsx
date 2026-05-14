import React from "react";
import { WhyChooseUsContent } from "@/content/page-contents/whyUsContent";
import Image from "next/image";

type WhyBSSProps = {
  content: WhyChooseUsContent;
};

export const WhyBSS = ({ content }: WhyBSSProps) => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="border-t border-[var(--color-border)] pt-14 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14">
            <div className="overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_18px_42px_rgba(15,23,42,0.1)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={content.whySection.image.src}
                  alt={content.whySection.image.alt}
                  fill
                  sizes="(min-width: 1024px) 34rem, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                {content.whySection.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                {content.whySection.title}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-7 text-[var(--color-muted)]">
                {content.whySection.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-6 border-l-4 border-[var(--color-accent)] bg-[var(--color-page)] px-4 py-3 text-sm font-semibold leading-6 text-[var(--color-ink)]">
                {content.whySection.credibility}
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
              {content.whySection.reviewsHeading}
            </h3>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {content.whySection.reviews.map((review) => (
                <article
                  key={review.name}
                  className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.05)]"
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
        </div>
      </div>
    </section>
  );
};
