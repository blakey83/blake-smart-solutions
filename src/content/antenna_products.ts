import type { Product } from "@/lib/types";

export const antennasIntro = {
  title: "TV Antennas",
  intro:
    "Restore or improve free-to-air TV reception with practical antenna repairs, new outlets, and complete antenna replacements suited to Perth conditions.",
};

export const antennaProducts: Product[] = [
  {
    name: "TV Reception Repair",
    description:
      "Having issues with pixelation, dropouts, or missing channels? We’ll diagnose and fix your TV signal fast. Ideal for homes with poor reception, storm damage, or ageing antenna systems.",
    price: "$149 fixed price",
    image: "/images/antenna_repair.png",
    imageAlt: "Technician testing TV antenna signal on roof",
    badge: "Popular",
    features: [
      "Full signal test and fault diagnosis",
      "Fix common issues on the spot",
      "Check antenna, cabling and connections",
      "Clear advice if upgrades are needed",
    ],
    ctaLabel: "Book a Repair",
    href: "/#final-cta",
  },
  {
    name: "Additional TV Point",
    description:
      "Add a new TV outlet anywhere in your home for a clean, reliable connection. Perfect for bedrooms, living areas, or wall-mounted TVs without messy cables.",
    price: "$199 per point",
    image: "/images/tv_point_install.png",
    imageAlt: "Wall mounted TV with hidden data and antenna outlet",
    badge: "Best Value",
    features: [
      "New antenna outlet installed where you need it",
      "Neat wall plate and concealed cabling",
      "Strong, stable signal to your TV",
      "Ideal for wall-mounted TVs",
    ],
    ctaLabel: "Get a Quote",
    href: "/#final-cta",
  },
  {
    name: "New Antenna Installation",
    description:
      "Upgrade to a high-performance Hills Black Arrow antenna for crystal-clear reception across all free-to-air channels. Built to handle Perth conditions and deliver reliable signal for years.",
    price: "From $499",
    image: "/images/antenna_install.png",
    imageAlt: "New Hills antenna installed on residential roof",
    badge: "Premium",
    features: [
      "Hills Black Arrow antenna supplied and installed",
      "Optimised positioning for best signal strength",
      "All cabling and connections professionally fitted",
      "Fully tested for perfect reception",
    ],
    ctaLabel: "Get a Quote",
    href: "/#final-cta",
  },
];
