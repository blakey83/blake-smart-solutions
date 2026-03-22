import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/products/ProductPageTemplate";
import { dataCablingProducts, dataIntro } from "@/content/data_products";

export const metadata: Metadata = {
  title: "Data Cabling | Blake Smart Solutions",
  description:
    "Cat6 data cabling and hard-wired network upgrades for Perth homes and small businesses.",
};

export default function DataCablingPage() {
  return (
    <ProductPageTemplate
      title={dataIntro.title}
      intro={dataIntro.intro}
      products={dataCablingProducts}
    />
  );
}
