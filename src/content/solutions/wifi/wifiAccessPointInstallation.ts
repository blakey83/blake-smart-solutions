import type { SolutionDetailPage } from "../solutionDetailTypes";
import { sharedReview } from "./sharedReview";

export const wifiAccessPointInstallation: SolutionDetailPage = {
  slug: "wifi-access-point-installation",
  metadata: {
    title: "Wi-Fi Access Point Installation Perth | Blake Smart Solutions",
    description:
      "Professional Wi-Fi access point installation in Perth for reliable whole-home and workplace coverage. Designed, cabled, configured and tested.",
  },
  h1: "Get Reliable WiFi in the Rooms Where You Need It",

  subhead:
    "Professionally installed access points bring strong, consistent WiFi to your home or business. Placement, cabling, setup and testing handled for you.",

  bullets: [
    "Coverage planned around the rooms you actually use.",
    "Reliable connections for video calls, streaming and everyday devices.",
    "Neatly installed equipment and cabling.",
    "Configured and coverage-tested before handover",
  ],

  heroCtaLines: [
    "Tell us which areas need WiFi and whether you already have equipment or cabling. ",
    "Get a clear installation quote, with any site assessment requirements explained upfront.",
  ],
  enquiryName: "Wi-Fi Access Point Installation",
  heroImage:
    "/images/solutions/wifi/attadale-access-points/ceiling-ap-wooden-cabinet.webp",
  heroImageAlt:
    "Discreet ceiling-mounted Wi-Fi access point installed above a wooden cabinet",
  review: sharedReview,
  problem: {
    title: "One router is being asked to cover too much",
    paragraphs: [
      "The Wi-Fi is fine near the router, but bedrooms, offices or the far end of the building are slow, patchy or constantly dropping out. You may already have extenders or mesh nodes scattered around, yet calls still freeze and devices cling to a weak signal.",
      "If this is happening, this page is for you. The issue is often coverage and placement—not the speed coming into the property.",
    ],
  },
  solution: {
    title: "Put the Wi-Fi signal where people actually need it",
    paragraphs: [
      "We assess the layout, identify the weak areas and install properly positioned access points. Where practical, each access point is connected by data cable, giving it a dependable path back to your router instead of asking it to repeat an already weak wireless signal.",
      "The result is wider, more predictable coverage and a network your devices can move across without juggling different Wi-Fi names.",
      [
        "We can also plan ",
        {
          text: "outdoor Wi-Fi",
          href: "/wifi-solutions-perth/outdoor-wifi-installation",
        },
        " for patios and yards, or a ",
        {
          text: "dedicated link to a shed or workshop",
          href: "/wifi-solutions-perth/internet-to-sheds-workshops",
        },
        " when coverage needs to extend beyond the main building.",
      ],
      [
        "See our ",
        {
          text: "Darlington Wi-Fi installation",
          href: "/case-studies/starlink-wifi-wireless-bridge-darlington",
        },
        " for a real example of two wired access points serving the main house and a separate access point providing Wi-Fi inside the shed.",
      ],
    ],
    points: [
      "Coverage assessment and access point placement",
      [
        { text: "Cat6 cabling", href: "/wifi-solutions-perth/data-cabling" },
        " and neat mounting where required",
      ],
      "Network name, security and roaming configuration",
      "Coverage and performance testing in the problem areas",
    ],
  },
  installationGallery: {
    eyebrow: "What you get",
    title: "Clean coverage, with the finished network properly tested",
    intro:
      "Your access points are positioned around the rooms that need better coverage, installed without loose cables or equipment sitting on furniture, and tested in the areas you need to use.",
    images: [
      {
        image:
          "/images/solutions/wifi/attadale-access-points/ceiling-ap-hallway.webp",
        imageAlt:
          "Discreet ceiling-mounted Wi-Fi access point installed near a hallway",
        title: "Coverage from the right position",
        caption:
          "Access points are mounted high and clear where they can serve the surrounding rooms, with no loose power lead or network cable visible in the space.",
      },
      {
        image:
          "/images/solutions/wifi/attadale-access-points/speed-test-501mbps.webp",
        imageAlt:
          "Wi-Fi speed test showing 501 Mbps download, 47 Mbps upload and 4 ms ping after installation",
        title: "Performance checked before handover",
        caption:
          "We test the finished Wi-Fi in the agreed areas and confirm how it performs before handover. Your result will depend on your internet service, equipment and test location.",
        fit: "top",
      },
    ],
  },
  useCases: [
    {
      title: "Large or two-storey homes",
      description:
        "Reliable coverage across bedrooms, studies and living areas.",
    },
    {
      title: "Home offices",
      description:
        "More stable video calls and cloud-based work away from the router.",
    },
    {
      title: "Renovations and new builds",
      description:
        "A clean wired Wi-Fi backbone planned before walls and ceilings are finished.",
    },
    {
      title: "Busy households",
      description:
        "Better coverage for streaming, gaming, smart devices and security systems.",
    },
  ],
  whyProperly: {
    title: "Why another range extender often disappoints",
    paragraphs: [
      "A plug-in extender can only repeat the signal it receives. Put it in a dead zone and it repeats a poor connection; put it closer to the router and it may still not reach the room that needs help. Multiple consumer units can also leave devices stuck to the wrong node.",
      "A cabled access point starts with a reliable connection and broadcasts from a position chosen for coverage. Placement, cable path and configuration all matter more than simply buying a more expensive router.",
    ],
  },
  proof: {
    image:
      "/images/solutions/wifi/attadale-access-points/wall-mounted-access-point.webp",
    imageAlt:
      "Discreet wall-mounted Wi-Fi access point installed by Blake Smart Solutions",
    title: "A tidy finish that does not take over the room",
    intro:
      "Where a ceiling position is not the best fit, a discreet wall-mounted access point can deliver coverage from inside the room without a mesh unit sitting on furniture or a loose cable running to a power point.",
    problem:
      "The rooms you use are beyond reliable reach of the existing router, leaving weak signal and frustrating dropouts.",
    solution:
      "Ceiling or wall-mounted access points are placed in suitable positions and configured as part of one consistent network.",
    result:
      "You get Wi-Fi broadcast from where coverage is needed, discreet hardware and measured performance before the job is handed over.",
  },
  faqs: [
    {
      question: "Is an access point better than mesh Wi-Fi?",
      answer:
        "A wired access point is usually the most reliable option because its connection back to the router does not depend on Wi-Fi. Mesh can still be useful where cabling is impractical. We recommend the option that suits the property rather than forcing one system everywhere.",
    },
    {
      question: "How many access points will I need?",
      answer:
        "That depends on the building size, construction, layout and where you need coverage. We assess those factors and avoid adding more equipment than the job needs.",
    },
    {
      question: "Will I have one Wi-Fi name throughout the property?",
      answer:
        "Usually, yes. We can configure the access points as one consistent network so compatible devices can move between covered areas more smoothly.",
    },
    {
      question: "Do access points need data cabling?",
      answer:
        "A wired connection is preferred for predictable performance. If a cable cannot be installed, we can discuss mesh or wireless-link alternatives and explain the trade-offs.",
    },
    {
      question: "Can you use my existing router or NBN connection?",
      answer:
        "Often we can. We first confirm what equipment you have and whether it can support the proposed access points, then include any required changes in the quote.",
    },
  ],
  finalTitle: "Ready for reliable Wi-Fi in the rooms that matter?",
};
