import type { Metadata } from "next";
import { CaseStudyPageTemplate } from "@/components/case-studies/CaseStudyPageTemplate";
import { siteMetadataContent } from "@/content/components/siteContent";
import { starlinkOakfordCaseStudy } from "@/content/case-studies/starlinkCityBeach";
import {
  absoluteUrl,
  buildArticleNode,
  buildSchemaGraph,
} from "@/lib/jsonLd";
import { buildSeoMetadata } from "@/lib/seoMetadata";

const content = starlinkOakfordCaseStudy;
const pageUrl = `${siteMetadataContent.website}${content.pagePath}`;

export const metadata: Metadata = buildSeoMetadata({
  title: `${content.pageTitle} | Blake Smart Solutions`,
  description: content.pageDescription,
  path: content.pagePath,
  keywords: content.keywords,
  image: {
    url: content.hero.image.src,
    alt: content.hero.image.alt,
  },
  type: "article",
});

const structuredData = buildSchemaGraph([
  buildArticleNode({
    headline: content.pageTitle,
    description: content.pageDescription,
    pageUrl,
    images: [
      content.hero.image,
      ...content.sections.flatMap((section) =>
        section.image ? [section.image] : [],
      ),
    ],
    datePublished: content.publishedTime,
    dateModified: content.modifiedTime,
  }),
  {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteMetadataContent.website,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: absoluteUrl("/case-studies"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: content.pageTitle,
        item: pageUrl,
      },
    ],
  },
]);

export default function OakfordStarlinkCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <CaseStudyPageTemplate content={content} />
    </>
  );
}
