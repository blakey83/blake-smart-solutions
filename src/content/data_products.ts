import type { Product } from "@/lib/types";

export const dataIntro = {
  title: "NBN Smart Home",
  intro:
    "Sick of slow Wi-Fi, dropouts, or devices that never get a solid connection? The best networks start with proper cabling. We install neat, professional Cat6 data points to give your home fast, reliable connections for TVs, offices, gaming, and Wi-Fi systems. Whether you're fixing a poor NBN setup or wiring a home properly from the start, we design each job to suit how you actually use your space. The options below are common setups and guide pricing, with every install tailored to your home.",
};

export const dataCablingProducts: Product[] = [
  {
    name: "NBN Smart Home – Essential",
    description:
      "A simple, professional setup to get your home connected properly. Ideal for new setups or fixing poor NBN layouts with reliable wired connections where it matters most.",
    price: "From $499",
    image: "/images/BSS_logo.png",
    imageAlt: "Technician installing data wall outlet in home",
    badge: "Starter",
    features: [
      "2 x Cat6 data points installed",
      "Ideal for router, TV or home office",
      "Neat wall plates and professional finish",
      "Fully tested for reliable performance",
    ],
    ctaLabel: "Get a Quote",
    href: "/#final-cta",
  },
  {
    name: "NBN Smart Home – Family",
    description:
      "Perfect for modern homes needing multiple wired connections for streaming, gaming, and working from home. Eliminates reliance on weak WiFi in key areas.",
    price: "From $799",
    image: "/images/BSS_logo.png",
    imageAlt: "Multiple data outlets installed in modern home",
    badge: "Most Popular",
    features: [
      "4 x Cat6 data points installed",
      "Great for TVs, offices and gaming setups",
      "Improves speed and reliability across the home",
      "Clean, professional cable routing and termination",
    ],
    ctaLabel: "Get a Quote",
    href: "/#final-cta",
  },
  {
    name: "NBN Smart Home – Ready Home",
    description:
      "A complete home cabling solution designed to future-proof your property. Ideal for larger homes or those planning WiFi upgrades, CCTV, or smart home systems.",
    price: "From $1,199",
    image: "/images/BSS_logo.png",
    imageAlt: "Structured data cabling setup inside home",
    badge: "Best Value",
    features: [
      "6 x Cat6 data points installed",
      "Whole-home wired backbone",
      "Ready for mesh WiFi, CCTV and smart devices",
      "Installed, labelled and fully tested",
    ],
    ctaLabel: "Get a Quote",
    href: "/#final-cta",
  },
];
