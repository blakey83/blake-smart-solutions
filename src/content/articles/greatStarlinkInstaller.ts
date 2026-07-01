type ArticleSubsection = {
  title: string;
  paragraphs?: string[];
};

type ArticleSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: ArticleSubsection[];
};

export const greatStarlinkInstallerContent: {
  pagePath: string;
  pageTitle: string;
  pageDescription: string;
  publishedTime: string;
  modifiedTime: string;
  hero: {
    eyebrow: string;
    intro: string;
    image: {
      src: string;
      alt: string;
    };
  };
  summary: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
  sections: ArticleSection[];
  relatedArticles: Array<{
    title: string;
    description: string;
    href: string;
  }>;
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
  };
} = {
  pagePath: "/articles/what-makes-a-great-starlink-installer",
  pageTitle: "What Makes a Great Starlink Installer?",
  pageDescription:
    "Learn what separates a great Starlink installer from an average one, including site assessment, mounting, cable management, Wi-Fi setup, workmanship and after-install support.",
  publishedTime: "2026-07-01",
  modifiedTime: "2026-07-01",
  hero: {
    eyebrow: "Starlink installation guide",
    intro:
      "With Starlink transforming connectivity in rural and remote regions, demand for professional installers is high. The difference between an average and excellent installation can affect performance, reliability and your overall satisfaction for years.",
    image: {
      src: "/images/how_to/Starlink/serpie_install.jpg",
      alt: "Professional Starlink dish installation on a roof",
    },
  },
  summary:
    "A great Starlink installer does more than get the dish online. They assess the site properly, choose the right mount, protect the roof, route cables neatly, check Wi-Fi coverage, communicate clearly and support you after the installation.",
  images: [
    {
      src: "/images/solutions/starLink/PXL_20260619_073008243.jpg",
      alt: "A man cave setup with Starlink Wi-Fi router",
    },
    {
      src: "/images/how_to/Starlink/tripod.jpg",
      alt: "Starlink mounting hardware and installation parts",
    },
    {
      src: "/images/products/starlink/Starlink_on_roof.jpg",
      alt: "Starlink dish placed on a roof with clear sky view",
    },
    {
      src: "/images/how_to/Starlink/roof_space.png",
      alt: "Protected Starlink cable route through roof space",
    },
    {
      src: "/images/work_gallery/wifi_survey.jpeg",
      alt: "Checking the Wi-Fi system used to improve Starlink coverage",
    },
    {
      src: "/images/solutions/starLink/PXL_20260618_071151096.jpg",
      alt: "Neat professional Starlink installation workmanship",
    },
    {
      src: "/images/how_to/Starlink/brush_plate.jpg",
      alt: "Clean internal cable finish for a Starlink installation",
    },
    {
      src: "/images/solutions/starLink/PXL_20260630_081545624.jpg",
      alt: "Completed Starlink in Pickering Brook",
    },
  ],
  sections: [
    {
      title: "Introduction",
      paragraphs: [
        "While the Starlink hardware is largely standardised, the quality of the installation is not. The way the dish is positioned, mounted, cabled and supported can make a lasting difference to performance, reliability and how tidy the finished job looks.",
        "Here are the key things that separate a great Starlink installer from someone who simply gets the dish online.",
      ],
    },
    {
      title: "Every Great Installation Starts With a Proper Site Assessment",
      paragraphs: [
        "A good installer's job begins long before the dish is on the roof. Because Starlink performance is highly sensitive to obstructions, a careful evaluation of the property is essential.",
        "Great installers use the Starlink app's obstruction tool, not guesswork, to check for trees, buildings and other obstacles that could interrupt the connection now or as vegetation grows. They also consider seasonal changes and likely future growth.",
        "Cable routes matter too. An experienced installer thinks about how to run the cable from the dish to the router while keeping it protected, tidy and practical to maintain. The best location for the dish might not be the closest spot to the house. It is the location with the clearest sky view and the best long-term prospects.",
      ],
    },
    {
      title: "A Strong Mount Is More Important Than Most People Realise",
      paragraphs: [
        "The mount is the foundation of the installation. A weak or poorly chosen mount can cause problems, especially in harsh Australian conditions.",
        "A great installer understands which brackets and fixings suit different roof types, whether tile or Colorbond, and knows how to distribute wind loading properly to avoid damage.",
        "Waterproofing is mandatory. A quality installation includes careful sealing of penetrations to protect the roof and prevent leaks. Installers should avoid damaging tiles or Colorbond sheeting and use mounting hardware suited to the roof material.",
      ],
    },
    {
      title: "Good Dish Placement Is About More Than Signal",
      paragraphs: [
        "Clear-sky visibility is critical, but great dish placement also considers access for future service, upgrades or cleaning.",
        "Sensible cable runs that avoid unnecessary exposure to the weather are a mark of professionalism. A tidy installation, where cables are neatly routed and secured, shows care for both function and appearance.",
      ],
    },
    {
      title: "Great Installers Obsess Over Cable Management",
      paragraphs: [
        "One of the clearest signs of a quality installation is cable management. Concealed cables, run through wall cavities where possible, are a hallmark of good work.",
        "Where exposed cable is unavoidable, UV-stabilised conduit and proper weatherproofing protect against rain, pests and sun damage. Cables should be clipped and supported, never left loose or trailing.",
        "This level of care is what separates great installers from those who simply get the dish online.",
      ],
    },
    {
      title: "Starlink Is Only Half the Job. Wi-Fi Matters Too",
      paragraphs: [
        "Getting the Starlink dish online is only the beginning. The real value comes from a consistent internet experience throughout the property, and that depends on proper Wi-Fi setup.",
        "The best installers advise on router placement and can design solutions for workshops, sheds, granny flats and outdoor entertaining areas. They may recommend mesh Wi-Fi systems, ceiling access points or outdoor-rated access points to make sure coverage reaches where you need it.",
      ],
    },
    {
      title: "Respect for the Roof Matters",
      paragraphs: [
        "Roof work carries risk, and a great installer respects your property. Walking on tiled roofs incorrectly can crack tiles and cause leaks. On Colorbond roofs, careless movement can leave scratches or dents.",
        "Good installers use appropriate safety equipment, walk in the right areas and avoid unnecessary trips across fragile surfaces. They leave the property clean, intact and undamaged.",
      ],
    },
    {
      title: "Communication Is Part of the Installation",
      paragraphs: [
        "Good communication is central to a positive experience. Great installers explain your options, recommend mounting locations and discuss costs upfront.",
        "During the job, they keep you updated and explain any changes to the plan. After the installation, they show you how to use the Starlink app, answer questions and provide advice on future upgrades or troubleshooting.",
      ],
    },
    {
      title: "Clean Workmanship Speaks for Itself",
      paragraphs: [
        "Quality installations are easy to spot. Look for straight conduit runs, neat cable management, secure fixings and clean finishes.",
        "A clean work area and attention to detail show pride in the job, but they also help with long-term reliability and easier maintenance. Many good installers showcase their work in galleries because the results speak for themselves.",
      ],
    },
    {
      title: "A Good Installer Supports You After Installation",
      paragraphs: [
        "Your relationship with a great installer should not end when the dish is online. They stay available for router advice, mesh network expansion, Wi-Fi troubleshooting and future upgrades.",
        "As Starlink technology develops, they can recommend practical improvements so the system continues to perform well. Ongoing support is a key differentiator. Do not settle for an installer who disappears after payment.",
      ],
    },
    {
      title: "Case Study: Pickering Brook Starlink Upgrade",
      paragraphs: [
        "A recent installation in Pickering Brook involved upgrading a customer's older Starlink Gen 2 system to the latest Gen 3 hardware.",
        "The existing dish location already provided an excellent view of the sky, so the focus was on replacing the hardware with a stronger, future-ready installation while keeping the cable routing neat and weatherproof.",
        "The router location was also reviewed to improve Wi-Fi coverage throughout the home and leave room for future expansion if additional access points or mesh Wi-Fi are ever required.",
        "As with all installations, the system was fully tested before completion to confirm reliable connectivity, optimal dish placement and strong wireless performance.",
        "The result was a tidy installation with improved Wi-Fi coverage throughout the home and a modern Gen 3 Starlink system ready for future expansion if the customer's needs change.",
      ],
    },
    {
      title: "Companies Offering Starlink Installation in Perth",
      paragraphs: [
        "If you are comparing installers, consider experience, communication, reviews and workmanship, not just price. Some companies currently offering Starlink installation in Perth include:",
      ],
      bullets: [
        "Blake Smart Solutions: complete installations including mounting, cable management and Wi-Fi optimisation.",
        "Perth Home Services: Andrew offers Starlink installation along with a range of residential services.",
        "Jim's Antennas: national franchise providing Starlink installation in many areas.",
        "Antennas Perth: communications and antenna specialist also offering Starlink installations.",
        "Skysignal: provides Starlink installations for residential and rural properties across parts of WA.",
      ],
    },
    {
      title: "Questions to Ask Any Starlink Installer",
      paragraphs: [
        "To make sure you are getting the right installer, do not be afraid to ask practical questions before booking.",
      ],
      bullets: [
        "Are you ACMA registered?",
        "How do you choose the mounting location?",
        "Do you use the Starlink obstruction tool?",
        "Will you conceal cables where practical?",
        "Can you improve Wi-Fi inside the house?",
        "Do you install on tile, Colorbond and rural properties?",
        "Can you extend Wi-Fi to sheds or granny flats?",
        "Do you provide support after the installation?",
      ],
    },
    {
      title: "Final Thoughts",
      paragraphs: [
        "A Starlink dish can be installed in an hour. A great Starlink installation is designed to deliver reliable internet, protect your home and perform well for years to come.",
        "Choose an installer who values planning, workmanship, communication and support so your Starlink investment pays off in the long term. The best installers combine technical skill with care, clarity and ongoing support.",
      ],
    },
  ],
  relatedArticles: [
    {
      title: "How To Set Up Starlink In WA",
      description:
        "A step-by-step look at dish placement, roof mounting, cable routing, router setup and common Starlink installation mistakes.",
      href: "/articles/starlink-setup-wa",
    },
    {
      title: "Is Starlink Worth It? A Perth Installer's Honest Opinion",
      description:
        "A practical guide to when Starlink makes sense, when it doesn't, and what Perth households should consider before buying.",
      href: "/articles/is-starlink-worth-it",
    },
  ],
  finalCta: {
    eyebrow: "Need a careful install?",
    title: "Looking for a professional Starlink installer?",
    description:
      "If you want Starlink installed properly, feel free to get in touch. We can help with mounting, cable routing, app setup, Wi-Fi coverage and tidy workmanship.",
    buttonLabel: "Get in touch about Starlink",
  },
};
