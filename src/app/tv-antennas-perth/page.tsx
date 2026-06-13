import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/products/ProductPageTemplate";
import { servicePageMetadataContent } from "@/content/pageMetadata";
import {
  antennaProducts,
  antennasIntro,
  whyChooseUsAntennas,
} from "@/content/antenna_products";
import { buildSeoMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildSeoMetadata({
  title: servicePageMetadataContent.tvAntennasPerth.title,
  description: servicePageMetadataContent.tvAntennasPerth.description,
  path: "/tv-antennas-perth",
  image: {
    url: "/images/products/antenna/hills_blak_arrow.jpg",
    alt: "TV antenna installation and reception repairs",
  },
});

export default function AntennasPage() {
  return (
    <ProductPageTemplate
      currentPath="/tv-antennas-perth"
      title={antennasIntro.title}
      intro={antennasIntro.intro}
      products={antennaProducts}
      content={whyChooseUsAntennas}
    />
  );
}
