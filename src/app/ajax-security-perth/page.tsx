import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { alarmsSolutionContent } from "@/content/alarmSolutionsContent";
import { alarmsSolutionTrustItems } from "@/content/alarmSolutionsContent";

export const metadata: Metadata = {
  title:
    "Ajax Alarm Installation Perth | Smart Home & Business Security Systems",
  description:
    "Professional Ajax alarm installation in Perth for homes and businesses. Smart intrusion detection, instant alerts, photo verification and clean wireless security systems designed properly.",
};

export default function WifiSolutionsPerthPage() {
  return (
    <SolutionPageTemplate
      {...alarmsSolutionContent}
      trustItems={alarmsSolutionTrustItems}
    />
  );
}
