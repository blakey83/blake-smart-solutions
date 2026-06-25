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
    "Don’t trust your roof to a rushed Starlink install. Get clean cabling, careful mounting and local support after the job.",
  bulletPoints: [
    "Clean, professional installation you'll be proud to have on your home",
    "10-Year Warranty on all Parts and Labour",
    "Roof penetrations sealed correctly for peace of mind",
    "We take care of your home, as if it were our own",
    "Starlink installed, tested and working before we leave",
    "Local support after the job is complete",
  ],

  heroEyebrow: "FAST & RELIABLE STARLINK INSTALLATION",
  heroBackgroundImage: "/Blake_shop_front.jpeg",

  // heroImage: "/images/solutions/starLink/PXL_20260618_070344256.png",

  // heroImageAlt: "Starlink dish installed on a Perth roof",

  heroSocialProof: {
    eyebrow: "Recent Customer Feedback",
    ratingLabel: "Five star Google review",
    quote:
      "Daniel came and installed our Starlink on the roof, great experience, he replied to my initial email very quickly. Friendly and prompt service.",
    author: " - Paris Rose",
  },

  primaryCta: {
    label: "Request an Installation Quote",
    action: "enquiry",
    enquiryProductName: "Request a Starlink Quote",
    enquiryDefaultMessage: "I'm interested in getting my Starlink installed",
  },
  secondaryCta: {
    label: "Call 0477 948 079",
    action: "link",
    href: "tel:0477948079",
  },

  recentWork: {
    image: "/images/solutions/starLink/PXL_20260618_070344256.png",
    imageAlt: "Starlink dish installed on a Perth roof",
    eyebrow: "RECENT INSTALLATIONS",
    title: "Check out some of our recent installations",
    href: "/recent-installations/starlink",
  },

  problemSolutionEyebrow: "",
  problemSolutionTitle:
    "Starlink performance depends on more than just plugging in the kit",
  problemSolutionIntro:
    "The Starlink kit is designed to be approachable, but Perth homes still create practical installation issues. Roof type, cable entry, double brick walls, router location and Wi-Fi coverage all affect the end result.",

  problemSolutionCards: [
    {
      title: "Poor dish location",
      problem:
        "Trees, roof lines, antennas and neighbouring buildings can create obstruction warnings, dropouts or inconsistent speeds.",
      solution:
        "We check for clear sky view, practical mounting options and cable routing before fixing the dish in a position that gives Starlink the best chance of stable service.",
      image: "/images/products/starlink/mis-alined-starlink2.jpg",
      imageAlt: "Starlink equipment ready for installation",
    },
    {
      title: "Messy or exposed cable runs",
      problem:
        "Loose cable across a roof or wall can look rough and may not hold up well in Perth sun and weather without proper protection.",
      solution:
        "We route the cable neatly, protect exposed sections with suitable conduit and bring it inside using a clean, practical entry point.",
      image: "/images/products/starlink/mis-aligned_starlink.jpg",
      imageAlt: "Starlink dish mounted on a roof",
    },

    {
      title: "No coverage outdoors or in sheds",
      problem:
        "Patios, workshops, granny flats and sheds often need outdoor access points or dedicated wireless links rather than hoping the router reaches.",
      solution:
        "We can extend Starlink with outdoor access points, wireless links or cabling where suitable so internet reaches the spaces beyond the house.",
      image: "/images/products/wifi/wifi_to_shed.png",
      imageAlt: "Wireless link used to extend Starlink internet to a shed",
    },
  ],

  approachSteps: [
    {
      title: "Check Dish Location And Cable Route",
      icon: "requirements",
    },
    {
      title: "Recommend The Right Mounting Option",
      icon: "recommend",
    },
    {
      title: "Install, Align And Set Up Starlink",
      icon: "install",
    },
    {
      title: "Test Connection And Hand Over To You",
      icon: "support",
    },
    {
      title: "Ongoing Support After We Leave",
      icon: "support",
    },
  ],

  faqsEyebrow: "FAQ",
  faqsTitle: "Starlink installation Perth FAQs",
  faqsIntro:
    "Common questions about dish placement, cabling, router setup and Wi-Fi coverage after install.",
  faqs: [
    {
      question: "Where should the Starlink dish be installed?",
      answer:
        "The dish needs a clear view of the sky, but the best position also depends on your roof, trees, cable route and where the router will go inside. We check the practical options before drilling so the dish is mounted in a sensible, durable location.",
    },
    {
      question: "Will you check for obstructions before installing?",
      answer:
        "Yes. We check the sky view, surrounding trees, rooflines and practical mounting options before the dish is fixed in place. The goal is to avoid guesswork and choose a location that gives your Starlink the best practical chance of performing well.",
    },
    {
      question: "Will the install damage my roof or walls?",
      answer:
        "We take roof entry, sealing, fixing points and cable routing seriously. Every home is different, so we assess the roof type and cable path before starting, then install with care to avoid unnecessary holes, messy penetrations or rough workmanship.",
    },
    {
      question: "Will the cable be neat and protected?",
      answer:
        "Yes. Where cable is exposed to sun, weather or possible damage, we use suitable conduit and route it neatly. The aim is a clean, protected cable run that looks intentional, not like an afterthought.",
    },
    {
      question: "Will the Starlink look good on my roof?",
      answer:
        "A well-installed Starlink can look clean and modern on the roof. We take care with placement, mounting and cable routing so the finished job looks neat, professional and suited to your home.",
    },
    {
      question: "Do you use quality materials?",
      answer:
        "Yes. We use proper mounting hardware, suitable fixings, weather-conscious cable protection and materials chosen for the job. We do not aim for the quickest shortcut; we aim for a Starlink install that holds up over time.",
    },
    {
      question: "Is your workmanship guaranteed?",
      answer:
        "Yes. Our Starlink installation workmanship is backed by a 5-year guarantee, with a 10-year guarantee planned soon. If there is an issue with our workmanship, we stand behind the job.",
    },
    {
      question: "Will you leave a mess?",
      answer:
        "No. We treat your home with respect, clean up after ourselves and leave the work area tidy. The goal is a neat Starlink installation without cable scraps, packaging or drilling mess left behind.",
    },
    {
      question: "Do you set up and test everything before leaving?",
      answer:
        "Yes. We complete the dish setup, app checks, router setup and basic testing before we leave. We also explain what has been done so you know the system is online and understand any Wi-Fi coverage limitations.",
    },
    {
      question: "Will the standard Starlink router cover the whole house?",
      answer:
        "Sometimes, but not always. Larger homes, double brick construction, outdoor areas and sheds may need mesh Wi-Fi, ceiling access points or a dedicated wireless link for reliable coverage beyond the main router.",
    },
    {
      question: "Can you help with sheds or outdoor coverage?",
      answer:
        "Yes. If you need internet to a shed, workshop, granny flat, patio or other part of the property, we can advise on suitable Wi-Fi, access point or wireless bridge options after the Starlink service is working.",
    },
    {
      question: "Do you help if I am unsure what mount I need?",
      answer:
        "Yes. You do not need to know the perfect mount before contacting us. We can assess your roof, the dish position and the cable route, then recommend a practical mounting option for your property.",
    },
    {
      question: "Do I need to buy Starlink before booking?",
      answer:
        "Yes. Blake Smart Solutions installs customer-supplied Starlink systems. Once your Starlink kit has arrived, we can mount it, route the cable, configure the system and test the service for you.",
    },
    {
      question: "Can you help if I already started the setup?",
      answer:
        "Yes. If the kit is already opened, partly set up or you have run into confusion with the app, router, cable or placement, we can help complete the installation and get the system properly tested.",
    },
    {
      question: "What happens if something is confusing after the install?",
      answer:
        "We provide advice before, during and after the installation. If you have a question after we leave, you can contact us for local support instead of feeling like you have been left to work it out alone.",
    },
    {
      question: "Will you actually turn up?",
      answer:
        "We know customers hate being left waiting or chasing tradies. Once your booking is confirmed, we communicate clearly, arrive as arranged, and let you know if anything genuinely needs to change.",
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
  "Starlink Certified Installers",
  "10 Year Warranty",
  "Perth Business offering local support",
  "Fully Insured and Licensed",
];

export const whyChooseUsStarlink = {
  whySection: {
    eyebrow: "WHY BLAKE SMART SOLUTIONS",
    image: {
      src: "/images/me_and_charlotte.png",
      alt: "Daniel from Blake Smart Solutions with Charlotte",
    },
    title: "Practical installation backed by real communications experience",
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
        name: "Sid Chahal",
        text: "recently had Blake install my Starlink system at my property, and I couldn’t be happier with the service. From the first call to the final cleanup, Blake was professional, knowledgeable, and incredibly efficient.",
      },
      {
        name: "Mark Lumacang",
        text: "Good communication and clean work.",
      },
      {
        name: "Lesley Middleton",
        text: "Came over at the appointed time and fixed my security camera system efficiently. Really went above and beyond.",
      },
    ],
  },
};
