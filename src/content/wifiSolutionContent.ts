import type { SolutionPageTemplateProps } from "@/components/solutions/types";

export const wifiSolutionContent: SolutionPageTemplateProps = {
  headline: "Get WiFi Where It Doesn't Reach Today",
  subHeadline:
    "From sheds and workshops to offices, outdoor areas and large homes, we install access points and wireless links that deliver reliable coverage where standard routers fall short.",
  bulletPoints: [
    "Eliminate dead spots, weak signal and frustrating WiFi dropouts",
    "Get internet to sheds, workshops, granny flats and outdoor areas",
    "Extend Starlink and NBN connections beyond the room with the router",
    "Keep security cameras, smart devices and workstations reliably connected",
    "Local support after installation",
  ],
  heroEyebrow: "ATTENTION PERTH INTERNET USERS",
  heroImage: "/images/work_gallery/wifi_survey.jpeg",
  heroImageAlt: "Blake Smart Solutions WiFi",

  heroSocialProof: {
    eyebrow: "Google review",
    ratingLabel: "Five star Google review",
    quote: "Good communication and clean work. Highly recommended.",
    author: "Mark Lumacang",
  },

  primaryCta: {
    label: "Book a free consultation",
    action: "enquiry",
  },
  secondaryCta: {
    label: "Call now for a free quote",
    action: "link",
    href: "tel:0477948079",
  },

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
      title: "Test Coverage And Provide Local Support",
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
    paragraphs: [
      "Blake Smart Solutions is a Perth-based business built around practical, reliable technology for real homes and small businesses.",
      "I’ve spent 20 years working with communications systems across military and commercial environments, where reliability matters and guesswork is not good enough.",
      "That experience shapes how we approach home WiFi problems. We don’t just tell you to restart the router or buy another random extender. We look at how your home is actually built, where the signal is weak, what is interfering with it, and what will make the biggest difference for the rooms you use every day.",
      "We’re fully insured, legally compliant, and focused on clear advice, clean work and practical fixes that make your home technology easier to live with.",
    ],
    credibility: "Perth-based • Fully insured • 20 years experience",
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
