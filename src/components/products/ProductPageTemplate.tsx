import Link from "next/link";
import type { Product } from "@/lib/types";
import { ProductCardGrid } from "@/components/products/ProductCardGrid";
import { RelatedServicesSection } from "@/components/services/RelatedServicesSection";

type ProductPageTemplateProps = {
  currentPath: string;
  title: string;
  intro: string;
  products: Product[];
};

export function ProductPageTemplate({
  currentPath,
  title,
  intro,
  products,
}: ProductPageTemplateProps) {
  return (
    <div className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <section className="border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Services
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              {intro}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-section)]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <ProductCardGrid products={products} />
        </div>
      </section>

      <RelatedServicesSection
        currentPath={currentPath}
        title="Compare related services"
        description="Many jobs overlap across Wi-Fi, cabling, Starlink, antennas and security. These nearby service pages can help you find the best fit."
      />

      <section
        id="final-cta"
        className="border-t border-[var(--color-border)] bg-[var(--color-page)]"
      >
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Get in touch
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            Need advice on the right option for your property?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            Blake Smart Solutions can help you compare the practical options and
            work out the best next step for the site.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:0477948079"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
            >
              Call 0477 948 079
            </a>
            <Link
              href="/#final-cta"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] px-5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
