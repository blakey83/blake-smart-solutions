import type { Product } from "@/lib/types";

export const wifiDataIntro = {
  title: "Wi-Fi & Wireless Solutions",
  intro:
    "Slow speeds, dropouts, or Wi-Fi that doesn’t reach where you need it? Reliable Wi-Fi isn’t about guesswork — it comes down to proper testing, smart design, and the right equipment installed in the right locations. We assess your network, identify the root cause of issues, and deliver a tailored solution, whether that’s improving coverage inside, extending Wi-Fi outdoors, or linking separate buildings like sheds or offices. The services below are typical solutions and guide pricing, with every system designed to suit your property and how you actually use it.",
};

export const wifiProducts: Product[] = [
  {
    name: "WiFi Health Check",
    description:
      "A fixed-price on-site check to find weak coverage, poor placement, and common WiFi issues.",
    price: "$149 fixed price",
    image: "/images/wifi_survey.png",
    imageAlt: "Wi-Fi survey heatmap across a home floor plan",
    badge: "Popular",
    features: [
      "Professional Report with heatmaps and findings",
      "Coverage and weak spot review",
      "Router and access point recommendations",
      "Straightforward next-step advice",
    ],
    ctaLabel: "Book a WiFi Check",
    href: "/#final-cta",
  },
  {
    name: "WiFi Boost (Mesh Upgrade)",
    description:
      "Ideal for homes with weak signal areas, this system adds additional coverage to eliminate dropouts and improve performance where you need it most.",
    price: "From $449",
    image: "/images/328143_large_15016431-8027-4ea9-9c08-08fd4f7e863b.webp",
    imageAlt: "TP-Link Deco X55 mesh WiFi system",
    badge: "Most Popular",
    features: [
      "2 x TP-Link Deco X55 mesh units",
      "Seamless roaming throughout your home",
      "Eliminates dead zones and weak spots",
      "Installed and optimised for your layout",
    ],
    ctaLabel: "Ask About a boost",
    href: "/#final-cta",
  },
  {
    name: "Whole Home WiFi Coverage",
    description:
      "A complete mesh WiFi solution designed to provide consistent coverage across your entire home, ideal for larger properties or multiple living areas.",
    price: "From $649",
    image: "/images/tplink-deco-x55-pro-stack-side.avif",
    imageAlt: "TP-Link Deco X55 3 pack mesh WiFi system",
    badge: "Full Coverage",
    features: [
      "3 x TP-Link Deco X55 mesh units",
      "Strong, consistent coverage across the home",
      "Supports multiple users and devices",
      "Professionally installed and configured",
    ],
    ctaLabel: "Upgrade your WiFi",
    href: "/#final-cta",
  },
  {
    name: "Shed or Granny flat WiFi Link",
    description:
      "Connect your shed, workshop, or granny flat with a reliable wireless bridge and dedicated access point for fast and stable internet beyond the main house.",
    price: "From $999",
    image: "/images/wifi_to_shed.png",
    imageAlt: "Wireless bridge and access point setup for shed WiFi",
    badge: "Extended Coverage",
    features: [
      "Point-to-point wireless bridge (up to 1km)",
      "Dedicated access point for the remote area",
      "Stable connection between buildings",
      "Fully installed and aligned for reliability",
    ],
    ctaLabel: "Ask Us How",
    href: "/#final-cta",
  },
  {
    name: "Outdoor WiFi Coverage",
    description:
      "Extend your WiFi into outdoor areas such as patios, pools, and entertaining spaces with a weatherproof access point designed for reliable performance.",
    price: "From $599",
    image: "/images/outdoor_ap.png",
    imageAlt: "Outdoor WiFi access point mounted externally",
    badge: "Outdoor Ready",
    features: [
      "Weatherproof outdoor access point (IP rated)",
      "Coverage for patios, yards, and alfresco areas",
      "Strong signal in open outdoor spaces",
      "Professionally installed and configured",
    ],
    ctaLabel: "Message Now",
    href: "/#final-cta",
  },
];
