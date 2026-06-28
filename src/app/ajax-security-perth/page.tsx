import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { servicePageMetadataContent } from "@/content/solutions/pageMetadata";
import { alarmsSolutionContent } from "@/content/solutions/alarmSolutionsContent";
import { alarmsSolutionTrustItems } from "@/content/solutions/alarmSolutionsContent";
import { whyChooseUsAlarms } from "@/content/solutions/alarmSolutionsContent";
import { buildSeoMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildSeoMetadata({
  title: servicePageMetadataContent.ajaxSecurityPerth.title,
  description: servicePageMetadataContent.ajaxSecurityPerth.description,
  path: "/ajax-security-perth",
  image: {
    url: "/images/solutions/ajaxSecurity/ajax_hero.png",
    alt: "Ajax smart alarm system installed in Perth",
  },
});

export default function AjaxSecurityPerthPage() {
  return (
    <SolutionPageTemplate
      {...alarmsSolutionContent}
      currentPath="/ajax-security-perth"
      trustItems={alarmsSolutionTrustItems}
      content={whyChooseUsAlarms}
    />
  );
}
