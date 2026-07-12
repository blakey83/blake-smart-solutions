import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/content/case-studies/starlinkCityBeach";
import { buildSeoMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildSeoMetadata({
  title: "Case Studies | Blake Smart Solutions",
  description:
    "Recent Blake Smart Solutions case studies covering Starlink, Wi-Fi, CCTV, data cabling and smart home installations across Perth.",
  path: "/case-studies",
  image: {
    url: caseStudies[0].hero.image.src,
    alt: caseStudies[0].hero.image.alt,
  },
});

export default function CaseStudiesPage() {
  return (
    <main className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <section className="border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Case Studies
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
            Recent installation work across Perth
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            Practical examples of completed installations, including the site
            conditions, install approach and finished result.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-section)]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-7 md:grid-cols-2">
            {caseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.slug}
                href={caseStudy.pagePath}
                className="group overflow-hidden rounded-[8px] border border-[var(--color-border)] bg-white shadow-[0_16px_34px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={caseStudy.hero.image.src}
                    alt={caseStudy.hero.image.alt}
                    fill
                    sizes="(min-width: 768px) 34rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {caseStudy.location}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
                    {caseStudy.pageTitle}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                    {caseStudy.pageDescription}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-[var(--color-accent)]">
                    Read case study
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
