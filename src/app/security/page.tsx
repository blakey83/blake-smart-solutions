import type { Metadata } from "next";
import { LandingPage } from "@/components/landingPages/LandingPage";
import { servicePageMetadataContent } from "@/content/pageMetadata";
import { siteMetadataContent } from "@/content/siteContent";

const pagePath = servicePageMetadataContent.security.pagePath;
const pageUrl = `${siteMetadataContent.website}${pagePath}`;
const pageTitle = servicePageMetadataContent.security.pageTitle;
const pageDescription = servicePageMetadataContent.security.pageDescription;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: siteMetadataContent.businessName,
    images: [
      {
        url: servicePageMetadataContent.security.image.url,
        width: servicePageMetadataContent.security.image.width,
        height: servicePageMetadataContent.security.image.height,
        alt: servicePageMetadataContent.security.image.alt,
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      servicePageMetadataContent.security.image.url,
    ],
  },
};

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: servicePageMetadataContent.security.serviceName,
  description: pageDescription,
  url: pageUrl,
  areaServed: {
    "@type": "City",
    name: siteMetadataContent.city,
  },
  provider: {
    "@type": "LocalBusiness",
    name: siteMetadataContent.businessName,
    url: siteMetadataContent.website,
    telephone: siteMetadataContent.telephone,
    image: servicePageMetadataContent.security.providerImage,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteMetadataContent.city,
      addressRegion: siteMetadataContent.region,
      addressCountry: siteMetadataContent.country,
    },
  },
  serviceType: servicePageMetadataContent.security.serviceType,
  category: servicePageMetadataContent.security.category,
  offers: {
    "@type": "Offer",
    url: pageUrl,
    priceCurrency: "AUD",
    availability: "https://schema.org/InStock",
    description: servicePageMetadataContent.security.offerDescription,
  },
};

export default function SecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
      <LandingPage />
    </>
  );
}
