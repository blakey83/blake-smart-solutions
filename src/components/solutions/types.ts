import type { Product } from "@/lib/types";

export type CtaButton = {
  label: string;
  action: "link" | "enquiry";
  href?: string;
};

export type InfoCard = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export type BrandBlock = {
  eyebrow?: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  points?: string[];
};

export type ImageTextSection = {
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
};

export type HeroSocialProof = {
  eyebrow: string;
  ratingLabel: string;
  quote: string;
  author: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SolutionPageTemplateProps = {
  currentPath?: string;
  headline: string;
  subHeadline: string;
  heroEyebrow?: string;
  heroImage?: string;
  heroImageAlt?: string;
  bulletPoints: string[];
  heroSocialProof: HeroSocialProof;
  primaryCta: CtaButton;
  secondaryCta?: CtaButton;
  problemSolutionEyebrow?: string;
  problemSolutionTitle: string;
  problemSolutionIntro?: string;
  problemSolutionCards: InfoCard[];
  realInstallationsEyebrow?: string;
  realInstallationsTitle: string;
  realInstallationsIntro?: string;
  realInstallationsFallbackIntro?: string;
  products: Product[];
  faqsEyebrow?: string;
  faqsTitle: string;
  faqsIntro?: string;
  faqs: FaqItem[];
  finalCtaEyebrow?: string;
  finalCtaTitle: string;
  finalCtaIntro: string;
  finalCtaButton: CtaButton;
};
