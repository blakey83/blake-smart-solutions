import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { servicePageMetadataContent } from "@/content/solutions/pageMetadata";
import { cctvSolutionContent } from "@/content/solutions/cctvSolutionContent";
import { cctvSolutionTrustItems } from "@/content/solutions/cctvSolutionContent";
import { whyChooseUsSecurity } from "@/content/solutions/cctvSolutionContent";
import { buildSeoMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildSeoMetadata({
  title: servicePageMetadataContent.securityCamerasPerth.title,
  description: servicePageMetadataContent.securityCamerasPerth.description,
  path: "/security-cameras-perth",
  image: {
    url: "/images/solutions/cctv/hero.png",
    alt: "Security camera installation for a Perth property",
  },
});

export default function SecurityCamerasPerthPage() {
  return (
    <SolutionPageTemplate
      {...cctvSolutionContent}
      currentPath="/security-cameras-perth"
      trustItems={cctvSolutionTrustItems}
      content={whyChooseUsSecurity}
    />
  );
}
