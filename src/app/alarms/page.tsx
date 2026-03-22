import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/products/ProductPageTemplate";
import { securityProducts, alarmIntro } from "@/content/security_products";

export const metadata: Metadata = {
  title: "Alarm & Access Control | Blake Smart Solutions",
  description:
    "Alarm and access control solutions for Perth homes and small businesses, with clean installation and practical setup.",
};

export default function AlarmsPage() {
  return (
    <ProductPageTemplate
      title={alarmIntro.title}
      intro={alarmIntro.intro}
      products={securityProducts}
    />
  );
}
