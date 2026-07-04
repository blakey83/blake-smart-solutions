import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/products/ProductPageTemplate";
import { servicePageMetadataContent } from "@/content/solutions/pageMetadata";
import {
  dataCablingProducts,
  dataIntro,
  whyChooseUsDataCabling,
} from "@/content/solutions/data_products";
import { buildSchemaGraph, buildServiceNode } from "@/lib/jsonLd";
import { buildSeoMetadata } from "@/lib/seoMetadata";

const pagePath = "/data-cabling";

export const metadata: Metadata = buildSeoMetadata({
  title: servicePageMetadataContent.dataCabling.title,
  description: servicePageMetadataContent.dataCabling.description,
  path: pagePath,
  image: {
    url: "/images/products/wifi/managed_wifi.png",
    alt: "Professional data cabling and network equipment",
  },
});

const structuredData = buildSchemaGraph([
  buildServiceNode({
    name: "Data Cabling",
    description: servicePageMetadataContent.dataCabling.description,
    path: pagePath,
    serviceType: "Data cabling installation",
    image: {
      url: "/images/products/wifi/managed_wifi.png",
      alt: "Professional data cabling and network equipment",
    },
  }),
]);

export default function DataCablingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ProductPageTemplate
        currentPath={pagePath}
        title={dataIntro.title}
        intro={dataIntro.intro}
        products={dataCablingProducts}
        content={whyChooseUsDataCabling}
      />
    </>
  );
}
