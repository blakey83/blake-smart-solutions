import type { Product } from "@/lib/types";

export const wifiProducts: Product[] = [
  {
    name: "WiFi Health Check",
    description:
      "Not sure why your WiFi is bad? This on-site check finds the real issue so you don’t waste money on the wrong gear.",
    price: "$99 fixed price",
    image: "/images/wifi_survey.png",
    imageAlt: "Wi-Fi survey heatmap across a home or office floor plan",
    badge: "Start Here",
    features: [
      "On-site testing and coverage review",
      "Identify weak spots and interference",
      "Full report with heat map, and clear explaination",
      "Practical recommendations to fix problem areas",
      "$99 credited towards any solution we install",
    ],
    ctaLabel: "Book a WiFi Check",
    href: "/#final-cta",
  },
  {
    name: "Managed WiFi System",
    description:
      "A properly designed WiFi setup using dedicated access points, not just a router struggling to cover everything.",
    image: "/images/managed_wifi.png",
    imageAlt: "Installed WiFi access point system providing full coverage",
    badge: "Recommended",
    features: [
      "Coverage designed for your layout",
      "Multiple access points where needed",
      "Stable performance across the property",
      "Installed and configured properly",
    ],
    ctaLabel: "Fix My WiFi",
    href: "/#final-cta",
  },
  {
    name: "Commercial WiFi System",
    description:
      "WiFi that can actually handle staff, customers and devices without slowing down or dropping out.",
    price: "Custom Quote",
    image: "/images/commercial_wifi.png",
    imageAlt: "Ruijie business wireless access point",
    badge: "Commercial",
    features: [
      "Built for offices, retail and workshops",
      "Handles higher device loads properly",
      "Option for cloud-managed systems",
      "Designed to scale as you grow",
    ],
    ctaLabel: "Discuss Your Setup",
    href: "/#final-cta",
  },
  {
    name: "Building-to-Building WiFi Link",
    description:
      "Get fast, reliable internet to your shed, workshop or granny flat without trenching cables.",
    image: "/images/wifi_to_shed.png",
    imageAlt: "Wireless bridge connecting a house to a shed or workshop",
    badge: "Specialist",
    features: [
      "Wireless bridge between buildings",
      "Stable high-speed connection",
      "Dedicated WiFi in the remote space",
      "Installed and aligned for reliability",
    ],
    ctaLabel: "Connect My Shed",
    href: "/#final-cta",
  },
  {
    name: "Outdoor WiFi Coverage",
    description:
      "Reliable WiFi outside where you actually use it, not just whatever signal leaks through the walls.",
    image: "/images/outdoor_ap.png",
    imageAlt: "Outdoor WiFi access point mounted externally",
    badge: "Outdoor",
    features: [
      "Commercial-grade outdoor access points",
      "Designed coverage for large properties and rural sites",
      "Capable of covering extremely large areas (up to ~30 acres line of site)",
      "Far stronger than standard home WiFi setups",
      "Installed in the correct position for real coverage",
    ],
    ctaLabel: "Improve Outdoor WiFi",
    href: "/#final-cta",
  },
];
