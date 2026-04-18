import type { Product } from "@/lib/types";

export const specials: Product[] = [
  {
    name: "WiFi Health Check",
    description:
      "A fixed-price on-site check to find weak coverage, poor placement, and common WiFi issues.",
    price: "$99 fixed price",
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
    name: "CCTV Call-Out & Repair",
    description:
      "Cameras not working? No recording, poor image or constant dropouts? Book a call-out and we’ll diagnose and fix it on-site — no guesswork.",
    price: "$159 Call Out",
    image: "/images/products/security/call_out2.jpg",
    imageAlt: "Technician repairing CCTV system",
    badge: "Most Popular",
    features: [
      "Same-day service where available",
      "On-site fault finding and diagnosis",
      "Fix recording, connection or image issues",
      "Repairs completed on the same visit where possible",
      "Clear advice if upgrades are needed",
    ],
    ctaLabel: "Book a Call-Out",
    href: "/#final-cta",
  },
];

export const problemPaths = [
  {
    title: "Wi-Fi drops out or doesn’t reach everywhere",
    description: "Dead zones, slow speeds or unreliable coverage.",
    href: "/wifi-solutions-perth",
    image: "/images/solutions/wifi/bedroom_wifi.webp",
  },
  {
    title: "Worried about security around your property",
    description:
      "Blind spots, poor visibility or uncertainty about what’s happening.",
    href: "/security-cameras-perth",
    image: "/images/solutions/cctv/crim.png",
  },
  {
    title: "Alarm system is frustrating or unreliable",
    description: "False alarms, clunky controls or a system you don’t trust.",
    href: "/ajax-security-perth",
    image: "/images/solutions/ajaxSecurity/old-keypad.jpg",
  },
  {
    title: "Starlink works inside, but not where you need it",
    description:
      "Weak coverage in outdoor areas, sheds or separate workspaces.",
    href: "/starlink",
    image: "/images/solutions/wifi/outdoor_solution.png",
  },
];

export const services = [
  {
    title: "CCTV & Security Cameras",
    description:
      "Camera systems for homes and small businesses, with clear coverage, remote viewing, and practical protection around entry points, driveways, and key areas.",
    icon: "/icons/service-cctv.svg",
    href: "/security-cameras-perth",
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
    href: "/ajax-security-perth",
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
  "WA Police Licensed (SA 84208)",
  "Fully Insured",
  "Perth-Based Professionals",
  "ABN 66 695 399 761",
];
