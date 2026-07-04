import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import { servicePageMetadataContent } from "@/content/solutions/pageMetadata";
import { alarmsSolutionContent } from "@/content/solutions/alarmSolutionsContent";
import { alarmsSolutionTrustItems } from "@/content/solutions/alarmSolutionsContent";
import { whyChooseUsAlarms } from "@/content/solutions/alarmSolutionsContent";
import {
  buildFaqPageNode,
  buildSchemaGraph,
  buildServiceNode,
} from "@/lib/jsonLd";
import { buildSeoMetadata } from "@/lib/seoMetadata";

const pagePath = "/ajax-security-perth";

export const metadata: Metadata = buildSeoMetadata({
  title: servicePageMetadataContent.ajaxSecurityPerth.title,
  description: servicePageMetadataContent.ajaxSecurityPerth.description,
  path: pagePath,
  image: {
    url: "/images/solutions/ajaxSecurity/ajax_hero.png",
    alt: "Ajax smart alarm system installed in Perth",
  },
});

const structuredData = buildSchemaGraph([
  buildServiceNode({
    name: "Ajax Security Perth",
    description: servicePageMetadataContent.ajaxSecurityPerth.description,
    path: pagePath,
    serviceType: "Ajax alarm installation",
    image: {
      url: "/images/solutions/ajaxSecurity/ajax_hero.png",
      alt: "Ajax smart alarm system installed in Perth",
    },
  }),
  buildFaqPageNode(pagePath, alarmsSolutionContent.faqs),
]);

export default function AjaxSecurityPerthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <SolutionPageTemplate
        {...alarmsSolutionContent}
        currentPath={pagePath}
        trustItems={alarmsSolutionTrustItems}
        content={whyChooseUsAlarms}
      />
    </>
  );
}
