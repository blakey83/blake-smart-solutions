import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { servicePageMetadataContent } from "@/content/pageMetadata";
import {
  starlinkSolutionContent,
  starlinkSolutionTrustItems,
} from "@/content/starlink_product";
import { whyChooseUsStarlink } from "@/content/page-contents/whyUsContent";

export const metadata: Metadata = {
  title: servicePageMetadataContent.starlinkInstallationPerth.title,
  description: servicePageMetadataContent.starlinkInstallationPerth.description,
  alternates: {
    canonical:
      "https://www.blakesmartsolutions.com.au/starlink-installation-perth",
  },
  openGraph: {
    title: servicePageMetadataContent.starlinkInstallationPerth.title,
    description: servicePageMetadataContent.starlinkInstallationPerth.description,
    url: "https://www.blakesmartsolutions.com.au/starlink-installation-perth",
    siteName: "Blake Smart Solutions",
    images: [
      {
        url: "https://www.blakesmartsolutions.com.au/images/products/starlink/Starlink.jpg",
        alt: "Starlink dish installed on a Perth roof",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: servicePageMetadataContent.starlinkInstallationPerth.title,
    description: servicePageMetadataContent.starlinkInstallationPerth.description,
    images: [
      "https://www.blakesmartsolutions.com.au/images/products/starlink/Starlink.jpg",
    ],
  },
};

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
