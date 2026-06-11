import type { SolutionPageTemplateProps } from "@/components/solutions/types";
import { wifiProducts } from "@/content/WiFi_products";

export const wifiSolutionContent: SolutionPageTemplateProps = {
  headline:
    "WiFi solutions Perth — reliable coverage for homes, businesses & large properties",
  subHeadline:
    "Reliable Wi-Fi systems for homes, workshops, businesses and large properties across Perth and surrounding suburbs.",
  bulletPoints: [
    "Fix dead zones, dropouts and weak coverage in the rooms you actually use",
    "Mesh, access point, outdoor Wi-Fi and shed link options",
    "Wi-Fi testing to find the real cause before buying hardware",
    "Home and business-grade systems designed for stable day-to-day use",
  ],

  heroEyebrow: "Professional Wi-Fi solutions",
  heroImage: "/images/solutions/wifi/WiFi_hero.png",
  heroImageAlt: "Blake Smart Solutions WiFi",

  heroSocialProof: {
    eyebrow: "Google review",
    ratingLabel: "Five star Google review",
    quote:
      "Daniel did a great job installing my Starlink setup and helped me out to route another data cable while he was at it. Recommended, thank you.",
    author: "Alan Star",
  },

  primaryCta: {
    label: "Book a WiFi Health Check",
    action: "enquiry",
  },
  secondaryCta: {
    label: "Call now for a quote",
    action: "link",
    href: "tel:0477948079",
  },

  problemSolutionEyebrow: "Problem / Solution",
  problemSolutionTitle:
    "Most WiFi problems aren’t your internet connection - they’re coverage issues",
  problemSolutionIntro:
    "If your WiFi drops out, struggles in certain rooms, or doesn’t reach outside, the issue usually isn’t your provider. It’s poor placement, the wrong equipment, or a network that was never designed properly in the first place. That’s where a properly designed WiFi system makes the difference.",

  problemSolutionCards: [
    {
      title: "Dead zones indoors",
      description:
        "Weak signal in bedrooms, back rooms, upstairs areas or home offices can make streaming, work and general day-to-day use frustrating.",
      image: "/images/solutions/wifi/bedroom_wifi.webp",
      imageAlt: "Bedroom wifi",
    },
    {
      title: "Dropouts in busy environments",
      description:
        "Retail, office and workshop environments can struggle when too many devices are competing on a network that was never designed for business use.",
      image: "/images/solutions/wifi/busy_office.png",
      imageAlt: "Busy Office",
    },
    {
      title: "Poor outdoor coverage",
      description:
        "Patios, yards, entertaining areas and external workspaces often fall outside the usable range of a standard indoor router.",
      image: "/images/solutions/wifi/outdoor_solution.png",
      imageAlt: "Outdoor Solution",
    },
    {
      title: "Shed, granny flat or workshop not connected",
      description:
        "Separate buildings often need more than a mesh add-on. A properly aligned wireless bridge and dedicated access point can deliver far better performance and reliability.",
      image: "/images/solutions/wifi/shed_wifi_solution.png",
      imageAlt: "Shed Wifi Solution",
    },
    {
      title: "WiFi not keeping up with demand",
      description:
        "Off-the-shelf kits can work in some homes, but larger properties and more demanding environments often need a more considered approach.",
      image: "/images/solutions/wifi/crowded_area_wifi.png",
      imageAlt: "Crowded area WiFi",
    },
    {
      title: "No clear plan for improvement",
      description:
        "A lot of people know their Wi-Fi is bad, but not why. A proper assessment helps identify the real issue before money gets wasted on the wrong hardware.",
      image: "/images/solutions/wifi/wifi_testing.jpg",
      imageAlt: "WiFi Testing",
    },
  ],

  realInstallationsEyebrow: "Real installations",
  realInstallationsTitle:
    "WiFi installations for homes, businesses, sheds and outdoor areas",
  realInstallationsIntro:
    "These are common Wi-Fi and coverage upgrades we install across Perth. Final recommendations depend on your layout, building materials, outdoor areas and how the network is actually being used.",

  products: wifiProducts,

  faqsEyebrow: "FAQ",
  faqsTitle: "WiFi solutions Perth FAQs",
  faqsIntro:
    "A few common questions before booking a WiFi health check or coverage upgrade.",
  faqs: [
    {
      question: "Do I need mesh WiFi or business-grade access points?",
      answer:
        "It depends on the property. Some homes only need a well-placed mesh system, while larger homes, workshops and offices often perform better with dedicated access points, switching and proper placement.",
    },
    {
      question: "Can you improve WiFi to a shed, patio or granny flat?",
      answer:
        "Yes. Separate buildings and outdoor areas usually need more than a stronger router. We can use outdoor access points, wireless links or cabling where appropriate to create reliable coverage where you actually need it.",
    },
    {
      question: "Do you test the WiFi before recommending hardware?",
      answer:
        "Yes. A proper assessment helps identify dead zones, interference, poor router placement and building materials that affect signal. That prevents money being wasted on the wrong equipment.",
    },
    {
      question: "What brands do you install?",
      answer:
        "We use practical systems matched to the job, including Ruijie and Reyee options for stable, scalable WiFi in offices, workshops, retail spaces and more demanding home setups.",
    },
  ],

  finalCtaEyebrow: "Talk to Blake Smart Solutions",
  finalCtaTitle: "Need better WiFi in Perth? Let’s fix your coverage properly",
  finalCtaIntro:
    "Whether you need a WiFi Health Check, wider coverage across the home, outdoor access, or a more commercial-grade network setup for your business, Blake Smart Solutions can help you work out the right next step.",
  finalCtaButton: {
    label: "Send an Enquiry",
    action: "enquiry",
  },
};

export const wifiSolutionTrustItems = [
  "Perth-Based Local Service",
  "Advanced WiFi Testing",
  "Ruijie Partner Systems",
  "Reliable Coverage Solutions",
];
