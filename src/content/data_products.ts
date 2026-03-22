import type { Product } from "@/lib/types";

export const dataIntro = {
  title: "Data Cabling",
  intro:
    "Add reliable hard-wired connections for offices, TVs, gaming, Wi-Fi backhaul, and new builds with neat Cat6 cabling and tested performance.",
};

export const dataCablingProducts: Product[] = [
  {
    name: "NBN Smart Home – Essential",
    description:
      "A simple, professional setup to get your home connected properly. Ideal for new setups or fixing poor NBN layouts with reliable wired connections where it matters most.",
    price: "From $499",
    image: "/images/data_point_install.png",
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
    image: "/images/data_points_multi.png",
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
    image: "/images/data_cabling_full_home.png",
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
