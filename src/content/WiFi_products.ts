import type { Product } from "@/lib/types";

export const wifiDataIntro = {
  title: "Wi-Fi & Wireless Solutions",
  intro:
    "Fix weak coverage, dead spots, and unstable connections with practical Wi-Fi upgrades designed around how your property is actually used day to day.",
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
    image: "/images/deco_x55_2pack.png",
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
    image: "/images/deco_x55_3pack.png",
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
    name: "Shed & Outdoor WiFi Link",
    description:
      "Connect your shed, workshop, or granny flat with a reliable wireless bridge and dedicated access point for fast and stable internet beyond the main house.",
    price: "From $999",
    image: "/images/wireless_bridge_kit.png",
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
  {
    name: "Large Area Outdoor WiFi",
    description:
      "Designed for large backyards, rural blocks, or wide outdoor areas requiring extended coverage and stronger performance over longer distances.",
    price: "From $799",
    image: "/images/outdoor_ap_pro.png",
    imageAlt: "High power outdoor WiFi access point for large areas",
    badge: "High Performance",
    features: [
      "High-performance outdoor access point",
      "Extended range for large properties",
      "Handles multiple users and devices outdoors",
      "Installed and tuned for optimal coverage",
    ],
    ctaLabel: "Upgrade your property",
    href: "/#final-cta",
  },
];
