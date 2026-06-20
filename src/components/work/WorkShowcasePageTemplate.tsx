"use client";

import Image from "next/image";
import { openEnquiryModal } from "@/lib/enquiryModal";
import type { WorkShowcaseContent } from "@/lib/types";

type WorkShowcasePageTemplateProps = {
  content: WorkShowcaseContent;
};

function WorkShowcaseCtas() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={() => openEnquiryModal("Recent Work Enquiry")}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,110,184,0.16)] transition hover:bg-[var(--color-accent-strong)]"
      >
        Make an Enquiry
      </button>
      <a
        href="tel:0477948079"
        className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white px-5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      >
        Call 0477 948 079
      </a>
    </div>
  );
}

export function WorkShowcasePageTemplate({
  content,
}: WorkShowcasePageTemplateProps) {
  return (
    <main className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <section className="border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            {content.eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                {content.eyebrow}
              </p>
            ) : null}
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              {content.description}
            </p>
            <WorkShowcaseCtas />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-section)]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="space-y-12 lg:space-y-16">
            {content.completedJobs.map((job, index) => {
              const imageFirst = index % 2 === 0;

              return (
                <article
                  key={`${job.title}-${job.location}`}
                  className="grid gap-7 lg:grid-cols-2 lg:items-center lg:gap-12"
                >
                  <div
                    className={`overflow-hidden rounded-[8px] border border-[var(--color-border)] bg-white shadow-[0_16px_34px_rgba(15,23,42,0.08)] ${
                      imageFirst ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={job.image.src}
                        alt={job.image.alt}
                        fill
                        sizes="(min-width: 1024px) 34rem, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div
                    className={`max-w-xl ${
                      imageFirst ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      {job.location}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
                      {job.title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                      {job.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Ready to plan your project?
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            Get practical advice for your home or business.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            Send a few details through or call directly, and we can talk through
            the best way to approach your installation.
          </p>
          <div className="flex justify-center">
            <WorkShowcaseCtas />
          </div>
        </div>
      </section>
    </main>
  );
}
