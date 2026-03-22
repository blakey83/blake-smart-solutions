"use client";

import type { Product } from "@/lib/types";
import ProductCard from "@/components/ui/ProductCard";
import { openEnquiryModal } from "@/lib/enquiryModal";

type ProductCardGridProps = {
  products: Product[];
  className?: string;
};

export function ProductCardGrid({
  products,
  className = "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
}: ProductCardGridProps) {
  return (
    <div className={className}>
      {products.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          onCtaClick={(selectedProduct) =>
            openEnquiryModal(selectedProduct.name)
          }
        />
      ))}
    </div>
  );
}
