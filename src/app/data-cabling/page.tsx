import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/products/ProductPageTemplate";
import { servicePageMetadataContent } from "@/content/pageMetadata";
import { dataCablingProducts, dataIntro } from "@/content/data_products";
import { whyChooseUsHome } from "@/content/page-contents/whyUsContent";

export const metadata: Metadata = {
  title: servicePageMetadataContent.dataCabling.title,
  description: servicePageMetadataContent.dataCabling.description,
};

export default function DataCablingPage() {
  return (
    <ProductPageTemplate
      currentPath="/data-cabling"
      title={dataIntro.title}
      intro={dataIntro.intro}
      products={dataCablingProducts}
      content={whyChooseUsHome}
    />
  );
}
