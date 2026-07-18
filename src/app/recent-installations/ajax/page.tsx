import type { Metadata } from "next";
import { WorkShowcasePageTemplate } from "@/components/work/WorkShowcasePageTemplate";
import { recentAjaxInstallationsContent } from "@/content/recent-installations/ajax";
import { buildSeoMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildSeoMetadata({
  title: "Recent Ajax Security Installations Perth | Blake Smart Solutions",
  description:
    "See recent Ajax alarm and security system installations completed by Blake Smart Solutions across Perth.",
  path: "/recent-installations/ajax",
  image: {
    url: "/images/work-photos/Ajax/kelmscott-street-siren.webp",
    alt: "Ajax StreetSiren installation at a Kelmscott home",
  },
});

export default function RecentAjaxInstallationsPage() {
  return <WorkShowcasePageTemplate content={recentAjaxInstallationsContent} />;
}
