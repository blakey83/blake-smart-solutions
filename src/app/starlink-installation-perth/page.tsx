import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { servicePageMetadataContent } from "@/content/pageMetadata";
import {
  starlinkSolutionContent,
  starlinkSolutionTrustItems,
} from "@/content/starlink_product";
import { whyChooseUsStarlink } from "@/content/page-contents/whyUsContent";
import { buildSeoMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildSeoMetadata({
  title: servicePageMetadataContent.starlinkInstallationPerth.title,
  description: servicePageMetadataContent.starlinkInstallationPerth.description,
  path: "/starlink-installation-perth",
  image: {
    url: "/images/products/starlink/Starlink.jpg",
    alt: "Starlink dish installed on a Perth roof",
  },
});

export default function StarlinkPage() {
  return (
    <SolutionPageTemplate
      {...starlinkSolutionContent}
      currentPath="/starlink-installation-perth"
      trustItems={starlinkSolutionTrustItems}
      content={whyChooseUsStarlink}
    />
  );
}
