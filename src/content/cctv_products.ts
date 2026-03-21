import type { Product } from "@/lib/types";

export const cctvProducts: Product[] = [
  {
    name: "Dahua 4 Camera Security Package",
    description:
      "A professionally installed Dahua security system for homes and small businesses wanting reliable day and night coverage, remote viewing, and room to expand later.",
    price: "From $1,999",
    image: "/images/dahua_4cam_kit.png",
    imageAlt: "Dahua 4 camera CCTV security package with NVR",
    badge: "Security Essentials",
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
    image: "/images/dahua_6cam_kit.png",
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
    image: "/images/dahua_8cam_kit.png",
    imageAlt: "Dahua 8 camera CCTV security package with NVR",
    badge: "Maximum Coverage",
    features: [
      "8 x Dahua WizSense AI turret cameras",
      "8-channel NVR fully utilised",
      "Designed for full-site camera coverage",
      "Installed, tested, and ready to use",
    ],
    ctaLabel: "Get a Free Quote",
    href: "/#final-cta",
  },
];
