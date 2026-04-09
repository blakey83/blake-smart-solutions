import type { SolutionPageTemplateProps } from "@/components/solutions/types";
import { wifiProducts } from "@/content/WiFi_products";

export const wifiSolutionContent: SolutionPageTemplateProps = {
  title:
    "WiFi solutions Perth — reliable coverage for homes, businesses & large properties",
  intro:
    "Blake Smart Solutions designs and installs reliable Wi-Fi systems for homes, workshops, businesses and large properties across Perth and the surrounding suburbs, including outdoor areas and multi-building setups. Whether you're dealing with dead zones, unstable connections or poor coverage between buildings, we design systems that actually solve the problem — not just patch it.",

  heroEyebrow: "Professional Wi-Fi solutions",
  heroImage: "/images/WiFi_hero.png",
  heroImageAlt: "Blake Smart Solutions WiFi",

  primaryCta: {
    label: "Book a WiFi Health Check",
    action: "enquiry",
  },
  secondaryCta: {
    label: "Call now for a quote",
    action: "link",
    href: "tel:0477948079",
  },

  problemsEyebrow: "Common Wi-Fi problems",
  problemsTitle:
    "Most WiFi problems aren’t your internet connection — they’re coverage issues",
  problemsIntro:
    "If your WiFi drops out, struggles in certain rooms, or doesn’t reach outside, the issue usually isn’t your provider. It’s poor placement, the wrong equipment, or a network that was never designed properly in the first place. That’s where a properly designed WiFi system makes the difference.",

  problems: [
    {
      title: "Dead zones indoors",
      description:
        "Weak signal in bedrooms, back rooms, upstairs areas or home offices can make streaming, work and general day-to-day use frustrating.",
      image: "/images/bedroom_wifi.webp",
      imageAlt: "Bedroom wifi",
    },
    {
      title: "Dropouts in busy environments",
      description:
        "Retail, office and workshop environments can struggle when too many devices are competing on a network that was never designed for business use.",
      image: "/images/busy_office.png",
      imageAlt: "Busy Office",
    },
    {
      title: "Poor outdoor coverage",
      description:
        "Patios, yards, entertaining areas and external workspaces often fall outside the usable range of a standard indoor router.",
      image: "/images/outdoor_solution.png",
      imageAlt: "Outdoor Solution",
    },
    {
      title: "Shed, granny flat or workshop not connected",
      description:
        "Separate buildings often need more than a mesh add-on. A properly aligned wireless bridge and dedicated access point can deliver far better performance and reliability.",
      image: "/images/shed_wifi_solution.png",
      imageAlt: "Shed Wifi Solution",
    },
    {
      title: "WiFi not keeping up with demand",
      description:
        "Off-the-shelf kits can work in some homes, but larger properties and more demanding environments often need a more considered approach.",
      image: "/images/crowded_area_wifi.png",
      imageAlt: "Crowded area WiFi",
    },
    {
      title: "No clear plan for improvement",
      description:
        "A lot of people know their Wi-Fi is bad, but not why. A proper assessment helps identify the real issue before money gets wasted on the wrong hardware.",
      image: "/images/wifi_testing.jpg",
      imageAlt: "WiFi Testing",
    },
  ],

  brandBlock: {
    eyebrow: "Commercial WiFi systems Perth",
    title: "Designed with business-grade thinking, backed by Ruijie",
    intro:
      "Because reliability matters, Blake Smart Solutions partners with Ruijie to deliver professional WiFi systems using both Ruijie and Reyee platforms. That means stronger performance, cleaner management and better suitability for offices, workshops, retail spaces and more demanding residential installs.",
    image: "/images/rayee_partner.png",
    imageAlt: "Ruijie Rayee",
    points: [
      "Built for offices, workshops, retail and demanding home setups",
      "Handles more devices without slowing down or dropping out",
      "Optional cloud-managed systems for easier support and changes",
      "Scalable setups that grow with your coverage needs",
      "A smarter alternative to basic off-the-shelf WiFi",
    ],
  },

  productsEyebrow: "Popular options",
  productsTitle:
    "WiFi solutions in Perth for homes, businesses, sheds and outdoor areas",
  productsIntro:
    "These are some of the most common Wi-Fi and coverage upgrades we install. Final recommendations depend on your layout, building materials, outdoor areas and how the network is actually being used.",

  products: wifiProducts,

  imageSectionEyebrow: "Installed properly",
  imageSection: {
    title:
      "WiFi installation in Perth — designed properly for reliable coverage",
    intro:
      "We do more than plug in hardware and hope for the best. Blake Smart Solutions reviews the layout, coverage requirements and intended use of the space, then recommends a practical solution that suits the site. For Perth homes that might mean a simple mesh upgrade. For workshops, offices and more demanding jobs, it can mean business-grade access points, switching and wireless links designed for reliable day-to-day use.",
    image: "/images/blake_casual.png",
    imageAlt: "Daniel ready to work",
  },

  finalCtaEyebrow: "Talk to Blake Smart Solutions",
  finalCtaTitle: "Need better WiFi in Perth? Let’s fix your coverage properly",
  finalCtaIntro:
    "Whether you need a WiFi Health Check, wider coverage across the home, outdoor access, or a more commercial-grade network setup for your business, Blake Smart Solutions can help you work out the right next step.",
  finalCtaButton: {
    label: "Send an Enquiry",
    action: "enquiry",
  },
};
