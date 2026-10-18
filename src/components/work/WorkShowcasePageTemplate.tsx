"use client";

import { PhoneLink } from "@/components/PhoneLink";
import Image from "next/image";
import Link from "next/link";
import { openEnquiryModal } from "@/lib/enquiryModal";
import type { WorkShowcaseContent } from "@/lib/types";
import { usePathname } from "next/navigation";

type WorkShowcasePageTemplateProps = {
  content: WorkShowcaseContent;
  enquiryProductName: string;
};

function WorkShowcaseCtas({ enquiryProductName }: { enquiryProductName: string }) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={() => openEnquiryModal(enquiryProductName)}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,110,184,0.16)] transition hover:bg-[var(--color-accent-strong)]"
      >
        Make an Enquiry
      </button>
      <PhoneLink
        href="tel:0477948079"
        className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white px-5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      >
        Call 0477 948 079
      </PhoneLink>
    </div>
  );
}

export function WorkShowcasePageTemplate({
  content,
  enquiryProductName,
}: WorkShowcasePageTemplateProps) {
  const pathname = usePathname();

  return (
    <main className="bg-[var(--color-page)] pb-[calc(6rem+env(safe-area-inset-bottom))] text-[var(--color-ink)] sm:pb-0">
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
            <WorkShowcaseCtas enquiryProductName={enquiryProductName} />
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
                    <p className="mt-4 whitespace-pre-line text-base leading-7 text-[var(--color-muted)]">
                      {typeof job.description === "string"
                        ? job.description
                        : job.description.map((part, index) =>
                            typeof part === "string" ? part : "bold" in part ? (
                              <strong key={index}>{part.text}</strong>
                            ) : (
                              <Link
                                key={index}
                                href={part.href}
                                className="font-semibold underline! underline-offset-4 transition hover:text-[var(--color-ink)]! focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ink)]"
                              >
                                {part.text}
                              </Link>
                            ),
                          )}
                    </p>
                    {job.outcome ? (
                      <p className="mt-4 text-base font-semibold leading-7 text-[var(--color-ink)]">
                        {job.outcome}
                      </p>
                    ) : null}
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
            {content.finalCtaDescription ??
              "Send a few details through or call directly, and we can talk through the best way to approach your installation."}
          </p>
          <div className="flex justify-center">
            <WorkShowcaseCtas enquiryProductName={enquiryProductName} />
          </div>
        </div>
      </section>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--color-border)] bg-white/95 px-5 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(15,23,42,0.1)] backdrop-blur sm:hidden">
        <button
          type="button"
          onClick={() => openEnquiryModal(enquiryProductName, {
            tracking: { source: `${pathname}:mobile-sticky` },
          })}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,110,184,0.16)] transition hover:bg-[var(--color-accent-strong)]"
        >
          Get in touch Today
        </button>
      </div>
    </main>
  );
}
