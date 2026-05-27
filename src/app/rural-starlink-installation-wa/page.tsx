import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { servicePageMetadataContent } from "@/content/pageMetadata";
import { starlinkSolutionTrustItems } from "@/content/landing-page-contents/ruralStarlink";
import { RuralStarlinkSolutionContent } from "@/content/landing-page-contents/ruralStarlink";
import { whyChooseUsStarlink } from "@/content/page-contents/whyUsContent";

export const metadata: Metadata = {
  title: servicePageMetadataContent.starlinkInstallationRural.title,
  description: servicePageMetadataContent.starlinkInstallationRural.description,
  alternates: {
    canonical:
      "https://www.blakesmartsolutions.com.au/rural-starlink-installation-wa",
  },
  openGraph: {
    title: servicePageMetadataContent.starlinkInstallationRural.title,
    description:
      servicePageMetadataContent.starlinkInstallationRural.description,
    url: "https://www.blakesmartsolutions.com.au/rural-starlink-installation-wa",
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
    title: servicePageMetadataContent.starlinkInstallationRural.title,
    description:
      servicePageMetadataContent.starlinkInstallationRural.description,
    images: [
      "https://www.blakesmartsolutions.com.au/images/products/starlink/Starlink.jpg",
    ],
  },
};

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
