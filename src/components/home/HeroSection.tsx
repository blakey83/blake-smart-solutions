import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "../ui/ButtonLink";
import { heroContent, services } from "@/content/products";


export function HeroSection() {
  return (
    <section className="border-b border-[var(--color-border)] bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Perth Smart Technology Specialists
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
              {heroContent.largeText}
            </h1>

            <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              {heroContent.smallText}
            </p>

            <div className="mt-6">
              <Link
                href="tel:0477948079"
                className="inline-flex items-center text-base font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline"
              >
                Call 0477 948 079
              </Link>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="tel:0477948079">Call Now</ButtonLink>
              <ButtonLink href="#final-cta" variant="secondary">
                Request a Quote
              </ButtonLink>
            </div>

            <Link
              href="#specials"
              className="mt-4 inline-flex text-sm font-medium text-[var(--color-ink)] underline underline-offset-4"
            >
              See current specials
            </Link>

            <div className="mt-6 flex flex-wrap gap-3">
              {services.map((service) => (
                <span
                  key={service.title}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-sm font-medium text-[var(--color-ink)]"
                >
                  {service.title }
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/daniel-bss-hero.png"
                  alt="Blake Smart Solutions technician on site"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}