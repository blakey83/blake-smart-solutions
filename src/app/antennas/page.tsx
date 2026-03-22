import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/products/ProductPageTemplate";
import { antennaProducts, antennasIntro } from "@/content/antenna_products";

export const metadata: Metadata = {
  title: "TV Antennas | Blake Smart Solutions",
  description:
    "TV antenna repairs, extra points, and new antenna installations for Perth homes needing reliable free-to-air reception.",
};

export default function AntennasPage() {
  return (
    <ProductPageTemplate
      title={antennasIntro.title}
      intro={antennasIntro.intro}
      products={antennaProducts}
    />
  );
}
