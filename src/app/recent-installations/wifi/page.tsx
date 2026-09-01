import type { Metadata } from "next";
import { WorkShowcasePageTemplate } from "@/components/work/WorkShowcasePageTemplate";
import { recentWifiInstallationsContent } from "@/content/recent-installations/wifi";
import { buildSeoMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildSeoMetadata({
  title: "Recent Wi-Fi Installations Perth | Blake Smart Solutions",
  description:
    "See recent Wi-Fi access point, wireless bridge and home network installations completed by Blake Smart Solutions across Perth.",
  path: "/recent-installations/wifi",
  image: {
    url: "/images/work-photos/WiFi/recent-wifi-installations-card.webp",
    width: 1050,
    height: 1400,
    alt: "Daniel from Blake Smart Solutions completing a Wi-Fi installation",
  },
});

export default function RecentWifiInstallationsPage() {
  return <WorkShowcasePageTemplate content={recentWifiInstallationsContent} />;
}
