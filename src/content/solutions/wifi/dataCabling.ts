import type { SolutionPageTemplateProps } from "@/components/solutions/types";
import { wifiSolutionContent } from "../wifiSolutionContent";
import { solutionParagraphs, solutionText } from "../solutionText";

export const dataCabling: SolutionPageTemplateProps = {
  ...wifiSolutionContent,
  currentPath: "/wifi-solutions-perth/data-cabling",
  headline: "Professional Data Cabling for Homes & Small Businesses",
  subHeadline: "Create permanent, reliable network connections for the devices and Wi-Fi equipment that should not depend on a weak wireless signal.",
  heroEyebrow: "DATA CABLING · PERTH",
  heroBackgroundImage: "/images/solutions/wifi/ceiling-mounted-access-point.webp",
  heroSocialProof: {
    ...wifiSolutionContent.heroSocialProof,
    quote: "Daniel did a great job installing my setup and helped me out to route another data cable while he was at it. Recommended, thank you.",
    author: "Alan Star",
  },
  bulletPoints: [
    "Give TVs, computers, access points and network equipment a fast, stable wired connection",
    "Stop important devices relying on weak or congested Wi-Fi",
    "Add network points exactly where you need them now, with future expansion in mind",
    "Create a reliable backbone for Wi-Fi access points, cameras and other connected equipment",
    "Know every new connection has been tested before the job is finished",
    "Get compliant cabling work completed by an ACMA-registered, fully insured cabler"
  ],
  heroCtaLines: [
    "Tell us how many data points you need, where you want them and what they’ll be connecting.",
    "We’ll come back with a clear and concise quote for the cabling work."
  ],
  primaryCta: {
    label: "Get a connectivity quote",
    action: "enquiry",
    enquiryProductName: "Data Cabling",
    enquiryDefaultMessage: "I’d like a quote for data cabling. The area or connection I need help with is: "
  },
  featureSections: [
    {
      eyebrow: "THE RIGHT SOLUTION FOR YOUR PROPERTY",
      title: "Install a reliable wired backbone",
      intro: solutionParagraphs([
        [
          "We plan and install Cat6 cabling between the router, network equipment and the points that need a dependable connection. That may be a wall outlet in an office, a feed for a ",
          {
            text: "ceiling access point",
            href: "/wifi-solutions-perth/wifi-access-point-installation"
          },
          ", a camera location or a link between the NBN equipment and a better router position."
        ],
        "The improvement is simple: fixed devices get a stable connection, Wi-Fi equipment gets a proper backbone and the installation is neat, labelled where appropriate and tested before handover.",
        [
          "See our ",
          {
            text: "Darlington network installation",
            href: "/case-studies/starlink-wifi-wireless-bridge-darlington"
          },
          " for an example of wired connections linking the house access points to a central switch, alongside a wireless bridge to the detached shed."
        ]
      ]),
      points: [
        "Cat6 data points and equipment links",
        "Cabling for Wi-Fi access points and cameras",
        "Router and NBN equipment relocation pathways",
        "Termination, testing and tidy handover"
      ].map(solutionText),
      image: "/images/solutions/wifi/ceiling-mounted-access-point.webp",
      imageAlt: "Neatly installed access point using a concealed data connection",
    },
    {
      eyebrow: "REAL INSTALLATION",
      title: "The cabling is what makes the clean finish possible",
      intro: solutionParagraphs([
        "This actual BSS access point installation is fed through the building rather than by a loose patch lead across the room. The visible device is only the final part of the network path.",
        "Why the cheapest cable run can cost more later",
        "Data cabling is part of the building’s telecommunications infrastructure. Poor cable selection, tight bends, bad terminations, proximity to electrical services or an untested link can create intermittent faults that are frustrating to diagnose after walls are closed.",
        "Registered cabling work uses suitable materials, compliant routes and proper termination. Testing confirms that the finished link works—not just that two plugs were attached to a cable."
      ]),
      points: [
        "The equipment needed a reliable connection at the correct coverage location.",
        "A data path was provided to a discreet ceiling position, then the access point was mounted and configured.",
        "The equipment has a permanent wired backbone and a clean, practical finish."
      ],
      image: "/images/solutions/wifi/ceiling-mounted-access-point.webp",
      imageAlt: "Neatly installed access point using a concealed data connection",
    },
  ],
  problemSolutionEyebrow: "WHERE WE CAN HELP",
  problemSolutionTitle: "Some connections should not be left to Wi-Fi",
  problemSolutionIntro: "A home office drops out during meetings, the TV buffers, a camera is unreliable or the router is stuck in the wrong room because that is where the NBN connection happens to be. Temporary cables trail along skirting boards while extenders try to fill the gaps. If this is happening, this page is for you. A permanent wired connection can remove the weakest wireless hop and put the network where the equipment actually lives.",
  problemSolutionCards: [
    { title: "Home offices", problem: "", solution: solutionText("A fixed connection for computers, docks and video calls.") },
    { title: "TV and gaming areas", problem: "", solution: solutionText("Reliable links for streaming devices and consoles.") },
    { title: "Wi-Fi access points", problem: "", solution: solutionText("Power and data where coverage equipment should be mounted.") },
    { title: "CCTV systems", problem: "", solution: solutionText([
        "Network pathways for compatible ",
        {
          text: "wired cameras and recorders",
          href: "/security-cameras-perth"
        },
        "."
      ]) },
    { title: "Small business workstations", problem: "", solution: solutionText([
        "Permanent outlets for desks, printers and operational equipment as part of your ",
        {
          text: "business Wi-Fi network",
          href: "/wifi-solutions-perth/business-wifi-installation"
        },
        "."
      ]) },
    { title: "Renovations and fit-outs", problem: "", solution: solutionText("Cabling planned while routes are accessible.") },
  ],
  faqsTitle: "Data Cabling FAQs",
  faqsIntro: "Common questions about data cabling in Perth.",
  faqs: [
    {
      question: "What type of data cable do you install?",
      answer: "Cat6 is suitable for many current home and small-business installations. We confirm the environment, cable length and intended equipment before specifying the final cable and components."
    },
    {
      question: "Can you add data points to an existing home?",
      answer: "Often, yes. Roof access, wall construction, floor level and the desired outlet locations affect possible routes. We assess the property and explain any limitations before work proceeds."
    },
    {
      question: "Do you test the data points?",
      answer: "Yes. Installed links are terminated and tested so faults can be identified before handover."
    },
    {
      question: "Can you move my router to a better location?",
      answer: "We can often provide the cabling needed to place the router or Wi-Fi equipment in a more useful location, while accounting for the NBN connection and existing network equipment."
    },
    {
      question: "Is Blake Smart Solutions a registered cabler?",
      answer: "Yes. BSS carries out telecommunications cabling through an ACMA-registered cabler and is fully insured."
    },
    {
      question: "Can data cabling improve Wi-Fi?",
      answer: "Yes. Cabling can feed access points in better locations and remove the need for wireless backhaul. It also moves fixed devices off Wi-Fi, leaving the wireless network to serve mobile devices."
    }
  ],
  finalCtaTitle: "Need reliable data points in the right places?",
  finalCtaIntro: "Tell us how many data points you need, where you want them and what they’ll be connecting. We’ll come back with a clear and concise quote for the cabling work.",
  finalCtaButton: {
    label: "Get a connectivity quote",
    action: "enquiry",
    enquiryProductName: "Data Cabling",
    enquiryDefaultMessage: "I’d like a quote for data cabling. The area or connection I need help with is: "
  },
};
