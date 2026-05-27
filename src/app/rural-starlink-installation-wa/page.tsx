import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { servicePageMetadataContent } from "@/content/pageMetadata";
import { starlinkSolutionTrustItems } from "@/content/landing-page-contents/ruralStarlink";
import { RuralStarlinkSolutionContent } from "@/content/landing-page-contents/ruralStarlink";
import { whyChooseUsStarlink } from "@/content/page-contents/whyUsContent";
import { buildSeoMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildSeoMetadata({
  title: servicePageMetadataContent.starlinkInstallationRural.title,
  description: servicePageMetadataContent.starlinkInstallationRural.description,
  path: "/rural-starlink-installation-wa",
  image: {
    url: "/images/products/rural-starlink/blake_rural.png",
    alt: "Rural Starlink installation in Western Australia",
  },
});

export default function StarlinkPage() {
  return (
    <SolutionPageTemplate
      {...RuralStarlinkSolutionContent}
      currentPath="/rural-starlink-installation-wa"
      trustItems={starlinkSolutionTrustItems}
      content={whyChooseUsStarlink}
    />
  );
}
