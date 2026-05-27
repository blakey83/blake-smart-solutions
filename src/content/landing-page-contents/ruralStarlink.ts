import type { Product } from "@/lib/types";
import type { SolutionPageTemplateProps } from "@/components/solutions/types";

export const starlinkIntro = {
  title: "Starlink Installation WA",
  intro:
    "Starlink can be a brilliant internet option for WA homes, rural blocks and properties with poor fixed-line service. The difference between a frustrating setup and a reliable one is usually the install: clear dish placement, secure mounting, protected cable routing and Wi-Fi that actually reaches the rooms, patio or shed where you need it.",
};

export const starlinkProducts: Product[] = [
  {
    name: "Starlink Installation",
    description:
      "Get your Starlink set up properly the first time. We install the dish in the best position for a clear signal, run the cabling neatly, and make sure everything is working before we leave. Ideal for homes, new builds, and rural properties across WA and surrounds.",
    image: "/images/products/starlink/Starlink_on_roof.jpg",
    imageAlt:
      "Starlink dish installed on a roof with clear sky view in a WA home",
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
      "Extend your Starlink connection outside to patios, sheds, and entertaining areas. Perfect for large properties where you need reliable WiFi beyond the house.",
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

export const RuralStarlinkSolutionContent: SolutionPageTemplateProps = {
  title: "Starlink Installation",
  intro:
    "Roof-mounted Starlink installations with careful cable management throughout the home. Dish alignment, router setup and system configuration are all handled as part of the installation.",
  bulletPoints: [
    "Roof mounting options",
    "Clean cable entry into the home",
    "Conduit protection for exposed cabling",
    "Router and app setup",
    "Final setup and alignment checks",
  ],
  heroEyebrow: "Fast & Reliable Starlink Setup",
  heroImage: "/images/how_to/Starlink/martin_install.jpg",
  heroImageAlt: "Company Director Daniel installing Starlink",

  heroSocialProof: {
    eyebrow: "Google review",
    ratingLabel: "Five star Google review",

    quote:
      "Daniel did a great job installing my Starlink setup and helped me out to route another data cable while he was at it. Recommended, thank you.",
    author: "Alan Star",
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

  problemsEyebrow: "Common Starlink problems",
  problemsTitle:
    "Starlink performance depends on more than just plugging in the kit",
  problemsIntro:
    "The Starlink kit is designed to be approachable, but Rural homes still create practical installation issues. Roof type, cable entry, double brick walls, router location and Wi-Fi coverage all affect the end result.",

  problems: [
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
        "Loose cable across a roof or wall can look rough and may not hold up well in WA sun and weather without proper protection.",
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

  brandBlock: {
    eyebrow: "How we approach Starlink installs",
    title: "Dish, cable, router and Wi-Fi planned as one system",
    intro:
      "A good Starlink installation is not just putting the dish somewhere high. We check the app for obstructions, choose a sensible mount, protect exposed cable, bring the cable inside cleanly and make sure the router location gives the best chance of reliable coverage.",
    image: "/images/products/starlink/Starlink_on_roof.jpg",
    imageAlt: "Clean Starlink roof installation",
    points: [
      "Dish placement checked for clear sky view and practical cable routing",
      "Mounting approach matched to tile, Colorbond or wall locations",
      "Cable protected with conduit where exposed to sun or weather",
      "Neat internal cable exit using a suitable plate where practical",
      "Wi-Fi coverage checked after setup, with upgrade options if needed",
    ],
  },

  productsEyebrow: "Starlink solutions",
  productsTitle:
    "Starlink installation options for homes, sheds and larger properties",
  productsIntro:
    "These are common Starlink solutions we install. The right option depends on roof type, property layout, where you need Wi-Fi and whether you need coverage beyond the main house.",

  products: starlinkProducts,

  imageSectionEyebrow: "Superior Starlink installations",
  imageSection: {
    title: "Starlink setup that still looks tidy after the installer leaves",
    intro:
      "We aim for practical, clean installations: secure mounting, protected cable, sensible router placement and clear advice about Wi-Fi coverage. If the Starlink router alone will not cover the property properly, we can recommend mesh Wi-Fi, wired access points, outdoor Wi-Fi or shed links.",
    image: "/images/how_to/Starlink/martin_install.jpg",
    imageAlt: "Starlink kit ready for professional setup",
  },

  finalCtaEyebrow: "Talk to Blake Smart Solutions",
  finalCtaTitle: "Need Starlink installed properly at your property",
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
  "Local WA Business",
  "Wi-Fi Upgrades Available",
];
