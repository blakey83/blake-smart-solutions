import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetailPageTemplate } from "@/components/solutions/SolutionDetailPageTemplate";
import {
  starlinkSolutionPages,
  starlinkSolutionPagesBySlug,
} from "@/content/solutions/starlinkSolutionPages";
import { buildFaqPageNode, buildSchemaGraph, buildServiceNode } from "@/lib/jsonLd";
import { buildSeoMetadata } from "@/lib/seoMetadata";

type PageProps = { params: Promise<{ solution: string }> };

export function generateStaticParams() {
  return starlinkSolutionPages.map((page) => ({ solution: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { solution } = await params;
  const page = starlinkSolutionPagesBySlug[solution];
  if (!page) return {};

  return buildSeoMetadata({
    title: page.metadata.title,
    description: page.metadata.description,
    path: `/starlink-installation-perth/${page.slug}`,
    image: { url: page.proof.image, alt: page.proof.imageAlt },
  });
}

export default async function StarlinkSolutionPage({ params }: PageProps) {
  const { solution } = await params;
  const page = starlinkSolutionPagesBySlug[solution];
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
      <SolutionDetailPageTemplate page={page} service="starlink" />
    </>
  );
}
