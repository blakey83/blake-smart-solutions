import type { Product } from "@/lib/types";

export const alarmIntro = {
  title: "Ajax Smart Alarm Systems",
  intro:
    "Protect your home or business with a professionally installed Ajax alarm system designed around how you actually use the property. From everyday intrusion protection and instant alerts to photo verification and smart safety devices, every system is tailored to suit your layout, routines and level of security required.",
};

export const securityProducts: Product[] = [
  {
    name: "Smart Home Alarm Systems",
    description:
      "Professionally installed Ajax alarm systems designed to protect key entry points and internal areas of your home. Ideal for practical everyday security with instant alerts and simple app control.",
    image: "/images/products/alarms/smart_security.jpg",
    imageAlt: "Ajax smart alarm system installed in a modern home",
    badge: "Most Popular",
    features: [
      "Smart intrusion detection",
      "Door and window protection",
      "Internal motion detection",
      "Instant phone alerts",
      "Clean wireless installation",
    ],
    ctaLabel: "Book an Alarm Quote",
    href: "/#final-cta",
  },
  {
    name: "Photo Verification Alarm Systems",
    description:
      "Ajax MotionCam systems can send photo verification alerts when an alarm is triggered, helping you quickly understand what’s happening and reducing false alarm stress.",
    image: "/images/products/alarms/MotionCam-Promo.gif",
    imageAlt: "Ajax MotionCam alarm system with photo verification alerts",
    badge: "Smart Detection",
    features: [
      "Photo verification alerts",
      "Faster incident awareness",
      "Reduced false alarm uncertainty",
      "Ideal for higher-risk areas",
      "Greater confidence when away",
    ],
    ctaLabel: "Book an Alarm Quote",
    href: "/#final-cta",
  },
  {
    name: "Small Business Alarm Protection",
    description:
      "Ajax alarm systems designed for offices, workshops, retail spaces and commercial properties needing reliable after-hours protection and flexible user access.",
    image: "/images/products/alarms/smb.png",
    imageAlt: "Ajax alarm system installed in a commercial property",
    badge: "Commercial",
    features: [
      "Entry point and internal area protection",
      "Instant alerts and remote control",
      "Multiple user permissions",
      "Flexible site access options",
      "Scalable for growing businesses",
    ],
    ctaLabel: "Book an Alarm Quote",
    href: "/#final-cta",
  },
];
