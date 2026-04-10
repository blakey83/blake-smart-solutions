import type { Product } from "@/lib/types";

export const cctvProducts: Product[] = [
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
  {
    name: "Smart Detection Cameras (WizSense)",
    description:
      "Reduce constant false alerts and get notifications that actually matter. Smart detection systems can identify people and vehicles, helping you focus on real activity instead of noise.",
    image: "/images/products/security/wizsense.png",
    imageAlt: "Smart detection CCTV camera",
    badge: "Smart Detection",
    features: [
      "Human and vehicle detection",
      "Fewer false alerts from movement or weather",
      "More useful mobile notifications",
      "Better day-to-day awareness of your property",
    ],
    ctaLabel: "Get a Quote",
    href: "/#final-cta",
  },
  {
    name: "Full-Colour Night Cameras (WizColor)",
    description:
      "See clear, full-colour footage even in low light. These cameras are designed for better visibility at night, helping with identification when most incidents occur.",
    image: "/images/products/security/wizcolor.png",
    imageAlt: "Full colour night CCTV footage",
    badge: "Night Performance",
    features: [
      "Full-colour footage at night",
      "Improved detail for identification",
      "Better performance in low-light areas",
      "Ideal for driveways, yards and entry points",
    ],
    ctaLabel: "Get a Quote",
    href: "/#final-cta",
  },
  {
    name: "Active Deterrence Cameras (TiOC)",
    description:
      "More than just recording — these cameras actively help protect your property. Built-in lights and warnings can trigger when someone approaches, helping deter unwanted activity before it escalates.",
    image: "/images/products/security/tioc.png",
    imageAlt: "Active deterrence security camera with lights",
    badge: "Active Protection",
    features: [
      "Built-in lights and warning alerts",
      "Designed to deter intruders before entry",
      "Strong perimeter awareness",
      "Ideal for higher-risk areas and properties",
    ],
    ctaLabel: "Get a Quote",
    href: "/#final-cta",
  },
];
