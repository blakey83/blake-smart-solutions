import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/products/ProductPageTemplate";
import { starlinkProducts, starlinkIntro } from "@/content/starlink_product";

export const metadata: Metadata = {
  title: "Starlink Installation | Blake Smart Solutions",
  description:
    "Professional Starlink installation, Wi-Fi upgrades, and outdoor connectivity solutions for Perth properties.",
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
