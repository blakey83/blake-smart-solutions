import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { cctvSolutionContent } from "@/content/cctvSolutionContent";

export const metadata: Metadata = {
  title:
    "Securty Camera Solutions | Business and Home Security Camera Solutions",
  description:
    "Professional security camera solutions in Perth. Fix dead zones, dropouts and poor coverage with properly designed systems for homes, businesses, sheds and outdoor areas.",
};

export default function SecurityCamerasPerthPage() {
  return <SolutionPageTemplate {...cctvSolutionContent} />;
}
