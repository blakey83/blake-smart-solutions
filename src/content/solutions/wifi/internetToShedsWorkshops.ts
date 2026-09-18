import type { SolutionDetailPage } from "../solutionDetailTypes";
import { sharedReview } from "./sharedReview";

export const internetToShedsWorkshops: SolutionDetailPage = {
  slug: "internet-to-sheds-workshops",
  metadata: {
    title: "Internet to Sheds & Workshops Perth | Wireless Bridge Installation",
    description:
      "Get reliable internet to a detached shed, workshop or granny flat in Perth with a professionally installed wireless bridge, access point or data link.",
  },
  h1: "Get Reliable Internet to Your Shed, Workshop or Granny Flat",

  subhead:
    "Extend your home or business network to a detached shed or workshop, with reliable Wi-Fi inside. Not weak signals leaking across from the house.",

  bullets: [
    "Reliable WiFi inside the building where you need it.",
    "Connect computers, TVs, cameras and everyday devices.",
    "A connection designed around the distance and layout of your property.",
    "Installed, configured and tested from the house to the destination.",
  ],

  heroCtaLines: [
    "Tell us which building needs internet, roughly how far it is from the house, and what you want connected.",
    "Get a clear installation quote, with any assessment requirements explained upfront.",
  ],

  enquiryName: "Internet to Sheds & Workshops",

  heroImage:
    "/images/solutions/wifi/shed-building-link/detached-sheds-distance.webp",

  heroImageAlt: "Detached sheds and workshops across a large property",

  review: sharedReview,
  showInstallationSections: false,

  problem: {
    title: "The signal reaches the yard, but not the building",
    paragraphs: [
      "Your shed, workshop or granny flat may only be a short distance from the house, but once the doors close the Wi-Fi becomes slow, unstable or unusable. Extenders near a window might show signal bars, but speeds drop and cameras, TVs or work devices still struggle to stay connected.",
      "Detached buildings need a proper connection back to the main network, with reliable Wi-Fi delivered inside where it will actually be used.",
    ],
  },

  solution: {
    title:
      "Bring the network to the building, then provide proper Wi-Fi inside",
    paragraphs: [
      [
        "Where there is suitable line of sight, a dedicated outdoor wireless bridge can carry the network from the main building to the shed or workshop. At the destination, a ",
        {
          text: "properly positioned access point",
          href: "/wifi-solutions-perth/wifi-access-point-installation",
        },
        " provides reliable Wi-Fi inside the building, with wired data points available where needed.",
      ],
      [
        "Where an existing conduit or a cabled run makes more sense, the connection can be delivered by a ",
        {
          text: "suitable wired approach",
          href: "/wifi-solutions-perth/data-cabling",
        },
        ". Either way, the outcome is the same: reliable internet inside the shed or workshop, not just a signal arriving at the outside wall.",
      ],
      [
        "See how our ",
        {
          text: "Darlington shed internet project",
          href: "/case-studies/starlink-wifi-wireless-bridge-darlington",
        },
        " used a dedicated wireless bridge to carry the house network to a detached shed, with its own access point inside.",
      ],
    ],
    points: [
      "Site and line-of-sight assessment",
      "Dedicated link between the main building and shed",
      "Wi-Fi access point installed inside the destination building",
      "Wired data points where required",
      "Configuration and end-to-end testing",
    ],
  },

  useCases: [
    {
      title: "Backyard workshops",
      description:
        "Internet for computers, music, smart tools and Wi-Fi calling.",
    },
    {
      title: "Large sheds",
      description:
        "Coverage for cameras, automation and day-to-day connectivity.",
    },
    {
      title: "Granny flats",
      description:
        "A proper connection for streaming, study and everyday devices.",
    },
    {
      title: "Farm and rural buildings",
      description: "Extend Starlink or NBN to nearby working areas.",
    },
    {
      title: "Separate offices",
      description: [
        "Bring the ",
        {
          text: "business network",
          href: "/wifi-solutions-perth/business-wifi-installation",
        },
        " to a detached workspace.",
      ],
    },
  ],
  whyProperly: {
    title: "Why mesh units at the window are unreliable",
    paragraphs: [
      "Mesh systems are designed mainly for coverage within a building. Across a yard, the signal must pass through external walls, metal doors, insulation and open distance before it can be repeated. A weather change, closed roller door or slightly different placement can expose how marginal the link is.",
      "A point-to-point bridge is aimed and configured specifically to carry data between two locations. Correct mounting, clear line of sight and weatherproof cabling are what make that link dependable.",
    ],
  },
  proof: {
    image: "/images/solutions/wifi/darlington/house-to-shed-link.webp",
    imageAlt:
      "Outdoor wireless bridge mounted with protected cabling to connect a detached building",
    title: "From the house towards the shed",
    intro:
      "Your building link is installed as permanent network infrastructure—not balanced near a window or left exposed on a temporary lead.",
    problem:
      "The shed or workshop is outside dependable indoor Wi-Fi range, especially once exterior walls and metal doors sit between it and the router.",
    solution:
      "Outdoor bridge units are securely mounted, aligned and connected to carry the network between the two buildings.",
    result:
      "You get a dedicated network path at the destination, ready for local Wi-Fi, data points, cameras and work equipment.",
  },
  faqs: [
    {
      question: "How far can a wireless bridge reach?",
      answer:
        "A correctly selected bridge can cover much greater distances than normal household Wi-Fi, but clear line of sight, mounting height and local obstructions matter. We assess the actual property before recommending equipment.",
    },
    {
      question: "Do I need to dig a trench?",
      answer:
        "Not necessarily. A wireless bridge can avoid trenching where the two locations have a suitable path. If a physical cable is the better option, we will explain why and what groundwork would be required.",
    },
    {
      question: "Will the shed have Wi-Fi inside?",
      answer:
        "The bridge delivers the network to the shed. We can then install an indoor access point and/or data outlets so phones, computers, cameras and other equipment can connect properly.",
    },
    {
      question: "Can you extend Starlink to a workshop?",
      answer:
        "Yes. Once Starlink is connected at the main building, the local network can be extended to another suitable building using a bridge or cabling.",
    },
    {
      question: "Will metal shed walls block the signal?",
      answer:
        "Metal walls are one reason we terminate the outdoor link at the shed and provide Wi-Fi from an access point inside. Trying to transmit through the wall from the house is usually unreliable.",
    },
  ],
  finalTitle: "Need a dependable connection at the other end of the yard?",
};
