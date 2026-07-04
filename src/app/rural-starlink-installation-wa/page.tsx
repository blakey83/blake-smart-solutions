import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { servicePageMetadataContent } from "@/content/solutions/pageMetadata";
import { starlinkSolutionTrustItems } from "@/content/solutions/ruralStarlink";
import { RuralStarlinkSolutionContent } from "@/content/solutions/ruralStarlink";
import { whyChooseUsRuralStarlink } from "@/content/solutions/ruralStarlink";
import { buildFaqPageNode, buildSchemaGraph } from "@/lib/jsonLd";
import { buildSeoMetadata } from "@/lib/seoMetadata";

const pagePath = "/rural-starlink-installation-wa";

export const metadata: Metadata = buildSeoMetadata({
  title: servicePageMetadataContent.starlinkInstallationRural.title,
  description: servicePageMetadataContent.starlinkInstallationRural.description,
  path: pagePath,
  image: {
    url: "/images/products/rural-starlink/blake_rural.png",
    alt: "Rural Starlink installation in Western Australia",
  },
});

const structuredData = buildSchemaGraph([
  buildFaqPageNode(pagePath, RuralStarlinkSolutionContent.faqs),
]);

export default function StarlinkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <SolutionPageTemplate
        {...RuralStarlinkSolutionContent}
        currentPath={pagePath}
        trustItems={starlinkSolutionTrustItems}
        content={whyChooseUsRuralStarlink}
      />
    </>
  );
}
