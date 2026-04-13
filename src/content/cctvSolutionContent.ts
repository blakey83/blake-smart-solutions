import type { SolutionPageTemplateProps } from "@/components/solutions/types";
import { cctvProducts } from "@/content/cctv_products";

export const cctvSolutionContent: SolutionPageTemplateProps = {
  title:
    "Security camera installation Perth — smart CCTV systems for homes and businesses",
  intro:
    "Blake Smart Solutions installs smart security camera systems for homes, businesses, workshops and commercial properties across Perth and the surrounding suburbs. Whether you want better visibility around your property, clearer evidence when something happens, or a system that actively helps deter intruders, we design CCTV solutions that are practical, reliable and built around the site.",

  heroEyebrow: "Professional CCTV solutions",
  heroImage: "/images/solutions/cctv/hero.png",
  heroImageAlt: "Security camera installation by Blake Smart Solutions",

  primaryCta: {
    label: "Book a CCTV Quote",
    action: "enquiry",
  },
  secondaryCta: {
    label: "Call now for a quote",
    action: "link",
    href: "tel:0477948079",
  },

  problemsEyebrow: "Common issues",
  problemsTitle:
    "Why most security camera systems fail to protect the property",
  problemsIntro:
    "Most security camera systems don’t fail because of the hardware — they fail because they’re not designed properly for the site. Poor placement, the wrong cameras and generic setups can leave blind spots, unreliable footage and systems that don’t actually improve security.",

  problems: [
    {
      title: "Worried about break-ins or suspicious activity",
      description:
        "Whether it’s a recent incident nearby or just a general concern, not knowing what’s happening around your property can be stressful. A properly designed camera system gives you visibility, awareness and peace of mind that the property is covered properly — not just after something happens, but day to day.",
      image: "/images/solutions/cctv/crim.png",
      imageAlt: "Security concern around home or business",
    },
    {
      title: "Poor footage - Especially at night",
      description:
        "Most incidents happen at night, but many systems struggle in low light. Cheap or poorly selected cameras often produce blurry or unusable footage, making it difficult to identify people when it actually counts.",
      image: "/images/solutions/cctv/poor-cctv.jpeg",
      imageAlt: "Poor CCTV footage at night",
    },
    {
      title: "Cameras that record — but don't deter",
      description:
        "Traditional systems only capture footage after the fact. Smarter cameras can actively help protect your property with alerts, lighting and deterrence features that make intruders think twice before entering.",
      image: "/images/solutions/cctv/ignore_cctv.jpg",
      imageAlt: "Active deterrence security camera",
    },
    {
      title: "Existing cameras not working or poorly installed",
      description:
        "Many properties already have cameras installed, but they may be unreliable, badly positioned or no longer fit for purpose. Fault finding, upgrades and system redesign can often improve performance without starting from scratch.",
      image: "/images/solutions/cctv/poorly_placed_cctv.jpg",
      imageAlt: "CCTV repair and upgrade",
    },
    {
      title: "Security gaps in businesses and commercial sites",
      description:
        "Workshops, retail spaces and commercial properties often targeted by criminals. Blind spots, poor monitoring and outdated systems can leave stock, equipment and staff exposed without a clear view of what’s happening across the site.",
      image: "/images/solutions/cctv/shop_cctv.jpg",
      imageAlt: "Commercial CCTV security system",
    },
    {
      title: "Off-the-shelf systems that don’t suit the property",
      description:
        "Every property is different. A small home, corner block or large commercial site all require different camera placement and coverage. Generic kits often miss key areas or overcomplicate others.",
      image: "/images/solutions/cctv/home_job_cctv.jpeg",
      imageAlt: "Site specific CCTV planning",
    },
  ],

  brandBlock: {
    eyebrow: "Smarter CCTV systems Perth",
    title:
      "Built around practical protection, with Dahua smart camera technology",
    intro:
      "Blake Smart Solutions has partnered with Dahua, using proven camera systems designed for real-world security. Rather than generic CCTV kits, Dahua platforms offer smarter detection, better image quality and features that actively help protect your property — not just record it.",
    image: "/images/solutions/cctv/dahua.png",
    imageAlt: "Dahua CCTV systems",
    points: [
      "Dahua DHCA-IPVSS certified installers",
      "WizSense smart detection to reduce false alerts and improve detection accuracy",
      "WizColor low-light technology for clear full-colour footage at night",
      "TiOC active deterrence cameras with lights, sirens and warnings",
      "Reliable remote viewing and monitoring from your phone",
      "Commercial-grade systems designed to protect your property — not off-the-shelf kits",
    ],
  },

  productsEyebrow: "Popular options",
  productsTitle:
    "Security camera solutions in Perth for homes, businesses and higher-risk sites",
  productsIntro:
    "These are some of the most common CCTV system types we install. Final recommendations depend on the property layout, number of entry points, lighting conditions and the level of coverage or deterrence required.",

  products: cctvProducts,

  imageSectionEyebrow: "Installed properly",
  imageSection: {
    title:
      "CCTV installation in Perth — planned properly for coverage, visibility and reliability",

    intro:
      "Every property is different, and a camera system only works if it’s planned properly. Blake Smart Solutions looks at access points, likely approach paths, lighting conditions and the areas that actually matter, then designs a setup that makes sense for the property. The result is better coverage, more useful footage and a system that actually improves security — not just records it.",
    image: "/Blake_shop_front.jpeg",
    imageAlt: "Professional CCTV installation in Perth",
  },

  finalCtaEyebrow: "Talk to Blake Smart Solutions",
  finalCtaTitle:
    "Need security cameras in Perth? Let’s design a system that actually protects the property",
  finalCtaIntro:
    "Whether you need a simple home camera setup, better coverage around a business, or a smarter CCTV system with active deterrence, Blake Smart Solutions can help you work out the right solution for the site.",
  finalCtaButton: {
    label: "Send an Enquiry",
    action: "enquiry",
  },
};

export const cctvSolutionTrustItems = [
  "Local WA-Based Service",
  "WA Police Licensed & Fully Insurance",
  "Dahua Certified",
  "Designed for Real World Performance",
];
