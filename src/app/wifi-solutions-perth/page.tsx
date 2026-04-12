import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { wifiSolutionContent } from "@/content/wifiSolutionContent";
import { wifiSolutionTrustItems } from "@/content/wifiSolutionContent";

export const metadata: Metadata = {
  title: "WiFi Solutions Perth | Home, Business & Outdoor WiFi Installation",
  description:
    "Professional WiFi solutions in Perth. Fix dead zones, dropouts and poor coverage with properly designed systems for homes, businesses, sheds and outdoor areas.",
};

export default function WifiSolutionsPerthPage() {
  return (
    <SolutionPageTemplate
      {...wifiSolutionContent}
      trustItems={wifiSolutionTrustItems}
    />
  );
}
