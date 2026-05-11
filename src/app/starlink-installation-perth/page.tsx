import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/products/ProductPageTemplate";
import { servicePageMetadataContent } from "@/content/pageMetadata";
import { starlinkProducts, starlinkIntro } from "@/content/starlink_product";

export const metadata: Metadata = {
  title: servicePageMetadataContent.starlinkInstallationPerth.title,
  description: servicePageMetadataContent.starlinkInstallationPerth.description,
};

export default function StarlinkPage() {
  return (
    <ProductPageTemplate
      currentPath="/starlink-installation-perth"
      title={starlinkIntro.title}
      intro={starlinkIntro.intro}
      products={starlinkProducts}
    />
  );
}
