import type { Product } from "@/lib/types";

export const cctvIntro = {
  title: "Security Camera Systems",
  intro:
    "Want to keep an eye on your home or business, even when you're not there? We install reliable CCTV systems with clear coverage, smart camera placement, and easy remote access from your phone. Whether you’re securing entry points, monitoring your property, or just want peace of mind, we design systems that actually cover what matters. The options below are common setups and guide pricing, with every system tailored to suit your layout and security needs.",
};

export const cctvProducts: Product[] = [
  {
    name: "Dahua 4 Camera Security Package",
    description:
      "A professionally installed Dahua security system for homes and small businesses wanting reliable day and night coverage, remote viewing, and room to expand later.",
    price: "From $1,999",
    image: "/dahua_4cam_kit1.png",
    imageAlt: "Dahua 4 camera CCTV security package with NVR",
    badge: "Essentials",
    features: [
      "4 x Dahua WizSense AI turret cameras",
      "8-channel NVR with 4TB hard drive",
      "Remote viewing setup on your phone",
      "Installed, configured, and ready to use",
    ],
    ctaLabel: "Get a Free Quote",
    href: "/#final-cta",
  },
  {
    name: "Dahua 6 Camera Security Package",
    description:
      "A complete security solution for larger homes, corner blocks, and properties needing stronger coverage across entry points, outdoor areas, and blind spots.",
    price: "From $2,499",
    image: "/images/DH6Cam8Ch.jpg",
    imageAlt: "Dahua 6 camera CCTV security package with NVR",
    badge: "Most Popular",
    features: [
      "6 x Dahua WizSense AI turret cameras",
      "8-channel NVR with 4TB hard drive",
      "Improved perimeter and driveway coverage",
      "Professionally installed and configured",
    ],
    ctaLabel: "Get a Free Quote",
    href: "/#final-cta",
  },
  {
    name: "Dahua 8 Camera Security Package",
    description:
      "A full coverage Dahua system designed for large homes, workshops, and small business sites requiring maximum visibility and complete perimeter security.",
    price: "From $2,999",
    image: "/images/8camDahuaColor4k8MP.png",
    imageAlt: "Dahua 8 camera CCTV security package with NVR",
    badge: "Full Coverage",
    features: [
      "8 x Dahua WizSense AI turret cameras",
      "8-channel NVR fully utilised with 4TB HDD",
      "Designed for full-site camera coverage",
      "Installed, tested, and ready to use",
    ],
    ctaLabel: "Get a Free Quote",
    href: "/#final-cta",
  },
];
