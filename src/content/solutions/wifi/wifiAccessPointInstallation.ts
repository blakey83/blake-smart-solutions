import type { SolutionPageTemplateProps } from "@/components/solutions/types";
import { wifiSolutionContent } from "../wifiSolutionContent";
import { solutionParagraphs, solutionText } from "../solutionText";

export const wifiAccessPointInstallation: SolutionPageTemplateProps = {
  ...wifiSolutionContent,
  currentPath: "/wifi-solutions-perth/wifi-access-point-installation",
  headline:
    "Reliable Wi-Fi Where You Need It, With Professionally Installed Access Points",
  subHeadline:
    "We install Wi-Fi access points in Perth homes and small businesses, planning their placement around your property and handling the cabling, configuration and coverage testing.",
  heroEyebrow: "WI-FI ACCESS POINT INSTALLATION · PERTH",
  heroBackgroundImage:
    "/images/solutions/wifi/attadale-access-points/ceiling-ap-wooden-cabinet.webp",
  heroSocialProof: {
    ...wifiSolutionContent.heroSocialProof,
    quote:
      "A big thank you to Daniel from Blake Smart Solutions. His communication was excellent, he was on time, and he went above and beyond to help us with our data connections.",
    author: "Mark Anthony",
  },
  bulletPoints: [
    "Reliable WiFi coverage throughout your home",
    "Neatly installed access points with professional cabling.",
    "Configured and coverage-tested before we leave.",
  ],
  heroCtaLines: [
    "",
    "Leave your details and we’ll get back to you with a free quote.",
  ],
  primaryCta: {
    label: "Get a free quote today",
    action: "enquiry",
    enquiryProductName: "Wi-Fi Access Point Installation",
    enquiryDefaultMessage:
      "I’d like a quote for wi-fi access point installation. The area or connection I need help with is: ",
  },
  featureSections: [
    {
      eyebrow: "THE RIGHT SOLUTION FOR YOUR PROPERTY",
      title: "Put the Wi-Fi signal where people actually need it",
      intro: solutionParagraphs([
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
      ]),
      points: [
        "Coverage assessment and access point placement",
        [
          {
            text: "Cat6 cabling",
            href: "/wifi-solutions-perth/data-cabling",
          },
          " and neat mounting where required",
        ],
        "Network name, security and roaming configuration",
        "Coverage and performance testing in the problem areas",
      ].map(solutionText),
      image:
        "/images/solutions/wifi/attadale-access-points/wall-mounted-access-point.webp",
      imageAlt:
        "Discreet wall-mounted Wi-Fi access point installed by Blake Smart Solutions",
    },
    {
      eyebrow: "What you get",
      title: "Coverage from the right position",
      intro: solutionParagraphs([
        "Your access points are positioned around the rooms that need better coverage, installed without loose cables or equipment sitting on furniture, and tested in the areas you need to use.",
        "Access points are mounted high and clear where they can serve the surrounding rooms, with no loose power lead or network cable visible in the space.",
      ]),
      points: [],
      image:
        "/images/solutions/wifi/attadale-access-points/ceiling-ap-hallway.webp",
      imageAlt:
        "Discreet ceiling-mounted Wi-Fi access point installed near a hallway",
      imageFit: "cover",
      imageAspect: "landscape",
    },
    {
      eyebrow: "What you get",
      title: "Performance checked before handover",
      intro: solutionParagraphs([
        "We test the finished Wi-Fi in the agreed areas and confirm how it performs before handover. Your result will depend on your internet service, equipment and test location.",
      ]),
      points: [],
      image:
        "/images/solutions/wifi/attadale-access-points/speed-test-501mbps.webp",
      imageAlt:
        "Wi-Fi speed test showing 501 Mbps download, 47 Mbps upload and 4 ms ping after installation",
      imageFit: "top",
      imageAspect: "portrait",
    },
    {
      eyebrow: "REAL INSTALLATION",
      title: "A tidy finish that does not take over the room",
      intro: solutionParagraphs([
        "Where a ceiling position is not the best fit, a discreet wall-mounted access point can deliver coverage from inside the room without a mesh unit sitting on furniture or a loose cable running to a power point.",
        "Why another range extender often disappoints",
        "A plug-in extender can only repeat the signal it receives. Put it in a dead zone and it repeats a poor connection; put it closer to the router and it may still not reach the room that needs help. Multiple consumer units can also leave devices stuck to the wrong node.",
        "A cabled access point starts with a reliable connection and broadcasts from a position chosen for coverage. Placement, cable path and configuration all matter more than simply buying a more expensive router.",
      ]),
      points: [
        "The rooms you use are beyond reliable reach of the existing router, leaving weak signal and frustrating dropouts.",
        "Ceiling or wall-mounted access points are placed in suitable positions and configured as part of one consistent network.",
        "You get Wi-Fi broadcast from where coverage is needed, discreet hardware and measured performance before the job is handed over.",
      ],
      image:
        "/images/solutions/wifi/attadale-access-points/wall-mounted-access-point.webp",
      imageAlt:
        "Discreet wall-mounted Wi-Fi access point installed by Blake Smart Solutions",
    },
  ],
  problemSolutionEyebrow: "WHERE WE CAN HELP",
  problemSolutionTitle: "One router is being asked to cover too much",
  problemSolutionIntro:
    "The Wi-Fi is fine near the router, but bedrooms, offices or the far end of the building are slow, patchy or constantly dropping out. You may already have extenders or mesh nodes scattered around, yet calls still freeze and devices cling to a weak signal. If this is happening, this page is for you. The issue is often coverage and placement—not the speed coming into the property.",
  problemSolutionCards: [
    {
      title: "Large or two-storey homes",
      problem: "",
      solution: solutionText(
        "Reliable coverage across bedrooms, studies and living areas.",
      ),
    },
    {
      title: "Home offices",
      problem: "",
      solution: solutionText(
        "More stable video calls and cloud-based work away from the router.",
      ),
    },
    {
      title: "Renovations and new builds",
      problem: "",
      solution: solutionText(
        "A clean wired Wi-Fi backbone planned before walls and ceilings are finished.",
      ),
    },
    {
      title: "Busy households",
      problem: "",
      solution: solutionText(
        "Better coverage for streaming, gaming, smart devices and security systems.",
      ),
    },
  ],
  faqsTitle: "Wi-Fi Access Point Installation FAQs",
  faqsIntro: "Common questions about wi-fi access point installation in Perth.",
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
  finalCtaTitle: "Ready for reliable Wi-Fi in the rooms that matter?",
  finalCtaIntro:
    "Tell us which areas need WiFi and whether you already have equipment or cabling.  Get a clear installation quote, with any site assessment requirements explained upfront.",
  finalCtaButton: {
    label: "Get a connectivity quote",
    action: "enquiry",
    enquiryProductName: "Wi-Fi Access Point Installation",
    enquiryDefaultMessage:
      "I’d like a quote for wi-fi access point installation. The area or connection I need help with is: ",
  },
};
