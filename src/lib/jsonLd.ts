import { SITE_URL } from "@/lib/seoConfig";

export const AUTHOR_NAME = "Daniel Blake";
export const BUSINESS_NAME = "Blake Smart Solutions Pty Ltd";
export const BUSINESS_PHONE = "+61477948079";
export const BUSINESS_EMAIL = "info@blakesmartsolutions.com.au";
export const BUSINESS_LOGO_PATH = "/images/branding/BSS_logo.png";

const SAME_AS_LINKS = [
  "https://www.linkedin.com/company/blake-smart-solutions/",
  "https://www.facebook.com/profile.php?id=61589108187694",
  "https://share.google/D5Q1aySKQxEKHVFR7",
  "https://medium.com/@daniel_8695",
];

type ImageObjectOptions = {
  url?: string;
  src?: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
};

type ArticleNodeOptions = {
  headline: string;
  description: string;
  pageUrl: string;
  images: ImageObjectOptions[];
  datePublished: string;
  dateModified: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type ServiceNodeOptions = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  image?: ImageObjectOptions;
  offerDescription?: string;
};

export function absoluteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http")) {
    return pathOrUrl;
  }

  return `${SITE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

export function buildImageObject({
  url,
  src,
  alt,
  caption = alt,
  width,
  height,
}: ImageObjectOptions) {
  const imageUrl = url ?? src;

  if (!imageUrl) {
    throw new Error("ImageObject schema requires a url or src.");
  }

  return {
    "@type": "ImageObject",
    url: absoluteUrl(imageUrl),
    ...(caption ? { caption } : {}),
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  };
}

export function buildLocalBusinessNode() {
  return {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#localbusiness`,
    name: BUSINESS_NAME,
    legalName: BUSINESS_NAME,
    url: SITE_URL,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    logo: buildImageObject({
      url: BUSINESS_LOGO_PATH,
      alt: "Blake Smart Solutions logo",
    }),
    image: absoluteUrl(BUSINESS_LOGO_PATH),
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Perth, Western Australia",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perth",
      addressRegion: "Western Australia",
      addressCountry: "AU",
    },
    ...(SAME_AS_LINKS.length ? { sameAs: SAME_AS_LINKS } : {}),
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    ...buildLocalBusinessNode(),
  };
}

export function buildArticleNode({
  headline,
  description,
  pageUrl,
  images,
  datePublished,
  dateModified,
}: ArticleNodeOptions) {
  return {
    "@type": "Article",
    headline,
    description,
    image: images.map((image) => buildImageObject(image)),
    datePublished,
    dateModified,
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      logo: buildImageObject({
        url: BUSINESS_LOGO_PATH,
        alt: "Blake Smart Solutions logo",
      }),
    },
  };
}

export function buildArticleJsonLd(options: ArticleNodeOptions) {
  return {
    "@context": "https://schema.org",
    ...buildArticleNode(options),
  };
}

export function buildServiceNode({
  name,
  description,
  path,
  serviceType,
  image,
  offerDescription,
}: ServiceNodeOptions) {
  const url = absoluteUrl(path);

  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType,
    description,
    url,
    provider: {
      "@id": `${SITE_URL}#localbusiness`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Perth, Western Australia",
    },
    ...(image ? { image: buildImageObject(image) } : {}),
    offers: {
      "@type": "Offer",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      url,
      description: offerDescription ?? description,
    },
  };
}

export function buildFaqPageNode(path: string, faqs: FaqItem[]) {
  const url = absoluteUrl(path);

  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildSchemaGraph(nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
