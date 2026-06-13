import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/products/ProductPageTemplate";
import { servicePageMetadataContent } from "@/content/pageMetadata";
import {
  dataCablingProducts,
  dataIntro,
  whyChooseUsDataCabling,
} from "@/content/data_products";
import { buildSeoMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildSeoMetadata({
  title: servicePageMetadataContent.dataCabling.title,
  description: servicePageMetadataContent.dataCabling.description,
  path: "/data-cabling",
  image: {
    url: "/images/products/wifi/managed_wifi.png",
    alt: "Professional data cabling and network equipment",
  },
});

export default function DataCablingPage() {
  return (
    <ProductPageTemplate
      currentPath="/data-cabling"
      title={dataIntro.title}
      intro={dataIntro.intro}
      products={dataCablingProducts}
      content={whyChooseUsDataCabling}
    />
  );
}
