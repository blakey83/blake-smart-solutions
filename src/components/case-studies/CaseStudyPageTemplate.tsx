import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import type { CaseStudyContent, CaseStudySection } from "@/content/case-studies/starlinkCityBeach";

type CaseStudyPageTemplateProps = {
  content: CaseStudyContent;
};

function BulletList({ items }: { items?: string[] }) {
  if (!items?.length) {
    return null;
  }

  return (
    <ul className="my-5 space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-base leading-7 text-[var(--color-ink)] sm:text-lg"
        >
          <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionImage({ image }: { image: NonNullable<CaseStudySection["image"]> }) {
  return (
    <figure className="my-10 overflow-hidden rounded-[8px] border border-[var(--color-border)] bg-white shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
      <div className="relative aspect-[3/4] w-full bg-[var(--color-section)]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 48rem, 100vw"
          className="object-cover"
        />
      </div>
      <figcaption className="border-t border-[var(--color-border)] px-5 py-4 text-sm leading-6 text-[var(--color-muted)]">
        {image.caption}
      </figcaption>
    </figure>
  );
}

export function CaseStudyPageTemplate({ content }: CaseStudyPageTemplateProps) {
  return (
    <div className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <section className="border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              {content.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
              {content.pageTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              {content.hero.intro}
            </p>

            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              {content.details.map((detail) => (
                <div
                  key={detail.label}
                  className="border-l-2 border-[var(--color-accent)] bg-[var(--color-section)] px-4 py-3"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                    {detail.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-[var(--color-ink)]">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="overflow-hidden rounded-[8px] border border-[var(--color-border)] bg-white shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={content.hero.image.src}
                alt={content.hero.image.alt}
                fill
                sizes="(min-width: 1024px) 30rem, 100vw"
                priority
                className="object-cover"
              />
            </div>
            <figcaption className="border-t border-[var(--color-border)] px-5 py-4 text-sm leading-6 text-[var(--color-muted)]">
              {content.hero.image.caption}
            </figcaption>
          </figure>
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <article className="max-w-3xl space-y-5">
          <div className="border-l-4 border-[var(--color-accent)] bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
            <p className="text-base leading-7 text-[var(--color-ink)] sm:text-lg">
              {content.summary}
            </p>
          </div>

          {content.sections.map((section) => (
            <Fragment key={section.title}>
              <section className="pt-8 first:pt-0">
                <h2 className="mt-8 border-t border-[var(--color-border)] pt-10 text-3xl font-semibold tracking-tight text-[var(--color-ink)] first:mt-0 first:border-t-0 first:pt-0">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-5">
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-7 text-[var(--color-muted)] sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                  <BulletList items={section.bullets} />
                </div>
              </section>
              {section.image ? <SectionImage image={section.image} /> : null}
            </Fragment>
          ))}
        </article>
      </main>

      <section className="border-t border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {content.finalCta.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            {content.finalCta.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            {content.finalCta.description}
          </p>
          <div className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3">
            <Link
              href={content.finalCta.buttonHref}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,110,184,0.16)] transition hover:bg-[var(--color-accent-strong)]"
            >
              {content.finalCta.buttonLabel}
            </Link>
            <Link
              href="/starlink-installation-perth"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white px-5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              View Starlink installation Perth
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
