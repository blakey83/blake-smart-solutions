import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { servicePageMetadataContent } from "@/content/pageMetadata";
import { cctvSolutionContent } from "@/content/cctvSolutionContent";
import { cctvSolutionTrustItems } from "@/content/cctvSolutionContent";

export const metadata: Metadata = {
  title: servicePageMetadataContent.securityCamerasPerth.title,
  description: servicePageMetadataContent.securityCamerasPerth.description,
};

export default function SecurityCamerasPerthPage() {
  return (
    <SolutionPageTemplate
      {...cctvSolutionContent}
      currentPath="/security-cameras-perth"
      trustItems={cctvSolutionTrustItems}
    />
  );
}
