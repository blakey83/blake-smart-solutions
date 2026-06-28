import type { Metadata } from "next";
import { SITE_URL, getAbsoluteCanonicalUrl } from "@/lib/seoRoutes";
import { siteMetadataContent } from "@/content/components/siteContent";

type SeoMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt: string;
  };
  type?: "website" | "article";
};

const defaultImage = {
  url: `${SITE_URL}/images/branding/BSS_logo.png`,
  alt: "Blake Smart Solutions logo",
};

function toAbsoluteImageUrl(url: string): string {
  return url.startsWith("http") ? url : `${SITE_URL}${url}`;
}

export function buildSeoMetadata({
  title,
  description,
  path,
  image = defaultImage,
  type = "website",
}: SeoMetadataOptions): Metadata {
  const url = getAbsoluteCanonicalUrl(path);
  const imageUrl = toAbsoluteImageUrl(image.url);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteMetadataContent.businessName,
      images: [
        {
          url: imageUrl,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
      locale: "en_AU",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
