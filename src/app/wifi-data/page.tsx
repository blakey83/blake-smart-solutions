import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/products/ProductPageTemplate";
import { wifiProducts, wifiDataIntro } from "@/content/WiFi_products";

export const metadata: Metadata = {
  title: "Wi-Fi & Wireless Solutions | Blake Smart Solutions",
  description:
    "Wi-Fi upgrades, mesh systems, outdoor access points, and wireless links for Perth homes and small businesses.",
};

export default function WifiDataPage() {
  return (
    <ProductPageTemplate
      title={wifiDataIntro.title}
      intro={wifiDataIntro.intro}
      products={wifiProducts}
    />
  );
}
