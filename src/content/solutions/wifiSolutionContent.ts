import type { SolutionPageTemplateProps } from "@/components/solutions/types";

export const wifiSolutionContent: SolutionPageTemplateProps = {
  headline: "Get WiFi Where It Doesn't Reach Today",
  subHeadline:
    "Reliable WiFi and connectivity across your home or business. From sheds and workshops to offices, outdoor areas and large homes where standard routers fall short.",
  bulletPoints: [
    "Eliminate dead spots, weak signal and frustrating WiFi dropouts",
    "Get internet to sheds, workshops, granny flats and outdoor areas",
    "Extend Starlink and NBN connections beyond the room with the router",
    "Keep security cameras, smart devices and workstations reliably connected",
    "Installed, configured and tested, with local support afterwards",
  ],
  heroEyebrow: "WIFI & CONNECTIVITY SOLUTIONS PERTH",
  heroBackgroundImage: "/Blake_shop_front.jpeg",
  // heroImage: "/images/work_gallery/wifi_survey.jpeg",
  // heroImageAlt: "Blake Smart Solutions WiFi",

  heroSocialProof: {
    eyebrow: "Google review",
    ratingLabel: "Five star Google review",
    quote:
      "...very very helpful in helping you get the best solution for your home... (they) answer all your questions. Highly recommend!",

    author: "Dhanushke Fernando",
  },
  heroReviewStrip: {
    heading: "Trusted by Perth homeowners and businesses",
    reviewCount: 3,
  },
  heroCtaLines: [
    "Tell us where the network isn’t reaching and what you need connected.",
    "We’ll come back with a clear quote for the right solution.",
  ],

  primaryCta: {
    label: "Get a connectivity quote",
    action: "enquiry",
    enquiryProductName: "WiFi Solutions",
  },
  secondaryCta: {
    label: "Call for a free quote",
    action: "link",
    href: "tel:0477948079",
  },

  recentWork: {
    image: "/images/work-photos/WiFi/recent-wifi-installations-card.webp",
    imageAlt:
      "Daniel from Blake Smart Solutions drilling for a neat Wi-Fi access point installation",
    eyebrow: "RECENT INSTALLATIONS",
    title: "See some of our recent successful Wi-Fi installations",
    href: "/recent-installations/wifi",
    linkLabel: "View recent Wi-Fi installations",
  },

  featureSections: [
    {
      eyebrow: "RELIABLE WIFI THROUGHOUT THE BUILDING",
      title: "Strong, consistent WiFi in the rooms where you actually need it",
      intro:
        "Stop putting up with weak rooms, dropouts and unreliable coverage. Properly placed ceiling-mounted access points give your home or business more consistent WiFi across the areas you actually use every day.",
      points: [
        "Reduce dead spots, weak signal and frustrating dropouts",
        "Keep video calls, streaming, workstations and smart devices running reliably",
        "Move through covered areas on one consistent WiFi network",
        "Get a properly installed and tested system instead of guessing with repeaters and mesh nodes",
      ],
      image: "/images/solutions/wifi/ceiling-mounted-access-point.webp",
      imageAlt:
        "Ceiling-mounted WiFi access point installed by Blake Smart Solutions",
    },

    {
      eyebrow: "RELIABLE WIFI BEYOND THE WALLS",
      title:
        "Stay connected across patios, pools, yards and outdoor work areas",
      intro:
        "Your WiFi should work in the places you actually use, not stop at the back door. Outdoor access points extend reliable coverage into entertaining areas, gardens, yards and commercial outdoor spaces where indoor routers struggle.",
      points: [
        "Use phones, tablets and laptops outdoors without weak or patchy signal",
        "Keep outdoor cameras and smart devices reliably connected",
        "Extend coverage across larger properties without relying on indoor routers to push through external walls",
        "Get coverage planned and tested around the areas that matter most",
      ],
      image: "/images/products/wifi/outdoor_ap.png",
      imageAlt:
        "Outdoor WiFi access point mounted beside a covered entertaining area",
    },

    {
      eyebrow: "INTERNET TO SHEDS, WORKSHOPS AND GRANNY FLATS",
      title: "Get reliable internet to the buildings your router cannot reach",
      intro:
        "Stop trying to stretch weak WiFi across the yard. A dedicated wireless link can carry your network between buildings, giving your shed, workshop or granny flat its own strong, reliable connection without trenching where a wireless bridge is suitable.",
      points: [
        "Get dependable internet inside detached buildings instead of a weak signal at the doorway",
        "Run workstations, streaming, cameras and smart equipment without constant dropouts",
        "Avoid wasting money on range extenders or mesh units that cannot cover the distance properly",
        "Get the link installed, aligned, configured and tested end to end",
      ],
      image: "/images/solutions/wifi/shed-wireless-bridge.webp",
      imageAlt:
        "Wireless bridge installed on a roof to carry WiFi to a detached shed",
    },
  ],

  problemSolutionEyebrow: "",
  problemSolutionTitle:
    "Your Internet Is Probably Fine. The Problem Is Getting It Where You Need It.",

  problemSolutionIntro:
    "Most WiFi issues aren't caused by your internet provider. They're caused by poor coverage, difficult building layouts, detached areas of the property, or networks that were never designed for how you actually use them. We identify the cause and install the right solution to deliver reliable connectivity where it matters most.",

  problemSolutionCards: [
    {
      title: "Dead Spots & Weak Coverage",
      problem:
        "Bedrooms, home offices, theatre rooms and other areas often suffer from poor WiFi because the router simply can't reach where you need it.",
      solution:
        "We identify why coverage is failing and install the right combination of access points, cabling and network equipment to deliver reliable connectivity throughout the areas you actually use.",
      image: "/images/solutions/wifi/bedroom_wifi.webp",
      imageAlt: "Dead WiFi zone in home",
    },

    {
      title: "Internet To Sheds, Workshops & Granny Flats",
      problem:
        "Separate buildings are often too far away for reliable WiFi, leaving sheds, workshops and granny flats with slow speeds or no usable connection at all.",
      solution:
        "Using wireless bridges, outdoor access points and structured cabling, we can extend reliable internet to detached buildings without relying on unreliable extenders.",
      image: "/images/solutions/wifi/shed_wifi_solution.png",
      imageAlt: "Internet connection to shed or workshop",
    },

    {
      title: "Starlink & Camera Connectivity Problems",
      problem:
        "If Starlink doesn't reach the whole property or your cameras keep dropping out, the issue is often the network behind them rather than the devices themselves.",
      solution:
        "We improve the infrastructure supporting your Starlink and security systems, helping deliver reliable coverage, stable connections and fewer frustrating dropouts.",
      image: "/images/products/wifi/wifi_frustration.jpg",
      imageAlt: "Reliable network for Starlink and security cameras",
    },
  ],

  approachSteps: [
    {
      title: "Assess Your Wi-Fi Coverage",
      icon: "requirements",
    },
    {
      title: "Recommend The Right Network Design",
      icon: "recommend",
    },
    {
      title: "Install And Configure The Equipment",
      icon: "install",
    },
    {
      title: "Test Coverage And Provide a complete report",
      icon: "support",
    },
  ],

  faqsEyebrow: "FAQ",
  faqsTitle: "WiFi solutions Perth FAQs",
  faqsIntro:
    "A few common questions before booking a WiFi health check or coverage upgrade.",
  faqs: [
    {
      question: "Do I need mesh WiFi, access points or a wireless bridge?",
      answer:
        "Every property is different. Some homes can be improved with a mesh system, while others benefit more from access points, data cabling or wireless bridges. We assess the property and recommend the solution that best suits your layout, coverage requirements and budget.",
    },
    {
      question: "Can you get internet to a shed, workshop or granny flat?",
      answer:
        "Yes. We regularly install wireless bridges, outdoor access points and data cabling to extend reliable internet to detached buildings and outdoor areas across Perth.",
    },
    {
      question:
        "My Starlink works near the router but not throughout the property. Can you help?",
      answer:
        "Absolutely. We can extend Starlink coverage using access points, wireless links and structured cabling so your connection reaches the rooms, outdoor areas and buildings where you actually need it.",
    },
    {
      question: "Will I know the cost before work starts?",
      answer:
        "Yes. We provide a clear written scope and quote before proceeding. If additional work is required, we'll explain the options and obtain approval before any extra costs are incurred.",
    },
    {
      question: "What happens if I need help after the installation?",
      answer:
        "We'll make sure everything is working before we leave and provide a proper handover. If you need assistance afterwards, you're dealing with a local Perth business that you can contact directly for support.",
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
  "5-Star Google Reviews",
  "ACMA Registered and Fully Insured",
  "Starlink, CCTV & Network Specialist",
  "Local Perth Support",
];

export const whyChooseUsWiFi = {
  whySection: {
    eyebrow: "WHY BLAKE SMART SOLUTIONS",
    image: {
      src: "/images/me_and_charlotte.png",
      alt: "Daniel from Blake Smart Solutions with Charlotte",
    },
    title: "WiFi help from someone who understands communications",
    paragraph:
      "Blake Smart Solutions is built on more than 20 years of experience working with communications and technology systems across military, industrial and commercial environments. In those industries, systems are expected to perform reliably, planning matters, and attention to detail is essential. That same approach is applied to every installation, delivering practical solutions that are designed to work reliably in the real world.",
    bullets: [
      "Clear recommendations based on your needs, not sales targets.",
      "Clean, professional installations with attention to detail.",
      "Reliable systems designed for long-term performance.",
      "Local Perth support before, during and after installation.",
      "Straightforward communication and honest advice.",
    ],
    reviewsHeading: "Recent customer feedback",
    reviews: [
      {
        name: "Sue Haynes",
        text: "Daniel arrived on time and installed our replacement system without problems. Neat and tidy install. No hesitation to recommend Daniel.",
      },
      {
        name: "Paris Rose",
        text: "Great experience, he replied to my initial email very quickly. Friendly and prompt service.",
      },
      {
        name: "Mark Lumacang",
        text: "Good communication and clean work.",
      },
      {
        name: "Alan Star",
        text: "Daniel did a great job installing my setup and helped me out to route another data cable while he was at it. Recommended, thank you.",
      },
      {
        name: "Lesley Middleton",
        text: "Came over at the appointed time and fixed my security camera system efficiently. Really went above and beyond.",
      },
      {
        name: "Sid Chahal",
        text: "recently had Blake install my Starlink system at my property, and I couldn’t be happier with the service. From the first call to the final cleanup, Blake was professional, knowledgeable, and incredibly efficient.",
      },
    ],
  },
};
