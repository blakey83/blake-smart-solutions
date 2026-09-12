export type WifiSitelinkText =
  | string
  | (string | { text: string; href: `/${string}` })[];

export type WifiSitelinkPage = {
  slug: string;
  metadata: { title: string; description: string };
  h1: string;
  subhead: string;
  bullets: string[];
  heroCtaLines: string[];
  enquiryName: string;
  heroImage: string;
  heroImageAlt: string;
  review: { quote: string; author: string };
  problem: { title: string; paragraphs: string[] };
  solution: {
    title: string;
    paragraphs: WifiSitelinkText[];
    points: WifiSitelinkText[];
  };
  installationGallery?: {
    eyebrow: string;
    title: string;
    intro: string;
    images: {
      image: string;
      imageAlt: string;
      title: string;
      caption: string;
      fit?: "cover" | "top";
    }[];
  };
  useCases: { title: string; description: WifiSitelinkText }[];
  whyProperly: { title: string; paragraphs: string[] };
  proof: {
    image: string;
    imageAlt: string;
    title: string;
    intro: string;
    problem: string;
    solution: string;
    result: string;
  };
  faqs: { question: string; answer: string }[];
  finalTitle: string;
};

const sharedReview = {
  quote:
    "...very very helpful in helping you get the best solution for your home... (they) answer all your questions. Highly recommend!",
  author: "Dhanushke Fernando · Google review",
};

export const wifiSitelinkPages: WifiSitelinkPage[] = [
  {
    slug: "wifi-access-point-installation",
    metadata: {
      title: "Wi-Fi Access Point Installation Perth | Blake Smart Solutions",
      description:
        "Professional Wi-Fi access point installation in Perth for reliable whole-home and workplace coverage. Designed, cabled, configured and tested.",
    },
    h1: "Get Reliable Wi-Fi Where Your Router or Mesh Falls Short",

    subhead:
      "Professionally installed access points provide strong, consistent Wi-Fi in the rooms where one router or a collection of mesh units keeps falling short.",

    bullets: [
      "Strong, consistent coverage in the rooms where you actually need it",
      "Reliable wired access points without depending on wireless mesh backhaul",
      "One consistent Wi-Fi network for phones, TVs, cameras and work devices",
      "Better performance for video calls, streaming and work without the jitter of weak wireless backhaul",
      "A cleaner long-term solution than adding more boosters or mesh units around the building",
      "Installed, configured and tested so you know the coverage works before we leave",
    ],

    heroCtaLines: [
      "Tell us where the network isn’t reaching and what you need connected.",
      "We’ll come back with a clear quote for the right solution.",
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
  },
  {
    slug: "internet-to-sheds-workshops",
    metadata: {
      title:
        "Internet to Sheds & Workshops Perth | Wireless Bridge Installation",
      description:
        "Get reliable internet to a detached shed, workshop or granny flat in Perth with a professionally installed wireless bridge, access point or data link.",
    },
    h1: "Get Reliable Internet to Your Shed or Workshop",

    subhead:
      "Extend your home or business network to a detached building without relying on weak Wi-Fi from the house.",

    bullets: [
      "Reliable connectivity across the yard or between detached buildings",
      "The right solution for your property — wireless bridge or cabling where appropriate",
      "Get dependable internet inside the shed or workshop, not just a weak signal at the doorway",
      "Run workstations, cameras, TVs and smart equipment without relying on weak Wi-Fi",
      "Avoid relying on boosters or mesh units that struggle across distance and external walls",
      "Installed, aligned, configured and tested end to end",
    ],
    heroCtaLines: [
      "Tell us roughly how far the building is from the house and what you need connected.",
      "We’ll come back with a clear quote for the right way to get the network there.",
    ],
    enquiryName: "Internet to Sheds & Workshops",
    heroImage:
      "/images/solutions/wifi/shed-building-link/detached-sheds-distance.webp",
    heroImageAlt:
      "Detached sheds and workshops across a large property connected by a wireless network link",
    review: sharedReview,
    problem: {
      title: "The signal reaches the yard—but not the building",
      paragraphs: [
        "Your shed, workshop or granny flat is only a short distance away, yet the house Wi-Fi becomes unusable once the doors close. Extenders near a window might show signal bars, but speeds collapse and cameras or work devices keep going offline.",
        "If this is happening, this page is for you. Detached buildings need a dependable connection between locations, not a stronger version of the same weak indoor signal.",
      ],
    },
    solution: {
      title: "Create a dedicated link between the buildings",
      paragraphs: [
        [
          "Where there is a suitable line of sight, a pair of outdoor wireless bridge units can carry the network from the main building to the shed. Inside, we can add an ",
          {
            text: "access point",
            href: "/wifi-solutions-perth/wifi-access-point-installation",
          },
          " or wired outlets so the connection is useful where you work.",
        ],
        [
          "Where trenching or an existing conduit makes more sense, we can recommend a ",
          {
            text: "suitable cabled approach",
            href: "/wifi-solutions-perth/data-cabling",
          },
          ". The goal is the same: a stable connection at the other end, not just signal at the doorway.",
        ],
      ],
      points: [
        "Site and line-of-sight assessment",
        "Outdoor-rated bridge equipment and secure mounting",
        "Indoor Wi-Fi or data points at the destination",
        "Alignment, configuration and end-to-end testing",
      ],
    },
    installationGallery: {
      eyebrow: "What gets installed",
      title: "A dedicated outdoor link aimed between the buildings",
      intro:
        "Instead of trying to stretch normal indoor Wi-Fi across the yard, you get purpose-built outdoor equipment mounted with a clear path to the destination. The link is aligned, configured and tested before Wi-Fi or wired connections are added inside the shed.",
      images: [
        {
          image:
            "/images/solutions/wifi/shed-building-link/roof-mounted-wireless-bridge.webp",
          imageAlt:
            "Outdoor wireless bridge securely mounted on a metal roof to connect another building",
          title: "Securely mounted for a clear signal path",
          caption:
            "The bridge is positioned above common obstructions, fixed to a suitable mount and connected with protected outdoor cabling for a tidy, dependable link.",
        },
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
      image:
        "/images/solutions/wifi/shed-building-link/wireless-bridge-close-up.webp",
      imageAlt:
        "Close-up of a professionally mounted outdoor wireless bridge with protected cabling",
      title: "Outdoor equipment installed for long-term use",
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
  },
  {
    slug: "outdoor-wifi-installation",
    metadata: {
      title: "Outdoor Wi-Fi Installation Perth | Patios, Pools & Yards",
      description:
        "Professional outdoor Wi-Fi installation in Perth for patios, pools, yards and outdoor work areas using correctly positioned, outdoor-rated access points.",
    },
    h1: "Reliable Wi-Fi for Patios, Pools, Yards & Outdoor Areas",

    subhead:
      "Keep phones, speakers, cameras and smart equipment connected after you step outside—not just when you stand by the back door.",

    bullets: [
      "Strong, reliable Wi-Fi across the outdoor areas you actually use",
      "Stay connected around patios, pools, gardens, yards and outdoor workspaces",
      "Keep cameras, speakers, gates and smart devices reliably online",
      "Use phones, tablets and laptops outside without hovering near the back door",
      "Reduce weak signal, dead spots and frustrating dropouts beyond the building",
      "Enjoy consistent coverage where you need it, with the finished network tested before we leave",
    ],
    heroCtaLines: [
      "Tell us roughly how big the yard, farm or outdoor area is and what you need connected.",
      "We’ll come back with a clear quote for reliable Wi-Fi coverage.",
    ],
    enquiryName: "Outdoor Wi-Fi Installation",
    heroImage: "/images/products/wifi/outdoor_ap.png",
    heroImageAlt:
      "Outdoor access point installed beside a covered entertaining area",
    review: sharedReview,
    problem: {
      title: "Your Wi-Fi stops at the walls",
      paragraphs: [
        "Streaming works in the living room, then buffers on the patio. Pool equipment, cameras or speakers disconnect. You can see the house network outside, but it is too weak to use reliably unless you stay close to a window or door.",
        "If this is happening, this page is for you. External brick, glazing, insulation and distance can reduce an indoor router’s signal long before it reaches the area you want to use.",
      ],
    },
    solution: {
      title: "Broadcast from outside, toward the area that needs coverage",
      paragraphs: [
        [
          "We install an outdoor-rated access point in a position selected for the patio, pool, garden, yard or work zone you want connected. A ",
          {
            text: "wired connection back to the network",
            href: "/wifi-solutions-perth/data-cabling",
          },
          " gives the unit a stable foundation, while suitable mounting and cable protection help it cope with the environment.",
        ],
        [
          "You get practical coverage where people and devices are located—including compatible Wi-Fi cameras installed on sheds, gates, driveways or other positions away from the house—without leaving consumer mesh hardware outdoors or hoping the indoor router pushes through another wall. If you are also planning ",
          {
            text: "security camera installation",
            href: "/security-cameras-perth",
          },
          ", we can account for camera positions and the most suitable network connections.",
        ],
        [
          "For a detached building that needs its own connection, a ",
          {
            text: "dedicated wireless bridge to the shed or workshop",
            href: "/wifi-solutions-perth/internet-to-sheds-workshops",
          },
          " may be more suitable than general yard coverage.",
        ],
      ],
      points: [
        "Outdoor coverage and mounting assessment",
        "Suitable weather-rated access point",
        "Neat protected cabling and power delivery",
        "Network security, configuration and coverage testing",
      ],
    },
    installationGallery: {
      eyebrow: "Outdoor coverage done properly",
      title: "Wi-Fi broadcast from outside, toward the area you need",
      intro:
        "Your outdoor access point is mounted where it can serve the yard rather than fighting through the home’s exterior walls. This creates a stronger network foundation for entertaining areas, smart equipment and compatible Wi-Fi cameras positioned away from the house.",
      images: [
        {
          image:
            "/images/solutions/wifi/outdoor-installations/outdoor-access-point-close-up.webp",
          imageAlt:
            "Close-up of an outdoor-rated Wi-Fi access point securely mounted above a yard",
          title: "Purpose-built outdoor equipment",
          caption:
            "Outdoor-rated hardware is securely mounted in a position chosen for the target area, with the connection routed back to the main network.",
        },
        {
          image:
            "/images/solutions/wifi/outdoor-installations/outdoor-access-point-home.webp",
          imageAlt:
            "Outdoor Wi-Fi access point mounted on a home to provide coverage across the surrounding property",
          title: "Coverage beyond the back door",
          caption:
            "The access point broadcasts from outside the building so patios, gardens, driveways and compatible cameras farther from the house can receive a more useful signal.",
        },
      ],
    },
    useCases: [
      {
        title: "Patios and alfresco areas",
        description:
          "Music, streaming and everyday browsing while entertaining.",
      },
      {
        title: "Pools and gardens",
        description:
          "Connectivity for phones, controllers and smart equipment.",
      },
      {
        title: "Large backyards",
        description: "Useful coverage farther from the rear wall of the home.",
      },
      {
        title: "Cameras away from the house",
        description:
          "Extend coverage to compatible Wi-Fi cameras on sheds, gates, driveways and other remote positions.",
      },
      {
        title: "Commercial yards",
        description: [
          "Extend your ",
          {
            text: "business Wi-Fi network",
            href: "/wifi-solutions-perth/business-wifi-installation",
          },
          " to tablets, scanners and staff work areas.",
        ],
      },
    ],
    whyProperly: {
      title: "Why an indoor mesh node under the eaves is not the same",
      paragraphs: [
        "Indoor equipment may not be designed for Perth heat, moisture, dust or UV exposure. Even if it is protected from rain, it still needs a strong connection back to the router and must be positioned for the required coverage—not simply near the nearest power point.",
        "Outdoor-rated hardware, protected cabling and deliberate placement produce a safer, tidier and more predictable installation. We also test in the target area instead of assuming that visible signal bars mean a usable connection.",
      ],
    },
    proof: {
      image: "/images/solutions/wifi/shed-wireless-bridge.webp",
      imageAlt:
        "Outdoor-rated wireless equipment installed by Blake Smart Solutions",
      title: "Outdoor equipment mounted for the job",
      intro:
        "BSS uses purpose-suited outdoor wireless equipment and secure mounting where connectivity has to extend beyond the building envelope.",
      problem:
        "Indoor Wi-Fi could not provide a dependable path to the outdoor destination.",
      solution:
        "Outdoor-rated wireless hardware was mounted clear of common obstructions and connected with protected cabling.",
      result:
        "The wireless connection starts from a position designed for the area it needs to serve.",
    },
    faqs: [
      {
        question: "Is an outdoor access point weatherproof?",
        answer:
          "We select outdoor-rated equipment suited to the installation location. Correct mounting, cable entry and weather protection are still important, so the full installation—not only the device rating—needs to be considered.",
      },
      {
        question: "How much of my yard can outdoor Wi-Fi cover?",
        answer:
          "Coverage depends on the access point, placement, obstructions, property shape and what performance you need at the edges. We plan around named target areas rather than promising a generic distance.",
      },
      {
        question:
          "Can outdoor Wi-Fi connect cameras installed away from the house?",
        answer:
          "Yes. An outdoor access point can extend coverage toward compatible Wi-Fi cameras on sheds, gates, driveways and other remote positions. We check the camera location and required signal path first, and will recommend a wired or point-to-point connection instead if that would be more reliable.",
      },
      {
        question: "Will it use the same Wi-Fi name as inside?",
        answer:
          "Usually it can. We can configure the outdoor access point as part of the same network, subject to compatibility with your existing equipment.",
      },
      {
        question: "Do you install around pools?",
        answer:
          "Yes, we can plan coverage for pool and entertaining areas. Equipment placement and cabling must be chosen with the site conditions and electrical safety requirements in mind.",
      },
    ],
    finalTitle: "Want Wi-Fi that keeps working beyond the back door?",
  },
  {
  slug: "business-wifi-installation",
  metadata: {
    title: "Business Wi-Fi & Network Installation Perth | Blake Smart Solutions",
    description:
      "Business Wi-Fi and network installation in Perth. Site assessments, staff and guest networks, cabling and links between buildings, with local support.",
  },
  h1: "Business Wi-Fi & Networks That Keep Your Site Connected",
  subhead:
    "Connect your staff, customers and essential systems with a network designed around your property. Blake Smart Solutions plans, installs and tests business Wi-Fi and networking across Perth, with local help after handover.",
  bullets: [
    "Help staff work without recurring Wi-Fi dropouts and dead spots",
    "Connect offices, workshops, customer areas and separate buildings",
    "Give POS systems, cameras and business devices a reliable network foundation",
    "Keep guest Wi-Fi separate from your business network",
    "Plan for the devices and work areas you need today, with room to expand",
    "Get a clear scope, tested installation and practical handover",
  ],
  heroCtaLines: [
    "Tell us about your site, the problems you’re experiencing and any changes you’re planning.",
    "We’ll discuss what you need and arrange a site assessment where required, with any assessment costs agreed beforehand.",
  ],
  enquiryName: "Business Wi-Fi & Network Assessment",
  heroImage: "/images/solutions/wifi/busy_office.png",
  heroImageAlt: "Office workspaces served by a business Wi-Fi network",
  review: {
    quote: "Good communication and clean work.",
    author: "Mark Lumacang · Google review",
  },
  problem: {
    title: "Your staff have a business to run. Wi-Fi problems keep interrupting it.",
    paragraphs: [
      "Payments drop out at the counter. Video calls break up in the meeting room. The workshop has barely any signal, and someone keeps restarting the router. As the business grows, extra devices and quick fixes can leave you with a network that is difficult to rely on or troubleshoot.",
      "The next step is to understand where the problem starts: the incoming internet connection, the equipment, the cabling or the wireless coverage. That gives you a clear basis for deciding what needs fixing, what can stay and where an upgrade will make a difference.",
    ],
  },
  solution: {
    title: "One network plan for the way your site works",
    paragraphs: [
      "We start with your layout, the people using the network and the systems that depend on it. That includes busy periods, coverage between buildings and any plans to add work areas, cameras or guest access.",
      [
        "From there, we scope the network your site needs: appropriately placed ",
        {
          text: "Wi-Fi access points",
          href: "/wifi-solutions-perth/wifi-access-point-installation",
        },
        ", suitable network equipment, ",
        { text: "data cabling", href: "/wifi-solutions-perth/data-cabling" },
        " and wireless links where appropriate. We can work with your existing internet service and retain equipment that is suitable for the agreed design.",
      ],
      "You receive a clear installation scope, an agreed plan for any interruptions and testing in the areas that matter to your business. We explain the finished setup and discuss how to arrange help afterwards.",
    ],
    points: [
      "Site assessment, fault finding and network design",
      "Business Wi-Fi, network equipment and structured cabling",
      "Separate staff, guest and device networks where required",
      "Outdoor coverage and connections between buildings",
      "Coverage and connectivity testing against the agreed scope",
      "Handover and local support by arrangement",
    ],
  },
  useCases: [
    {
      title: "Workshops and warehouses",
      description:
        "Extend connectivity from the office into work bays, storage areas and yards, with a design that accounts for metal structures, racking and the devices in use.",
    },
    {
      title: "Offices and consulting rooms",
      description:
        "Support everyday work across desks, meeting rooms and reception, with separate guest access and wired connections where they make sense.",
    },
    {
      title: "Retail, cafés and hospitality",
      description:
        "Plan connectivity around counters, ordering devices, staff areas and customers, keeping guest access separate from business systems.",
    },
    {
      title: "Accommodation and guest properties",
      description:
        "Plan guest Wi-Fi around rooms, shared spaces and outdoor areas, taking the property layout, expected usage and available internet capacity into account.",
    },
    {
      title: "Sites with separate buildings",
      description:
        "Connect offices, sheds and outbuildings using suitable cabling or wireless links, including sites with an existing NBN or Starlink service.",
    },
  ],
  whyProperly: {
    title: "Design for a busy working day—and the next stage of your business",
    paragraphs: [
      "A signal on a phone is only part of the picture. Your network also needs enough capacity for the people and devices using it, suitable connections between equipment and coverage where work actually happens. A faster internet plan alone may not resolve problems within the site.",
      "Planning those elements together helps you make better upgrade decisions. If you expect to add staff, expand into another building or install more cameras, we can account for that in the design and explain what can be staged over time.",
    ],
  },
  proof: {
    image: "/images/work_gallery/wifi_survey.jpeg",
    imageAlt: "On-site Wi-Fi assessment",
    title: "Check the site. Agree the scope. Test the result.",
    intro:
      "A useful assessment connects what you experience day to day with the conditions on site. It helps establish what needs to change and how the finished installation should be checked.",
    problem:
      "Identify where connectivity breaks down, which devices are affected and when the problems occur.",
    solution:
      "Review the existing setup, check the relevant work areas and plan equipment and connections around the findings.",
    result:
      "Test the agreed coverage areas and key connections at handover, explain any remaining limitations and show you how to arrange further help.",
  },
  faqs: [
    {
      question: "Can you fix our existing network, or do we need to replace everything?",
      answer:
        "We assess what is already installed and what is causing the problems. Suitable equipment can stay. The recommended scope may involve configuration changes, cabling, extra access points or replacing equipment that no longer meets your needs.",
    },
    {
      question: "Can you work with our existing internet provider or IT company?",
      answer:
        "Yes. We can usually retain your existing internet service and coordinate network changes with your IT provider. We agree who is responsible for each part of the work so the installation fits the systems you already use.",
    },
    {
      question: "Can you separate guest Wi-Fi from our business systems?",
      answer:
        "Yes. With suitable equipment, we can configure separate networks and access rules for staff, guests and connected devices. The design depends on what each group needs to access and which systems should remain isolated.",
    },
    {
      question: "Can you connect workshops, outdoor areas or separate buildings?",
      answer:
        "Yes, subject to the site layout and suitable installation routes. We assess distance, obstructions, power and the intended use before recommending data cabling, outdoor access points or wireless links.",
    },
    {
      question: "Can you improve connectivity for EFTPOS, POS systems and cameras?",
      answer:
        "We can assess and improve the network connection those devices use. Some equipment is better connected by cable. If the fault sits with the device, software or incoming internet service, we explain what we find and where the relevant provider needs to be involved.",
    },
    {
      question: "Can installation be planned around trading hours?",
      answer:
        "We discuss access and any expected interruptions before work starts. Where practical, we stage the installation and agree suitable times for changes that will interrupt connectivity. Scheduling is confirmed as part of the scope.",
    },
    {
      question: "How much does a business network installation cost?",
      answer:
        "The cost depends on your layout, existing equipment, cabling requirements, coverage areas and the number of users and devices. We start with a discussion, agree any assessment costs before a visit and provide a written scope and quote before installation.",
    },
    {
      question: "What support is available after installation?",
      answer:
        "At handover, we explain the setup and how to contact Blake Smart Solutions for further help. Follow-up troubleshooting, changes and maintenance can be arranged, with availability and any charges confirmed when you book. Standard installation does not include continuous monitoring or 24/7 support.",
    },
  ],
  finalTitle: "Let’s plan a better network for your business",
},

  {
    slug: "data-cabling",
    metadata: {
      title: "Data Cabling Perth | Homes & Small Businesses",
      description:
        "Professional Cat6 data cabling for Perth homes and small businesses. Neat, tested network points for offices, TVs, access points, cameras and NBN equipment.",
    },
    h1: "Professional Data Cabling for Homes & Small Businesses",
    subhead:
      "Create permanent, reliable network connections for the devices and Wi-Fi equipment that should not depend on a weak wireless signal.",
    bullets: [
      "Give TVs, computers, access points and network equipment a fast, stable wired connection",
      "Stop important devices relying on weak or congested Wi-Fi",
      "Add network points exactly where you need them now, with future expansion in mind",
      "Create a reliable backbone for Wi-Fi access points, cameras and other connected equipment",
      "Know every new connection has been tested before the job is finished",
      "Get compliant cabling work completed by an ACMA-registered, fully insured cabler",
    ],
    heroCtaLines: [
      "Tell us how many data points you need, where you want them and what they’ll be connecting.",
      "We’ll come back with a clear and concise quote for the cabling work.",
    ],
    enquiryName: "Data Cabling",
    heroImage: "/images/solutions/wifi/ceiling-mounted-access-point.webp",
    heroImageAlt:
      "Cabled ceiling-mounted network access point installed in Perth",
    review: {
      quote:
        "Daniel did a great job installing my setup and helped me out to route another data cable while he was at it. Recommended, thank you.",
      author: "Alan Star · Google review",
    },
    problem: {
      title: "Some connections should not be left to Wi-Fi",
      paragraphs: [
        "A home office drops out during meetings, the TV buffers, a camera is unreliable or the router is stuck in the wrong room because that is where the NBN connection happens to be. Temporary cables trail along skirting boards while extenders try to fill the gaps.",
        "If this is happening, this page is for you. A permanent wired connection can remove the weakest wireless hop and put the network where the equipment actually lives.",
      ],
    },
    solution: {
      title: "Install a reliable wired backbone",
      paragraphs: [
        [
          "We plan and install Cat6 cabling between the router, network equipment and the points that need a dependable connection. That may be a wall outlet in an office, a feed for a ",
          {
            text: "ceiling access point",
            href: "/wifi-solutions-perth/wifi-access-point-installation",
          },
          ", a camera location or a link between the NBN equipment and a better router position.",
        ],
        "The improvement is simple: fixed devices get a stable connection, Wi-Fi equipment gets a proper backbone and the installation is neat, labelled where appropriate and tested before handover.",
      ],
      points: [
        "Cat6 data points and equipment links",
        "Cabling for Wi-Fi access points and cameras",
        "Router and NBN equipment relocation pathways",
        "Termination, testing and tidy handover",
      ],
    },
    useCases: [
      {
        title: "Home offices",
        description: "A fixed connection for computers, docks and video calls.",
      },
      {
        title: "TV and gaming areas",
        description: "Reliable links for streaming devices and consoles.",
      },
      {
        title: "Wi-Fi access points",
        description:
          "Power and data where coverage equipment should be mounted.",
      },
      {
        title: "CCTV systems",
        description: [
          "Network pathways for compatible ",
          {
            text: "wired cameras and recorders",
            href: "/security-cameras-perth",
          },
          ".",
        ],
      },
      {
        title: "Small business workstations",
        description: [
          "Permanent outlets for desks, printers and operational equipment as part of your ",
          {
            text: "business Wi-Fi network",
            href: "/wifi-solutions-perth/business-wifi-installation",
          },
          ".",
        ],
      },
      {
        title: "Renovations and fit-outs",
        description: "Cabling planned while routes are accessible.",
      },
    ],
    whyProperly: {
      title: "Why the cheapest cable run can cost more later",
      paragraphs: [
        "Data cabling is part of the building’s telecommunications infrastructure. Poor cable selection, tight bends, bad terminations, proximity to electrical services or an untested link can create intermittent faults that are frustrating to diagnose after walls are closed.",
        "Registered cabling work uses suitable materials, compliant routes and proper termination. Testing confirms that the finished link works—not just that two plugs were attached to a cable.",
      ],
    },
    proof: {
      image: "/images/solutions/wifi/ceiling-mounted-access-point.webp",
      imageAlt:
        "Neatly installed access point using a concealed data connection",
      title: "The cabling is what makes the clean finish possible",
      intro:
        "This actual BSS access point installation is fed through the building rather than by a loose patch lead across the room. The visible device is only the final part of the network path.",
      problem:
        "The equipment needed a reliable connection at the correct coverage location.",
      solution:
        "A data path was provided to a discreet ceiling position, then the access point was mounted and configured.",
      result:
        "The equipment has a permanent wired backbone and a clean, practical finish.",
    },
    faqs: [
      {
        question: "What type of data cable do you install?",
        answer:
          "Cat6 is suitable for many current home and small-business installations. We confirm the environment, cable length and intended equipment before specifying the final cable and components.",
      },
      {
        question: "Can you add data points to an existing home?",
        answer:
          "Often, yes. Roof access, wall construction, floor level and the desired outlet locations affect possible routes. We assess the property and explain any limitations before work proceeds.",
      },
      {
        question: "Do you test the data points?",
        answer:
          "Yes. Installed links are terminated and tested so faults can be identified before handover.",
      },
      {
        question: "Can you move my router to a better location?",
        answer:
          "We can often provide the cabling needed to place the router or Wi-Fi equipment in a more useful location, while accounting for the NBN connection and existing network equipment.",
      },
      {
        question: "Is Blake Smart Solutions a registered cabler?",
        answer:
          "Yes. BSS carries out telecommunications cabling through an ACMA-registered cabler and is fully insured.",
      },
      {
        question: "Can data cabling improve Wi-Fi?",
        answer:
          "Yes. Cabling can feed access points in better locations and remove the need for wireless backhaul. It also moves fixed devices off Wi-Fi, leaving the wireless network to serve mobile devices.",
      },
    ],
    finalTitle: "Need reliable data points in the right places?",
  },
];

export const wifiSitelinkPagesBySlug = Object.fromEntries(
  wifiSitelinkPages.map((page) => [page.slug, page]),
) as Record<string, WifiSitelinkPage>;
