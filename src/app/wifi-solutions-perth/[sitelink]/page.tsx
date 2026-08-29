import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WifiSitelinkPageTemplate } from "@/components/solutions/WifiSitelinkPageTemplate";
import {
  wifiSitelinkPages,
  wifiSitelinkPagesBySlug,
} from "@/content/solutions/wifiSitelinks";
import { buildFaqPageNode, buildSchemaGraph, buildServiceNode } from "@/lib/jsonLd";
import { buildSeoMetadata } from "@/lib/seoMetadata";

type PageProps = { params: Promise<{ sitelink: string }> };

export function generateStaticParams() {
  return wifiSitelinkPages.map((page) => ({ sitelink: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { sitelink } = await params;
  const page = wifiSitelinkPagesBySlug[sitelink];
  if (!page) return {};

  return buildSeoMetadata({
    title: page.metadata.title,
    description: page.metadata.description,
    path: `/wifi-solutions-perth/${page.slug}`,
    image: { url: page.proof.image, alt: page.proof.imageAlt },
  });
}

export default async function WifiSitelinkPage({ params }: PageProps) {
  const { sitelink } = await params;
  const page = wifiSitelinkPagesBySlug[sitelink];
  if (!page) notFound();

  const path = `/wifi-solutions-perth/${page.slug}`;
  const structuredData = buildSchemaGraph([
    buildServiceNode({
      name: page.enquiryName,
      description: page.metadata.description,
      path,
      serviceType: page.enquiryName,
      image: { url: page.proof.image, alt: page.proof.imageAlt },
    }),
    buildFaqPageNode(path, page.faqs),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <WifiSitelinkPageTemplate page={page} />
    </>
  );
}
