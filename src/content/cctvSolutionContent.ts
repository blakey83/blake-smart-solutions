import type { SolutionPageTemplateProps } from "@/components/solutions/types";
import { cctvProducts } from "@/content/cctv_products";

export const cctvSolutionContent: SolutionPageTemplateProps = {
  headline:
    "Keep your home safe and secure, night and day, with professional security camera installation in Perth",
  subHeadline:
    "Professional CCTV systems for Perth homes, businesses and commercial sites, designed around the way your property is actually used.",
  bulletPoints: [
    "Clear coverage around entry points, driveways, yards and key business areas",
    "Smarter camera placement to reduce blind spots and unusable footage",
    "Active deterrence, night vision and remote viewing options",
    "Clean installation with practical advice before hardware is chosen",
  ],
  heroEyebrow: "Professional CCTV solutions",
  heroImage: "/images/products/security/tioc_burgler.png",
  heroImageAlt: "Security camera installation by Blake Smart Solutions",

  heroSocialProof: {
    eyebrow: "Google review",
    ratingLabel: "Five star Google review",
    quote:
      "Fantastic service and can sleep at night knowing I have a full CCTV camera system installed at my house.",
    author: "Juan B",
  },

  primaryCta: {
    label: "Get a Security Camera Quote",
    action: "enquiry",
  },
  secondaryCta: {
    label: "Call 0477 948 079",
    action: "link",
    href: "tel:0477948079",
  },

  problemSolutionEyebrow: "Problem / Solution",
  problemSolutionTitle:
    "Why many security camera systems leave people with false confidence",
  problemSolutionIntro:
    "A good security camera system should help you feel more aware, more in control and more confident about what’s happening around your property. Poor placement, the wrong cameras and generic setups often leave blind spots, weak night footage and systems that only record incidents after they happen instead of helping deter them in the first place.",

  problemSolutionCards: [
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
      title: "Existing cameras that no longer perform properly",
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

  realInstallationsEyebrow: "Real installations",
  realInstallationsTitle:
    "Security camera installations for homes, businesses and higher-risk sites",
  realInstallationsIntro:
    "These are common CCTV system types we install across Perth. Final recommendations depend on the property layout, number of entry points, lighting conditions and the level of coverage or deterrence required.",

  products: cctvProducts,

  faqsEyebrow: "FAQ",
  faqsTitle: "Security camera installation Perth FAQs",
  faqsIntro:
    "Common questions about CCTV design, camera placement and smart security features.",
  faqs: [
    {
      question: "How many security cameras do I need?",
      answer:
        "That depends on the property layout, entry points, lighting and what you need to see clearly. We look at driveways, side access, doors, yards and key business areas before recommending a camera count.",
    },
    {
      question: "Can cameras actively deter intruders?",
      answer:
        "Yes. Some cameras can use lights, sirens and smart detection to warn people before they enter further into the property. This is useful when you want deterrence, not just recorded footage.",
    },
    {
      question: "Will the cameras work well at night?",
      answer:
        "Night performance depends on camera choice and placement. We can recommend options such as Dahua WizColor, WizSense and TiOC cameras where better low-light footage or active deterrence is important.",
    },
    {
      question: "Can you repair or upgrade an existing CCTV system?",
      answer:
        "Yes. If your existing system has poor footage, blind spots or unreliable remote viewing, we can fault find, reposition cameras or upgrade parts of the system where that makes sense.",
    },
  ],

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
  "Dahua Certified installers",
  "WA Police Licensed",
  "Fully Insured",
  "Perth-Based Professionals",
];
