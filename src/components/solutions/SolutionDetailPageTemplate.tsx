import { Fragment } from "react";
import Link from "next/link";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";
import type { FeatureSection, SolutionPageTemplateProps } from "@/components/solutions/types";
import type { SolutionDetailPage, SolutionDetailText } from "@/content/solutions/solutionDetailTypes";
import { wifiSolutionContent, wifiSolutionTrustItems, whyChooseUsWiFi } from "@/content/solutions/wifiSolutionContent";
import { starlinkSolutionContent, starlinkSolutionTrustItems, whyChooseUsStarlink } from "@/content/solutions/starlink_product";

function inlineText(text: SolutionDetailText) {
  if (typeof text === "string") return text;
  return text.map((part, index) => typeof part === "string" ? (
    <Fragment key={index}>{part}</Fragment>
  ) : (
    <Link key={index} href={part.href} className="font-semibold text-[var(--color-accent)] underline decoration-[var(--color-accent)]/35 underline-offset-4 hover:text-[var(--color-accent-strong)]">
      {part.text}
    </Link>
  ));
}

function paragraphs(items: SolutionDetailText[]) {
  return items.map((item, index) => (
    <span key={index} className={index > 0 ? "mt-4 block" : "block"}>{inlineText(item)}</span>
  ));
}

// Keep the service-specific copy while sharing the main solution pages' entire layout.
export function SolutionDetailPageTemplate({ page, service = "wifi" }: {
  page: SolutionDetailPage;
  service?: "wifi" | "starlink";
}) {
  const isStarlink = service === "starlink";
  const base = isStarlink ? starlinkSolutionContent : wifiSolutionContent;
  const currentPath = `${isStarlink ? "/starlink-installation-perth" : "/wifi-solutions-perth"}/${page.slug}`;
  const primaryCta: SolutionPageTemplateProps["primaryCta"] = {
    ...base.primaryCta,
    enquiryProductName: page.enquiryName,
    enquiryDefaultMessage: isStarlink
      ? "I’d like a quote for Starlink installation at my business. My suburb, premises type and Starlink kit are: "
      : `I’d like a quote for ${page.enquiryName.toLowerCase()}. The area or connection I need help with is: `,
  };
  const gallery = page.installationGallery;
  const features: FeatureSection[] = [
    {
      eyebrow: "THE RIGHT SOLUTION FOR YOUR PROPERTY",
      title: page.solution.title,
      intro: paragraphs(page.solution.paragraphs),
      points: page.solution.points.map(inlineText),
      image: page.proof.image,
      imageAlt: page.proof.imageAlt,
    },
    ...(gallery?.images.map((item, index): FeatureSection => ({
      eyebrow: gallery.eyebrow,
      title: item.title,
      intro: paragraphs(index === 0 ? [gallery.intro, item.caption] : [item.caption]),
      points: [],
      image: item.image,
      imageAlt: item.imageAlt,
      imageFit: item.fit,
      imageAspect: gallery.layout === "portrait-pair" || item.fit === "top" ? "portrait" : "landscape",
    })) ?? []),
    {
      eyebrow: "REAL INSTALLATION",
      title: page.proof.title,
      intro: <>
        <span className="block">{page.proof.intro}</span>
        <strong className="mt-5 block text-[var(--color-ink)]">{page.whyProperly.title}</strong>
        {paragraphs(page.whyProperly.paragraphs)}
      </>,
      points: [page.proof.problem, page.proof.solution, page.proof.result],
      image: page.proof.image,
      imageAlt: page.proof.imageAlt,
    },
  ];

  return (
    <SolutionPageTemplate
      currentPath={currentPath}
      headline={page.h1}
      subHeadline={page.subhead}
      heroEyebrow={`${page.enquiryName.toUpperCase()} · PERTH`}
      heroBackgroundImage={page.heroImage}
      heroSocialProof={{
        eyebrow: "Google review",
        ratingLabel: base.heroSocialProof.ratingLabel,
        quote: page.review.quote,
        author: page.review.author,
      }}
      heroReviewStrip={base.heroReviewStrip}
      heroCtaLines={page.heroCtaLines}
      bulletPoints={page.bullets}
      primaryCta={primaryCta}
      secondaryCta={base.secondaryCta}
      recentWork={base.recentWork}
      featureSections={page.showInstallationSections === false ? features.slice(0, 1) : features}
      problemSolutionEyebrow="WHERE WE CAN HELP"
      problemSolutionTitle={page.problem.title}
      problemSolutionIntro={page.problem.paragraphs.join(" ")}
      problemSolutionCards={page.useCases.map((item) => ({
        title: item.title,
        problem: "",
        solution: inlineText(item.description),
      }))}
      approachSteps={base.approachSteps}
      faqsEyebrow={base.faqsEyebrow}
      faqsTitle={`${page.enquiryName} FAQs`}
      faqsIntro={`Common questions about ${page.enquiryName.toLowerCase()} in Perth.`}
      faqs={page.faqs}
      finalCtaEyebrow={base.finalCtaEyebrow}
      finalCtaTitle={page.finalTitle}
      finalCtaIntro={page.heroCtaLines.join(" ")}
      finalCtaButton={primaryCta}
      timedAvailabilityPopup={base.timedAvailabilityPopup ? {
        ...base.timedAvailabilityPopup,
        productName: page.enquiryName,
      } : undefined}
      trustItems={isStarlink ? starlinkSolutionTrustItems : wifiSolutionTrustItems}
      content={isStarlink ? whyChooseUsStarlink : whyChooseUsWiFi}
    />
  );
}
