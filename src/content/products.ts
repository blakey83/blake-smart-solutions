import type { Product } from "@/lib/types";

export const specials: Product[] = [
  {
    name: "WiFi Health Check",
    description:
      "An on-site review of coverage, speed, device placement, and common network issues, with practical advice on the best next step.",
    price: "$149",
    image: "/wifi-health-check.jpg",
    imageAlt: "Technician testing home Wi-Fi performance",
    badge: "Special Offer",
    features: [
      "Coverage and weak spot review",
      "Router and access point recommendations",
      "Straightforward next-step advice",
    ],
    ctaLabel: "Book a WiFi Check",
    href: "/#final-cta",
  },
  {
    name: "4 Camera Security Package",
    description:
      "A practical starter package for homes and small businesses wanting reliable entry-point and perimeter coverage.",
    price: "From $1,499",
    image: "/camera-package.jpg",
    imageAlt: "Installed 4 camera home security system",
    badge: "Popular",
    features: [
      "Four-camera system supply and install",
      "Recorder setup and mobile viewing",
      "Neat cable management and handover",
    ],
    ctaLabel: "Get a Quote",
    href: "/#final-cta",
  },
];
