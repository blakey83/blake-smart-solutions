import type { Product } from "@/lib/types";

export const alarmIntro = {
  title: "Alarm & Access Control",
  intro:
    "Protect your home or business with a reliable alarm system that’s simple to use and built to actually deter intruders. We install professional systems with smart sensor placement, loud deterrents, and easy control from your phone or keypad. Whether you want basic internal protection or a more complete setup with entry monitoring and access control, every system is tailored to suit your property. The options below are common setups and guide pricing.",
};

export const securityProducts: Product[] = [
  {
    name: "Essential Security Package",
    description:
      "A professionally installed Bosch alarm system providing reliable internal protection and a strong audible deterrent. Ideal for smaller homes or those wanting a simple, no-fuss security solution.",
    price: "From $1,459",
    image: "/images/products/alarms/alarm_essential.png",
    imageAlt:
      "Bosch alarm system with keypad and motion sensors installed in a home",
    badge: "Entry Level",
    features: [
      "Bosch 6000 hardwired alarm system",
      "3 x motion sensors (PIRs)",
      "Internal siren and external strobe",
      "Installed, configured, and ready to use",
    ],
    ctaLabel: "Get a Free Quote",
    href: "/#final-cta",
  },
  {
    name: "Smart Security Package",
    description:
      "Adds smart control and remote access to your alarm system. Arm, disarm, and monitor your home from anywhere, with a professionally installed system built for reliability and convenience.",
    price: "From $1,849",
    image: "/images/products/alarms/alarm_smart.png",
    imageAlt: "Smart alarm system with mobile app control",
    badge: "Most Popular",
    features: [
      "Everything in Essential Security Package",
      "App control and remote access",
      "Real-time alerts and notifications",
      "Full setup and customer handover",
    ],
    ctaLabel: "Get a Free Quote",
    href: "/#final-cta",
  },
  {
    name: "Complete Home Protection",
    description:
      "A more comprehensive system with expanded internal coverage and entry-point protection. Designed for larger homes or customers wanting maximum peace of mind with full smart control.",
    price: "From $2,199",
    image: "/images/products/alarms/alarm_complete.png",
    imageAlt:
      "Complete home alarm system with multiple sensors and app control",
    badge: "Premium",
    features: [
      "Everything in Smart Security Package",
      "5 x motion sensors for wider coverage",
      "3 x door/window sensors",
      "Full system setup, testing, and optimisation",
    ],
    ctaLabel: "Get a Free Quote",
    href: "/#final-cta",
  },
];
