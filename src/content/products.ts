import type { Product } from "@/lib/types";

export const specials: Product[] = [
  {
    name: "WiFi Health Check",
    description:
      "A fixed-price on-site check to find weak coverage, poor placement, and common WiFi issues.",
    price: "$149 fixed price",
    image: "/images/products/wifi/wifi_survey.png",
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
    name: "Dahua 4 Camera Security Package",
    description:
      "A professionally installed Dahua security system for homes and small businesses wanting reliable day and night coverage, remote viewing, and room to expand later.",
    price: "From $1,999",
    image: "/dahua_4cam_kit1.png",
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
];
export const services = [
  {
    title: "CCTV & Security Cameras",
    description:
      "Camera systems for homes and small businesses, with clear coverage, remote viewing, and practical protection around entry points, driveways, and key areas.",
    icon: "/icons/service-cctv.svg",
    href: "/cctv",
  },
  {
    title: "Wi-Fi & Wireless Solutions",
    description:
      "Fix weak coverage, dropouts, and slow connections with better Wi-Fi design, mesh systems, outdoor access points, and wireless links to sheds or outbuildings.",
    icon: "/icons/service-wifi.svg",
    href: "/wifi-solutions-perth",
  },
  {
    title: "Alarm & Access Control",
    description:
      "Straightforward alarm and access solutions designed to improve security without making the system hard to use day to day.",
    icon: "/icons/icon-alarms-access-control.svg",
    href: "/alarms",
  },
  {
    title: "Starlink Installation",
    description:
      "Professional Starlink mounting and setup, with practical placement and cable routing to help get the best performance from your service.",
    icon: "/icons/service-starlink.svg",
    href: "/starlink",
  },
  {
    title: "Data Cabling",
    description:
      "Neat, professional cabling for new data points, network upgrades, and hard-wired connections where Wi-Fi alone is not the best solution.",
    icon: "/icons/icon-data-cabling.svg",
    href: "/data-cabling",
  },
  {
    title: "TV Antennas",
    description:
      "Antenna installation, fault finding, and reception improvements for homes that still want reliable free-to-air TV where streaming is not always ideal.",
    icon: "/icons/service-antennas.svg",
    href: "/antennas",
  },
];

export const heroContent = {
  largeText:
    "CCTV, Wi-Fi, Starlink and data solutions for Perth homes and small businesses",
  smallText:
    "Blake Smart Solutions installs and repairs practical technology, with clear advice, tidy workmanship, and systems that work properly day to day.",
};

export const trustItems = [
  "Perth-based local service",
  "Fully insured & qualified",
  "ABN 66 695 399 761",
  "SA 84208",
];
