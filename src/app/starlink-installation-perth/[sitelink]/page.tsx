import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WifiSitelinkPageTemplate } from "@/components/solutions/WifiSitelinkPageTemplate";
import {
  starlinkSitelinkPages,
  starlinkSitelinkPagesBySlug,
} from "@/content/solutions/starlinkSitelinks";
import { buildFaqPageNode, buildSchemaGraph, buildServiceNode } from "@/lib/jsonLd";
import { buildSeoMetadata } from "@/lib/seoMetadata";

type PageProps = { params: Promise<{ sitelink: string }> };

export function generateStaticParams() {
  return starlinkSitelinkPages.map((page) => ({ sitelink: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { sitelink } = await params;
  const page = starlinkSitelinkPagesBySlug[sitelink];
  if (!page) return {};

  return buildSeoMetadata({
    title: page.metadata.title,
    description: page.metadata.description,
    path: `/starlink-installation-perth/${page.slug}`,
    image: { url: page.proof.image, alt: page.proof.imageAlt },
  });
}

export default async function StarlinkSitelinkPage({ params }: PageProps) {
  const { sitelink } = await params;
  const page = starlinkSitelinkPagesBySlug[sitelink];
  if (!page) notFound();

  const path = `/starlink-installation-perth/${page.slug}`;
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
      <WifiSitelinkPageTemplate page={page} service="starlink" />
    </>
  );
}
