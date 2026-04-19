import Image from "next/image";
import type { Product } from "@/lib/types";

type ProductCardProps = {
  product: Product;
  onCtaClick: (product: Product) => void;
};

export default function ProductCard({ product, onCtaClick }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-white shadow-[0_14px_30px_rgba(15,23,42,0.04)]">
      {product.image ? (
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={product.image}
            alt={product.imageAlt ?? product.name}
            fill
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center gap-3">
          {product.badge ? (
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
              {product.badge}
            </span>
          ) : null}

          {product.price ? (
            <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-600">
              {product.price}
            </span>
          ) : null}
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {product.name}
        </h3>

        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
          {product.description}
        </p>

        {product.features?.length ? (
          <ul className="mt-6 space-y-4">
            {product.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-base leading-relaxed text-slate-800 sm:text-lg">
                <span className="mt-[10px] h-2.5 w-2.5 rounded-full bg-sky-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto pt-8">
          <button
            type="button"
            onClick={() => onCtaClick(product)}
            className="min-h-12 w-full rounded-2xl bg-sky-500 px-4 py-3 text-base font-semibold text-slate-950 transition hover:bg-sky-400 sm:px-6 sm:py-4 sm:text-lg"
          >
            {product.ctaLabel}
          </button>
        </div>
      </div>
    </article>
  );
}
