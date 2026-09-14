export type SolutionDetailText =
  | string
  | (string | { text: string; href: `/${string}` })[];

export type SolutionDetailPage = {
  slug: string;
  metadata: { title: string; description: string };
  h1: string;
  subhead: string;
  bullets: string[];
  heroCtaLines: string[];
  enquiryName: string;
  heroImage: string;
  heroImageAlt: string;
  review: { quote: string; author: string };
  problem: { title: string; paragraphs: string[] };
  solution: {
    title: string;
    paragraphs: SolutionDetailText[];
    points: SolutionDetailText[];
  };
  showInstallationSections?: boolean;
  installationGallery?: {
    layout?: "portrait-pair";
    eyebrow: string;
    title: string;
    intro: string;
    images: {
      image: string;
      imageAlt: string;
      title: string;
      caption: string;
      fit?: "cover" | "top";
    }[];
  };
  useCases: { title: string; description: SolutionDetailText }[];
  whyProperly: { title: string; paragraphs: string[] };
  proof: {
    image: string;
    imageAlt: string;
    title: string;
    intro: string;
    problem: string;
    solution: string;
    result: string;
  };
  faqs: { question: string; answer: string }[];
  finalTitle: string;
};
