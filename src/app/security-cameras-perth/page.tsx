import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { servicePageMetadataContent } from "@/content/solutions/pageMetadata";
import { cctvSolutionContent } from "@/content/solutions/cctvSolutionContent";
import { cctvSolutionTrustItems } from "@/content/solutions/cctvSolutionContent";
import { whyChooseUsSecurity } from "@/content/solutions/cctvSolutionContent";
import {
  buildFaqPageNode,
  buildSchemaGraph,
  buildServiceNode,
} from "@/lib/jsonLd";
import { buildSeoMetadata } from "@/lib/seoMetadata";

const pagePath = "/security-cameras-perth";

export const metadata: Metadata = buildSeoMetadata({
  title: servicePageMetadataContent.securityCamerasPerth.title,
  description: servicePageMetadataContent.securityCamerasPerth.description,
  path: pagePath,
  image: {
    url: "/images/solutions/cctv/hero.png",
    alt: "Security camera installation for a Perth property",
  },
});

const structuredData = buildSchemaGraph([
  buildServiceNode({
    name: "Security Cameras Perth",
    description: servicePageMetadataContent.securityCamerasPerth.description,
    path: pagePath,
    serviceType: "Security camera installation",
    image: {
      url: "/images/solutions/cctv/hero.png",
      alt: "Security camera installation for a Perth property",
    },
  }),
  buildFaqPageNode(pagePath, cctvSolutionContent.faqs),
]);

export default function SecurityCamerasPerthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <SolutionPageTemplate
        {...cctvSolutionContent}
        currentPath={pagePath}
        trustItems={cctvSolutionTrustItems}
        content={whyChooseUsSecurity}
      />
    </>
  );
}
