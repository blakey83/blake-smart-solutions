import type { Metadata } from "next";
import { WorkShowcasePageTemplate } from "@/components/work/WorkShowcasePageTemplate";
import { recentSecurityCameraInstallationsContent } from "@/content/recent-installations/security-cameras";
import { buildSeoMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildSeoMetadata({
  title: "Recent Security Camera Installations Perth | Blake Smart Solutions",
  description:
    "Explore recent security camera installations across Perth, including CCTV for a Southern River family living on a busy road.",
  path: "/recent-installations/security-cameras",
  image: {
    url: "/images/work-photos/security-cameras/southern-river-camera-installation.webp",
    alt: "Security camera installation at a Southern River home",
  },
});

export default function RecentSecurityCameraInstallationsPage() {
  return (
    <WorkShowcasePageTemplate
      content={recentSecurityCameraInstallationsContent}
      enquiryProductName="Security Cameras"
    />
  );
}
