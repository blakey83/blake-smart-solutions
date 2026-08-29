import type { Metadata } from "next";
import Image from "next/image";
import { quoteTermsContent } from "@/content/pages/quoteTerms";
import { buildSeoMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildSeoMetadata({
  title: "Quote Terms & Conditions | Blake Smart Solutions",
  description:
    "Terms and conditions applying to quotes issued by Blake Smart Solutions, including scope, variations, deposits, payment and site conditions.",
  path: "/quote-terms-and-conditions",
});

export default function QuoteTermsPage() {
  return (
    <div className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <section className="relative isolate overflow-hidden bg-[#05070b] text-white">
        <Image
          src="/images/quote-terms-handshake.jpg"
          alt="Two people shaking hands after reaching an agreement"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Blake Smart Solutions
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {quoteTermsContent.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              {quoteTermsContent.intro}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-8 lg:py-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                At a glance
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                These terms form part of every Blake Smart Solutions quote unless the quote states otherwise.
              </p>
              <div className="mt-5 border-t border-[var(--color-border)] pt-5">
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  Questions about a quote?
                </p>
                <a
                  href="mailto:info@blakesmartsolutions.com.au"
                  className="mt-2 block break-words text-sm font-semibold text-[var(--color-accent)] transition hover:text-[var(--color-accent-strong)]"
                >
                  info@blakesmartsolutions.com.au
                </a>
              </div>
            </div>
          </aside>

          <div>
            <div className="rounded-2xl border border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)] p-5 sm:p-6">
              <p className="font-semibold leading-7 text-[var(--color-ink)]">
                {quoteTermsContent.notice}
              </p>
            </div>

            <div className="mt-10 space-y-10">
              {quoteTermsContent.sections.map((section, index) => (
                <article
                  key={section.title}
                  className="border-b border-[var(--color-border)] pb-10 last:border-b-0 last:pb-0"
                >
                  <div className="flex gap-4 sm:gap-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#05070b] text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        {section.title}
                      </h2>
                      <div className="mt-4 space-y-4 text-base leading-7 text-[var(--color-muted)]">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                        {section.list ? (
                          <ul className="list-disc space-y-2 pl-5 marker:text-[var(--color-accent)]">
                            {section.list.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : null}
                        {section.footerParagraphs?.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
