import type { Product } from "@/lib/types";

export const antennasIntro = {
  title: "TV Reception & Antenna Services",
  intro:
    "Pixelation, dropouts, or no signal? We diagnose and fix TV reception issues fast. The services below are common jobs and guide pricing — we’ll recommend the right solution for your home.",
};

export const antennaProducts: Product[] = [
  {
    name: "TV Reception Repair",
    description:
      "Having issues with pixelation, dropouts, or missing channels? We’ll diagnose and fix your TV signal fast. Ideal for homes with poor reception, storm damage, or ageing antenna systems.",
    price: "$149 fixed price",
    image: "/images/products/antenna/antenna_repair.png",
    imageAlt: "Technician testing TV antenna signal on roof",
    badge: "Popular",
    features: [
      "Full signal test and fault diagnosis",
      "Fix common issues on the spot",
      "Check antenna, cabling and connections",
      "Clear advice if upgrades are needed",
    ],
    ctaLabel: "Book a Repair",
    href: "/#final-cta",
  },
  {
    name: "Additional TV Point",
    description:
      "Add a new TV outlet anywhere in your home for a clean, reliable connection. Perfect for bedrooms, living areas, or wall-mounted TVs without messy cables.",
    price: "$199 per point",
    image: "/images/products/antenna/TV-Point-Installation-Image.webp",
    imageAlt: "Wall mounted TV with hidden data and antenna outlet",
    badge: "Best Value",
    features: [
      "New antenna outlet installed where you need it",
      "Neat wall plate and concealed cabling",
      "Strong, stable signal to your TV",
      "Ideal for wall-mounted TVs",
    ],
    ctaLabel: "Get a Quote",
    href: "/#final-cta",
  },
  {
    name: "New Antenna Installation",
    description:
      "Upgrade to a high-performance Hills Black Arrow antenna for crystal-clear reception across all free-to-air channels. Built to handle Perth conditions and deliver reliable signal for years.",
    price: "From $499",
    image: "/images/products/antenna/hills_blak_arrow.jpg",
    imageAlt: "New Hills antenna installed on residential roof",
    badge: "Premium",
    features: [
      "Hills Black Arrow antenna supplied and installed",
      "Optimised positioning for best signal strength",
      "All cabling and connections professionally fitted",
      "Fully tested for perfect reception",
    ],
    ctaLabel: "Get a Quote",
    href: "/#final-cta",
  },
];

export const whyChooseUsAntennas = {
  whySection: {
    eyebrow: "WHY BLAKE SMART SOLUTIONS",
    image: {
      src: "/images/me_and_charlotte.png",
      alt: "Daniel from Blake Smart Solutions with Charlotte",
    },
    title: "Reliable technology starts with experience",
    paragraph:
      "Blake Smart Solutions is built on more than 20 years of experience working with communications and technology systems across military, industrial and commercial environments. In those industries, systems are expected to perform reliably, planning matters, and attention to detail is essential. That same approach is applied to every installation, delivering practical solutions that are designed to work reliably in the real world.",
    bullets: [
      "Clear recommendations based on your needs, not sales targets.",
      "Clean, professional installations with attention to detail.",
      "Reliable systems designed for long-term performance.",
      "Local Perth support before, during and after installation.",
      "Straightforward communication and honest advice.",
      "One trusted provider for security, connectivity and smart technology.",
    ],
    reviewsHeading: "Recent customer feedback",
    reviews: [
      {
        name: "Alan Star",
        text: "Daniel did a great job installing my Starlink setup and helped me out to route another data cable while he was at it. Recommended, thank you.",
      },
      {
        name: "Lesley Middleton",
        text: "Came over at the appointed time and fixed my security camera system efficiently. Really went above and beyond.",
      },
      {
        name: "Juan B",
        text: "Fantastic service and can sleep at night knowing I have a full CCTV camera system installed at my house.",
      },
    ],
  },
};
