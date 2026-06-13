export type WhyChooseUsContent = {
  whySection: {
    eyebrow: string;
    image: {
      src: string;
      alt: string;
    };
    title: string;
    paragraphs: string[];
    credibility: string;
    reviewsHeading: string;
    reviews: {
      name: string;
      text: string;
    }[];
  };
};
