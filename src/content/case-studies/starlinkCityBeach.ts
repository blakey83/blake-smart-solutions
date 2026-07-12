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

export const caseStudies = [starlinkCityBeachCaseStudy] as const;
