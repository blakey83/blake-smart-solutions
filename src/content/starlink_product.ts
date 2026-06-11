import type { Product } from "@/lib/types";
import type { SolutionPageTemplateProps } from "@/components/solutions/types";

export const starlinkIntro = {
  title: "Starlink Installation Perth",
  intro:
    "Starlink can be a brilliant internet option for Perth homes, rural blocks and properties with poor fixed-line service. The difference between a frustrating setup and a reliable one is usually the install: clear dish placement, secure mounting, protected cable routing and Wi-Fi that actually reaches the rooms, patio or shed where you need it.",
};

export const starlinkProducts: Product[] = [
  {
    name: "Starlink Installation",
    description:
      "Get your Starlink set up properly the first time. We install the dish in the best position for a clear signal, run the cabling neatly, and make sure everything is working before we leave. Ideal for homes, new builds, and rural properties across Perth and surrounds.",
    image: "/images/products/starlink/Starlink_on_roof.jpg",
    imageAlt:
      "Starlink dish installed on a roof with clear sky view in a Perth home",
    badge: "Essential",
    features: [
      "Optimal dish placement for best signal",
      "Secure mounting and clean cable routing",
      "Full setup and connection check",
      "Ready to use before we leave",
    ],
    ctaLabel: "Book a Starlink Install",
    href: "/#final-cta",
  },
  {
    name: "Starlink + WiFi Boost",
    description:
      "Starlink internet is great — but the standard router often doesn’t reach the whole house. This upgrade adds a mesh WiFi system to improve coverage in bedrooms, living areas, and home offices.",
    image:
      "/images/products/starlink/328143_large_15016431-8027-4ea9-9c08-08fd4f7e863b.webp",
    imageAlt:
      "Home with strong WiFi coverage throughout bedrooms and living areas",
    badge: "Most Popular",
    features: [
      "Everything in Starlink Installation",
      "Mesh WiFi system for better indoor coverage",
      "Fewer dropouts and stronger signal inside",
      "Seamless WiFi as you move through the house",
    ],
    ctaLabel: "Improve My WiFi",
    href: "/#final-cta",
  },
  {
    name: "Starlink + Outdoor WiFi",
    description:
      "Extend your Starlink connection outside to patios, sheds, and entertaining areas. Perfect for Perth backyards, workshops, and properties where you want reliable WiFi beyond the house.",
    image: "/images/products/wifi/outdoor_ap.png",
    imageAlt:
      "Outdoor WiFi coverage in a backyard patio area with Starlink internet",
    badge: "Outdoor Living",
    features: [
      "Everything in Starlink Installation",
      "Outdoor WiFi access point",
      "Coverage for patios, backyards, and outdoor areas",
      "Weather-ready equipment and professional install",
    ],
    ctaLabel: "Extend WiFi Outdoors",
    href: "/#final-cta",
  },
  {
    name: "Starlink + Shed WiFi",
    description:
      "Get fast, reliable internet out to your shed, workshop, or granny flat. We install a dedicated wireless link and WiFi inside the building, perfect for rural properties, tradies, and home setups where distance is an issue.",
    image: "/images/products/wifi/wifi_to_shed.png",
    imageAlt:
      "Starlink internet connected to a shed using a wireless bridge and access point",
    badge: "Rural Solution",
    features: [
      "Everything in Starlink Installation",
      "Wireless bridge between house and shed",
      "WiFi access point inside the shed or workshop",
      "Reliable connection over distance",
    ],
    ctaLabel: "Connect My Shed",
    href: "/#final-cta",
  },
];

export const starlinkSolutionContent: SolutionPageTemplateProps = {
  headline: "Starlink Installation Perth",
  subHeadline:
    "Roof-mounted Starlink installations with careful cable management, dish alignment, router setup and final testing.",
  bulletPoints: [
    "Roof mounting options",
    "Clean cable entry into the home",
    "Conduit protection for exposed cabling",
    "Router and app setup",
    "Final setup and alignment checks",
  ],
  heroEyebrow: "Fast & Reliable Starlink Setup",
  heroImage: "/images/how_to/Starlink/martin_install.jpg",
  heroImageAlt: "Starlink dish installed on a Perth roof",

  heroSocialProof: {
    eyebrow: "Google review",
    ratingLabel: "Five star Google review",
    quote: "Good communication and clean work.",
    author: "Mark Lumacang",
  },

  primaryCta: {
    label: "Request a Starlink Quote",
    action: "enquiry",
  },
  secondaryCta: {
    label: "Call 0477 948 079",
    action: "link",
    href: "tel:0477948079",
  },

  problemSolutionEyebrow: "Problem / Solution",
  problemSolutionTitle:
    "Starlink performance depends on more than just plugging in the kit",
  problemSolutionIntro:
    "The Starlink kit is designed to be approachable, but Perth homes still create practical installation issues. Roof type, cable entry, double brick walls, router location and Wi-Fi coverage all affect the end result.",

  problemSolutionCards: [
    {
      title: "Poor dish location",
      description:
        "Trees, roof lines, antennas and neighbouring buildings can create obstruction warnings, dropouts or inconsistent speeds.",
      image: "/images/products/starlink/mis-alined-starlink2.jpg",
      imageAlt: "Starlink equipment ready for installation",
    },
    {
      title: "Messy or exposed cable runs",
      description:
        "Loose cable across a roof or wall can look rough and may not hold up well in Perth sun and weather without proper protection.",
      image: "/images/products/starlink/mis-aligned_starlink.jpg",
      imageAlt: "Starlink dish mounted on a roof",
    },
    {
      title: "Weak Wi-Fi inside the home",
      description:
        "The Starlink router can work well in smaller homes, but larger layouts, double brick and home offices often need better Wi-Fi design.",
      image: "/images/work_gallery/wifi_survey.jpeg",
      imageAlt: "WiFi equipment for improving Starlink coverage",
    },
    {
      title: "No coverage outdoors or in sheds",
      description:
        "Patios, workshops, granny flats and sheds often need outdoor access points or dedicated wireless links rather than hoping the router reaches.",
      image: "/images/products/wifi/wifi_to_shed.png",
      imageAlt: "Wireless link used to extend Starlink internet to a shed",
    },
    {
      title: "Difficult roof or wall access",
      description:
        "Tile roofs, Colorbond roofs and double brick homes need different mounting and cable-entry approaches to keep the install clean.",
      image: "/images/products/wifi/outdoor_ap.png",
      imageAlt: "Outdoor network equipment for extended property coverage",
    },
    {
      title: "Setup without testing",
      description:
        "A connection showing online is not the same as a finished job. Dish alignment, app warnings and Wi-Fi coverage should be checked before handover.",
      image: "/images/solutions/wifi/wifi_testing.jpg",
      imageAlt: "Testing WiFi coverage after a Starlink installation",
    },
  ],

  realInstallationsEyebrow: "Real installations",
  realInstallationsTitle:
    "Starlink installations for homes, sheds and larger properties",
  realInstallationsIntro:
    "These are common Starlink installations we complete around Perth. The right option depends on roof type, property layout, where you need Wi-Fi and whether you need coverage beyond the main house.",

  products: starlinkProducts,

  faqsEyebrow: "FAQ",
  faqsTitle: "Starlink installation Perth FAQs",
  faqsIntro:
    "Common questions about dish placement, cabling, router setup and Wi-Fi coverage after install.",
  faqs: [
    {
      question: "Where should the Starlink dish be installed?",
      answer:
        "The dish needs a clear sky view with minimal obstructions, but the mount and cable route also matter. We check for practical placement, roof type, cable entry and long-term durability before installing.",
    },
    {
      question: "Do you protect the Starlink cable?",
      answer:
        "Yes. Where cable is exposed to sun or weather, we use suitable conduit and route it neatly so the installation is cleaner and better protected over time.",
    },
    {
      question: "Will the standard Starlink router cover the whole house?",
      answer:
        "Sometimes, but not always. Larger homes, double brick construction, outdoor areas and sheds often need mesh Wi-Fi, access points or a dedicated wireless link for reliable coverage.",
    },
    {
      question: "Do you set up and test everything before leaving?",
      answer:
        "Yes. We complete the dish setup, app checks, router setup and basic testing so you know the system is online and any Wi-Fi coverage limitations are clear.",
    },
  ],

  finalCtaEyebrow: "Talk to Blake Smart Solutions",
  finalCtaTitle: "Need Starlink installed properly in Perth?",
  finalCtaIntro:
    "Tell us about your roof type, suburb and where you need internet coverage. We can help with the install, cable route, router setup and any Wi-Fi upgrades needed for the home, outdoor areas or shed.",
  finalCtaButton: {
    label: "Send a Starlink Enquiry",
    action: "enquiry",
  },
};

export const starlinkSolutionTrustItems = [
  "Starlink Certified Installations",
  "ACMA Compliant Cabling",
  "Local Perth Business",
  "Wi-Fi Upgrades Available",
];
