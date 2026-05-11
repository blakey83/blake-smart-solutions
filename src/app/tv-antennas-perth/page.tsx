import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/products/ProductPageTemplate";
import { servicePageMetadataContent } from "@/content/pageMetadata";
import { antennaProducts, antennasIntro } from "@/content/antenna_products";

export const metadata: Metadata = {
  title: servicePageMetadataContent.tvAntennasPerth.title,
  description: servicePageMetadataContent.tvAntennasPerth.description,
};

export default function AntennasPage() {
  return (
    <ProductPageTemplate
      currentPath="/tv-antennas-perth"
      title={antennasIntro.title}
      intro={antennasIntro.intro}
      products={antennaProducts}
    />
  );
}
