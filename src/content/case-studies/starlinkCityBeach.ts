export type CaseStudySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
};

export type CaseStudyContent = {
  slug: string;
  pagePath: string;
  pageTitle: string;
  pageDescription: string;
  keywords: string[];
  publishedTime: string;
  modifiedTime: string;
  eyebrow: string;
  location: string;
  service: string;
  hero: {
    title: string;
    intro: string;
    image: {
      src: string;
      alt: string;
      caption: string;
    };
  };
  summary: string;
  details: {
    label: string;
    value: string;
  }[];
  sections: CaseStudySection[];
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
};

export const starlinkCityBeachCaseStudy: CaseStudyContent = {
  slug: "starlink-installation-city-beach-gen-3-router-bracket",
  pagePath: "/case-studies/starlink-installation-city-beach-gen-3-router-bracket",
  pageTitle:
    "Starlink Installation in City Beach with a Neat Gen 3 Router Bracket Finish",
  pageDescription:
    "A City Beach Starlink Gen 3 installation with secure roof mounting, tidy cable routing and a neat internal router bracket finish.",
  keywords: [
    "Starlink installation City Beach",
    "Starlink installer Perth",
    "Starlink Gen 3 router bracket",
    "Starlink roof mount Perth",
    "two storey Starlink installation",
  ],
  publishedTime: "2026-07-12T09:00:00+08:00",
  modifiedTime: "2026-07-12T09:00:00+08:00",
  eyebrow: "Case Study",
  location: "City Beach, WA",
  service: "Starlink Gen 3 installation",
  hero: {
    title: "A cleaner Starlink install for a City Beach home",
    intro:
      "A good Starlink installation is not only about getting the dish onto the roof. The outside needs to be mounted properly, the cable needs to be routed and sealed properly, and the inside of the home should not be left looking like an afterthought.",
    image: {
      src: "/images/case-studies/starlink-city-beach/roof-install.jpg",
      alt: "Starlink Gen 3 dish mounted on a two-storey City Beach roof",
      caption:
        "The Starlink Gen 3 dish mounted on the two-storey City Beach home.",
    },
  },
  summary:
    "We completed a Starlink Gen 3 installation in City Beach where the internal finish was a major part of the job. The customer wanted the system installed properly, with the router, power supply and cable entry kept neat inside the home.",
  details: [
    {
      label: "Location",
      value: "City Beach",
    },
    {
      label: "Property",
      value: "Two-storey home",
    },
    {
      label: "System",
      value: "Customer-supplied Starlink Gen 3 kit",
    },
    {
      label: "Finish",
      value: "Router, power supply and cable entry on a dedicated bracket",
    },
  ],
  sections: [
    {
      title: "The City Beach Starlink installation",
      paragraphs: [
        "This was a two-storey home, so it needed more planning than a basic single-storey install.",
        "The goal was to mount the Starlink Gen 3 dish securely on the roof, choose a location with a clear view of the sky, route the cable neatly back inside, and avoid leaving the router and power supply loose on a bench or floor.",
        "With two-storey properties, roof access, cable path and weatherproofing all need to be thought through before the job starts. It is not the kind of install where you want to rush the dish onto the nearest easy spot and hope for the best.",
        "For this job, the dish was mounted in a suitable roof position and the cable was brought inside to a practical router location.",
      ],
    },
    {
      title: "Why the internal finish matters",
      paragraphs: [
        "A neat Starlink installation is not just about what happens on the roof. The internal finish matters too.",
        "If the cable enters the home and the router is left sitting loose on a bench, the job can still feel unfinished. The Starlink Gen 3 router and power supply are not tiny, and once the cable is inside the house, it is easy for the setup to look messy.",
        "For this City Beach install, we used a Starlink Gen 3 router bracket to keep the router, power supply and excess cable together in one tidy location.",
      ],
      bullets: [
        "router left loose on a kitchen bench",
        "power supply sitting on the floor",
        "excess cable looped around the room",
        "visible cable entry point",
        "no clear place for the equipment to live",
      ],
      image: {
        src: "/images/case-studies/starlink-city-beach/router-bracket.jpg",
        alt: "Starlink Gen 3 router and power supply mounted neatly on an internal bracket",
        caption:
          "The Gen 3 router bracket keeps the router, power supply and cable entry together in one tidy location.",
      },
    },
    {
      title: "The Gen 3 router bracket",
      paragraphs: [
        "The Gen 3 router bracket gives the internal part of the install a much cleaner finish.",
        "The bracket holds both the Starlink router and the power supply. It also allows excess cable to be tucked behind the bracket, which helps avoid the usual loose cable mess.",
        "Where suitable, the bracket can also be installed over the antenna cable entry point. That means the cable can come through the wall behind the bracket, rather than leaving a visible entry point or a loose cable running across the room.",
        "It is a small part of the install, but it makes a noticeable difference.",
      ],
      bullets: [
        "kitchens",
        "studies",
        "living rooms",
        "garages",
        "home offices",
        "rental properties",
        "holiday homes",
        "any area where the router needs to be visible but tidy",
      ],
    },
    {
      title: "Two-storey Starlink installs need more planning",
      paragraphs: [
        "Two-storey Starlink installations are not the same as a simple ground-level or single-storey setup.",
        "There is more to consider, including roof access, ladder position, fall risk, dish location, cable route and weatherproofing. In coastal suburbs like City Beach, the install also needs to be tidy and durable, not just quick.",
        "A rushed install can leave you with a poor dish location, ugly cable run, awkward router position or a cable entry that does not look right inside the home.",
        "On this project, the aim was to keep the install practical, safe and tidy from the roof through to the router.",
      ],
    },
    {
      title: "The final result",
      paragraphs: [
        "The finished result was a clean Starlink Gen 3 installation with the dish mounted securely outside and the router installed neatly inside on a dedicated bracket.",
        "The router, power supply and cable entry were kept together in one location, with no loose router sitting on the bench and no obvious cable mess around the room.",
        "It is a good example of why the small details matter. A Starlink installation should not only work properly. It should also look like it belongs in the home.",
      ],
    },
  ],
  finalCta: {
    eyebrow: "Need Starlink installed in City Beach?",
    title: "Book a professional Starlink installation in Perth",
    description:
      "Blake Smart Solutions installs customer-supplied Starlink kits across Perth, including City Beach and nearby suburbs. Installs can include roof mounting, pole adapters, tidy cable routing, conduit, weatherproof cable entry, router setup, dish alignment, Wi-Fi checks and a neat internal finish.",
    buttonLabel: "Contact Blake Smart Solutions",
    buttonHref: "/enquiry",
  },
};

export const starlinkOakfordCaseStudy: CaseStudyContent = {
  slug: "starlink-installation-oakford-poor-nbn-fixed-wireless",
  pagePath: "/case-studies/starlink-installation-oakford-poor-nbn-fixed-wireless",
  pageTitle:
    "Starlink Installation in Oakford After Poor NBN Fixed Wireless Performance",
  pageDescription:
    "An Oakford Starlink installation for a rural property that needed a more reliable internet connection for working from home, streaming and remote camera access.",
  keywords: [
    "Starlink installation Oakford",
    "Starlink installer Oakford",
    "Starlink installer Perth",
    "NBN Fixed Wireless alternative Oakford",
    "rural Starlink installation Perth",
    "Starlink for security cameras",
    "Starlink roof mount Oakford",
  ],
  publishedTime: "2026-07-12T10:00:00+08:00",
  modifiedTime: "2026-07-12T10:00:00+08:00",
  eyebrow: "Case Study",
  location: "Oakford, WA",
  service: "Rural Starlink installation",
  hero: {
    title: "A practical internet upgrade for a rural Oakford property",
    intro:
      "Some Starlink jobs are about speed. Others are about finally getting a connection that works properly. This Oakford installation was for a customer who wanted more reliable internet for everyday use after poor NBN Fixed Wireless performance.",
    image: {
      src: "/images/case-studies/starlink-oakford/starlink-dish-roof-mount-oakford.jpg",
      alt: "Starlink dish mounted on a roof at a rural Oakford property",
      caption:
        "The Starlink dish mounted externally at the Oakford property for a clearer sky view.",
    },
  },
  summary:
    "The customer needed a connection that could support working from home, video calls, Netflix streaming, normal household use and remote access to their security camera system without the same reliability issues they had been dealing with.",
  details: [
    {
      label: "Location",
      value: "Oakford",
    },
    {
      label: "Property",
      value: "Rural residential property",
    },
    {
      label: "Problem",
      value: "Poor NBN Fixed Wireless performance",
    },
    {
      label: "Goal",
      value: "Reliable internet for work, streaming and camera remote access",
    },
  ],
  sections: [
    {
      title: "The problem: unreliable rural internet",
      paragraphs: [
        "Oakford sits close enough to Perth that people expect decent internet, but far enough out that the available options can still be frustrating.",
        "In this case, the customer's existing connection was not keeping up. The issue was not just one poor speed test. It was the day-to-day reliability.",
        "When the connection is unreliable, normal tasks become harder than they should be.",
      ],
      bullets: [
        "working from home",
        "video calls",
        "streaming Netflix",
        "general household use",
        "remote access to their security camera system",
      ],
    },
    {
      title: "Why Starlink suited this property",
      paragraphs: [
        "Starlink can be a good option for rural and semi-rural homes where NBN Fixed Wireless, older copper connections or mobile broadband are not giving the customer the reliability they need.",
        "It is not always the right answer for every property. If a home has access to good fibre NBN, that will usually still be the better option. But for properties where the available connection is slow, unstable or limited, Starlink can be a very practical upgrade.",
        "For this Oakford property, the objective was simple: install the dish in a suitable location, give it a clear view of the sky, route the cable neatly, and get the customer online with a proper permanent setup.",
      ],
    },
    {
      title: "The installation",
      paragraphs: [
        "This was a standard rural Starlink installation.",
        "The Starlink dish was mounted externally in a location that gave it a clear view of the sky. That matters because trees, rooflines, sheds and nearby structures can all affect Starlink performance.",
        "The cable was routed back to the house neatly, with the aim of keeping the installation practical, tidy and weather-resistant.",
        "On rural properties, the best dish location is not always the easiest location. Trees, sheds, patios, roof angles and cable paths all need to be considered before choosing where the dish should go.",
      ],
      bullets: [
        "clear sky visibility",
        "solid mounting",
        "tidy cable routing",
        "suitable cable entry",
        "reliable system setup",
        "a working Wi-Fi connection inside the home",
      ],
      image: {
        src: "/images/case-studies/starlink-oakford/starlink-dish-install-oakford.jpg",
        alt: "Starlink dish installed on an Oakford roof with trees and outbuildings nearby",
        caption:
          "The dish was positioned with rooflines, nearby trees and the cable path in mind.",
      },
    },
    {
      title: "Why a proper mount matters",
      paragraphs: [
        "A Starlink dish can automatically track satellites, but it still needs to be mounted securely.",
        "Temporary ground setups can be useful for testing the system, but they are not ideal as a long-term solution. On rural blocks, a loose or poorly positioned dish can be affected by wind, animals, lawn equipment, foot traffic or nearby obstructions.",
        "A proper roof or pole-mounted installation helps keep the dish in a better position and reduces the chance of the system being moved, knocked or obstructed.",
        "For this Oakford property, the aim was to give the customer a permanent installation, not a temporary setup that would need to be fixed later.",
      ],
    },
    {
      title: "The result",
      paragraphs: [
        "After the installation, the customer had a more practical internet connection for how they actually used the property.",
        "The real value was not just a speed test number. It was being able to work from home, stream Netflix and check the camera system remotely without the same reliability issues they had before.",
        "That is one of the main reasons Starlink suits some rural and semi-rural homes. It can turn a frustrating internet setup into something much easier to live and work with.",
      ],
    },
    {
      title: "Starlink is not just for remote farms",
      paragraphs: [
        "A lot of people still think Starlink is only for remote stations or properties with no internet at all. That is not really how it is being used around Perth.",
        "Many Starlink installs are in places like Oakford, Jarrahdale, Byford, Pickering Brook, Roleystone and Bedfordale. These are areas where the property may technically have an internet option already, but it is not always good enough for modern use.",
        "If the connection cannot reliably support work, streaming, video calls, smart devices or security cameras, it is reasonable to look at alternatives.",
      ],
    },
  ],
  finalCta: {
    eyebrow: "Need Starlink installed in Oakford?",
    title: "Get a practical Starlink installation quote",
    description:
      "Blake Smart Solutions installs customer-supplied Starlink kits across Oakford and the wider Perth area. Installs can include roof or pole mounting, pole adapters, tidy cable routing, conduit, weatherproof cable entry, system setup, dish alignment, Wi-Fi checks and customer handover.",
    buttonLabel: "Contact Blake Smart Solutions",
    buttonHref: "/enquiry",
  },
};

export const caseStudies = [
  starlinkOakfordCaseStudy,
  starlinkCityBeachCaseStudy,
] as const;
