import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-white shadow-[0_14px_30px_rgba(15,23,42,0.04)]">
      {product.image ? (
        <div className="flex h-44 w-full items-center justify-center overflow-hidden bg-white p-6">
          <div className="relative h-full w-full">
            <Image
              src={product.image}
              alt={product.imageAlt || product.name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3">
          {product.badge ? (
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              {product.badge}
            </span>
          ) : null}

          <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-sm font-semibold text-[var(--color-accent)]">
            {product.price}
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-semibold leading-tight text-[var(--color-ink)]">
          {product.name}
        </h3>

        <p className="mt-3 min-h-[84px] text-sm leading-7 text-[var(--color-muted)]">
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
