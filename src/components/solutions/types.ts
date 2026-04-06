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

export type SolutionPageTemplateProps = {
  title: string;
  intro: string;
  heroEyebrow?: string;
  heroImage?: string;
  heroImageAlt?: string;
  primaryCta: CtaButton;
  secondaryCta?: CtaButton;
  problemsEyebrow?: string;
  problemsTitle: string;
  problemsIntro?: string;
  problems: InfoCard[];
  brandBlock?: BrandBlock;
  productsEyebrow?: string;
  productsTitle: string;
  productsIntro?: string;
  productsFallbackIntro?: string;
  products: Product[];
  imageSectionEyebrow?: string;
  imageSection?: ImageTextSection;
  finalCtaEyebrow?: string;
  finalCtaTitle: string;
  finalCtaIntro: string;
  finalCtaButton: CtaButton;
};
