import type { Metadata } from "next";
import { LandingPage } from "@/components/landingPages/LandingPage";

const pagePath = "/security";
const pageUrl = `https://www.blakesmartsolutions.com.au${pagePath}`;
const pageTitle =
  "Security Camera Installation Perth | Active Deterrence CCTV";
const pageDescription =
  "Deter intruders with active deterrence CCTV systems for Perth homes and businesses. TiOC cameras, full-colour night vision, smart alerts and professional installation.";

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
    siteName: "Blake Smart Solutions",
    images: [
      {
        url: "https://www.blakesmartsolutions.com.au/images/products/security/tioc_burgler.png",
        width: 1448,
        height: 1086,
        alt: "Active deterrence security camera system for Perth homes and businesses",
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
      "https://www.blakesmartsolutions.com.au/images/products/security/tioc_burgler.png",
    ],
  },
};

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Security Camera Installation Perth",
  description: pageDescription,
  url: pageUrl,
  areaServed: {
    "@type": "City",
    name: "Perth",
  },
  provider: {
    "@type": "LocalBusiness",
    name: "Blake Smart Solutions",
    url: "https://www.blakesmartsolutions.com.au",
    telephone: "+61477948079",
    image: "https://www.blakesmartsolutions.com.au/Blake_shop_front.jpeg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perth",
      addressRegion: "WA",
      addressCountry: "AU",
    },
  },
  serviceType: "Security camera installation",
  category: "Security System Installation",
  offers: {
    "@type": "Offer",
    url: pageUrl,
    priceCurrency: "AUD",
    availability: "https://schema.org/InStock",
    description:
      "Active deterrence CCTV design and installation for Perth homes and businesses.",
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
