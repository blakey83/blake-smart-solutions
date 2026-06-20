import type { Metadata } from "next";
import { WorkShowcasePageTemplate } from "@/components/work/WorkShowcasePageTemplate";
import { recentStarlinkInstallationsContent } from "@/content/recent-installations/starlink";
import { buildSeoMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildSeoMetadata({
  title: "Recent Starlink Installations | Blake Smart Solutions",
  description:
    "Recent Starlink installations completed by Blake Smart Solutions across Perth and surrounding areas.",
  path: "/recent-installations/starlink",
  image: {
    url: "/images/work-photos/Starlink/Camillo.jpg",
    alt: "Starlink installation on a residential roof in Camillo",
  },
});

export default function RecentStarlinkInstallationsPage() {
  return (
    <WorkShowcasePageTemplate content={recentStarlinkInstallationsContent} />
  );
}
