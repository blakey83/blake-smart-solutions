export type Product = {
  name: string;
  description: string;
  price?: string;
  image?: string;
  imageAlt?: string;
  badge?: string;
  features: string[];
  ctaLabel?: string;
  href?: string;
};

export type WhyChooseUsContent = {
  whySection: {
    eyebrow: string;
    image: {
      src: string;
      alt: string;
    };
    title: string;
    paragraph: string;
    bullets: string[];
    reviewsHeading: string;
    reviews: {
      name: string;
      text: string;
    }[];
  };
};

export type CompletedJob = {
  title: string;
  location: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

export type WorkShowcaseContent = {
  eyebrow?: string;
  title: string;
  description: string;
  completedJobs: CompletedJob[];
};
