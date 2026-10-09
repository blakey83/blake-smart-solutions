import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import {
  wifiSolutionPages,
  wifiSolutionPagesBySlug,
} from "@/content/solutions/wifiSolutionPages";
import { wifiSolutionTrustItems, whyChooseUsWiFi } from "@/content/solutions/wifiSolutionContent";
import { buildFaqPageNode, buildSchemaGraph, buildServiceNode } from "@/lib/jsonLd";
import { buildSeoMetadata } from "@/lib/seoMetadata";

type PageProps = { params: Promise<{ solution: string }> };

export function generateStaticParams() {
  return wifiSolutionPages.map((page) => ({ solution: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { solution } = await params;
  const page = wifiSolutionPagesBySlug[solution];
  if (!page) return {};

  return buildSeoMetadata({
    title: page.metadata.title,
    description: page.metadata.description,
    path: `/wifi-solutions-perth/${page.slug}`,
    image: page.image,
  });
}

export default async function WifiSolutionPage({ params }: PageProps) {
  const { solution } = await params;
  const page = wifiSolutionPagesBySlug[solution];
  if (!page) notFound();

  const path = `/wifi-solutions-perth/${page.slug}`;
  const structuredData = buildSchemaGraph([
    buildServiceNode({
      name: page.enquiryName,
      description: page.metadata.description,
      path,
      serviceType: page.enquiryName,
      image: page.image,
    }),
    buildFaqPageNode(path, page.content.faqs),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SolutionPageTemplate
        {...page.content}
        trustItems={wifiSolutionTrustItems}
        content={whyChooseUsWiFi}
      />
    </>
  );
}
