import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { servicePageMetadataContent } from "@/content/pageMetadata";
import { alarmsSolutionContent } from "@/content/alarmSolutionsContent";
import { alarmsSolutionTrustItems } from "@/content/alarmSolutionsContent";
import { whyChooseUsHome } from "@/content/page-contents/whyUsContent";

export const metadata: Metadata = {
  title: servicePageMetadataContent.ajaxSecurityPerth.title,
  description: servicePageMetadataContent.ajaxSecurityPerth.description,
};

export default function AjaxSecurityPerthPage() {
  return (
    <SolutionPageTemplate
      {...alarmsSolutionContent}
      currentPath="/ajax-security-perth"
      trustItems={alarmsSolutionTrustItems}
      content={whyChooseUsHome}
    />
  );
}
