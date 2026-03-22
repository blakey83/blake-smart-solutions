import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/products/ProductPageTemplate";
import { cctvProducts, cctvIntro } from "@/content/cctv_products";

export const metadata: Metadata = {
  title: "CCTV & Security Cameras | Blake Smart Solutions",
  description:
    "CCTV and security camera installation for Perth homes and small businesses, with practical package options and professional setup.",
};

export default function CctvPage() {
  return (
    <ProductPageTemplate
      title={cctvIntro.title}
      intro={cctvIntro.intro}
      products={cctvProducts}
    />
  );
}
