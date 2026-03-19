import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-white shadow-[0_14px_30px_rgba(15,23,42,0.04)]">
      {product.image ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <Image
            src={product.image}
            alt={product.imageAlt || product.name}
            fill
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="p-6">
        <div className="flex flex-col gap-4 border-b border-[var(--color-border)] pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {product.badge ? (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                {product.badge}
              </p>
            ) : null}

            <h3 className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">
              {product.name}
            </h3>
          </div>

          <p className="text-3xl font-semibold text-[var(--color-ink)]">
            {product.price}
          </p>
        </div>

        <p className="mt-5 text-sm leading-6 text-[var(--color-muted)]">
          {product.description}
        </p>

        <ul className="mt-5 space-y-3">
          {product.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm leading-6 text-[var(--color-ink)]"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {product.href && product.ctaLabel ? (
          <Link
            href={product.href}
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[var(--color-accent)] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            {product.ctaLabel}
          </Link>
        ) : null}
      </div>
    </article>
  );
}