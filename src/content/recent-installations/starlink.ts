import type { WorkShowcaseContent } from "@/lib/types";

export const recentStarlinkInstallationsContent: WorkShowcaseContent = {
  eyebrow: "Recent Starlink Installations",
  title: "Real Starlink installations across Perth",
  description:
    "From rural properties to commercial premises, these are a few recent Starlink installations completed by Blake Smart Solutions across Perth and surrounding areas.",

  completedJobs: [
    {
      title: "Getting a new family home connected with Starlink",
      location: "Clarkson, WA",
      description:
        "A family had recently moved into their new home in Clarkson but couldn't get the internet connectivity they needed. With unreliable internet making it difficult to get settled, they turned to Starlink for a solution.\n\nWe installed their Starlink dish on the home's Colorbond roof, with secure mounting and neatly protected cabling for a tidy, professional finish.",
      outcome:
        "The result: a professionally installed Starlink system, giving the family a practical way to get connected and enjoy their new home.",
      image: {
        src: "/images/work-photos/Starlink/clarkson-family-home-starlink.webp",
        alt: "Starlink dish securely mounted on a Clarkson home's Colorbond roof with neatly protected cabling",
      },
    },
    {
      title: "Starlink keeps working from home possible in the Perth Hills",
      location: "Darlington, WA",
      description: [
        "A couple had recently moved into their dream home in the hills of Darlington, but reliable internet was proving difficult. NBN had quoted more than $10,000 to connect fibre to the property, leaving them with limited connectivity and the prospect of giving up their work-from-home days.\n\nWith tall trees surrounding the house, finding a suitable location for Starlink was particularly important.\n\nWe carefully assessed the available mounting positions and installed their Starlink dish where it could achieve a clear view of the sky, despite the surrounding tree coverage.\n\nThe installation achieved ",
        { text: "100% connectivity in the obstruction assessment", bold: true },
        ", giving the couple a reliable internet connection without the substantial cost of extending NBN fibre to their home.",
      ],
      outcome:
        "The result: a happy couple who can continue working from their dream home in Darlington, rather than making extra trips to the office.",
      image: {
        src: "/images/work-photos/Starlink/darlington-hills-starlink.webp",
        alt: "Roof-mounted Starlink dish surrounded by tall trees at a home in Darlington in the Perth Hills",
      },
    },
    {
      title: "Reliable Starlink connectivity for a WA port services business",
      location: "Bibra Lake, WA",
      description:
        "A port services business in Bibra Lake needed dependable internet to stay connected with ports and operations throughout Western Australia. Their existing Telstra connection wasn't delivering the reliability they needed for day-to-day business.\n\nWe installed a Starlink system on the roof of their two-storey office building, providing an alternative internet connection for the business.\n\nWorking alongside the company's engineers, we coordinated the installation and network changeover to keep the team working while the new connection was brought online.",
      outcome:
        "The result: a professionally installed Starlink connection, a carefully managed switchover and improved connectivity for a business that depends on staying in touch with operations across WA.",
      image: {
        src: "/images/work-photos/Starlink/bibra-lake-port-services-starlink.webp",
        alt: "Starlink dish professionally mounted on the office roof of a Bibra Lake port services business",
      },
    },
    {
      title: "Reliable internet for working from home",
      location: "Baldivis, WA",
      description:
        "This Baldivis customer needed a reliable internet connection for working from home and wanted the Starlink installation completed before wet weather arrived. We installed the Gen 3 Starlink dish on the roof, routed the cable neatly through conduit, sealed the roof entry properly and completed the system setup and Wi-Fi check before handover. Inside the home, we also fitted a Gen 3 router bracket to keep the router, power supply and cable entry tidy, instead of leaving the equipment loose on a bench or floor. This install is a good example of how Starlink can help customers who need dependable internet for remote work, video calls and everyday household use.",
      image: {
        src: "/images/work-photos/Starlink/baldivis-starlink-work-from-home-card.jpg",
        alt: "Gen 3 Starlink dish roof installation with conduit in Baldivis",
      },
    },

    {
      title: "Upgrading from Gen 2 to Gen 3 Starlink",
      location: "Pickering Brook, WA",
      description:
        "This Pickering Brook customer already had Starlink, but wanted to upgrade from a Gen 2 system to the newer Gen 3 hardware. The existing dish location had a strong view of the sky, so the focus was on replacing the older equipment with a cleaner, more future-ready setup. We installed the Gen 3 Starlink dish in a suitable roof position, tidied the cable route, completed the system setup and checked the connection before handover. This type of upgrade is a good option for customers who already rely on Starlink but want newer hardware, improved router performance and a more permanent installation finish.",
      image: {
        src: "/images/work-photos/Starlink/pickering-brook-gen-3-upgrade-card.jpg",
        alt: "Gen 3 Starlink dish installed on a roof in Pickering Brook",
      },
    },

    {
      title: "Reliable internet where NBN wasn't available",
      location: "Camillo, WA",
      description:
        "A local student was unable to obtain a suitable NBN connection at the property and needed dependable internet for study and everyday use. We installed and configured a Starlink system, providing access to the 200Mbps residential service and a fast, reliable connection.",
      image: {
        src: "/images/work-photos/Starlink/Camillo.jpg",
        alt: "Starlink installation on a residential roof in Camillo",
      },
    },

    {
      title: "Bringing high-speed internet to a rural property",
      location: "Jarrahdale, WA",
      description:
        "This rural property had limited connectivity options and required a more reliable internet solution. A professionally mounted Starlink system delivered fast broadband speeds, improving connectivity for work, streaming and everyday online activities.",
      image: {
        src: "/images/work-photos/Starlink/Jarrahdale.jpg",
        alt: "Starlink installation overlooking a rural property in Jarrahdale",
      },
    },

    {
      title: "Commercial installation on a seven-metre structure",
      location: "Morley, WA",
      description:
        "A business customer required Starlink mounted high above surrounding obstacles to achieve a clear view of the sky. We completed the installation on a seven-metre structure, providing reliable connectivity while maintaining a professional and secure installation.",
      image: {
        src: "/images/work-photos/Starlink/morley.jpg",
        alt: "Commercial Starlink installation in Morley",
      },
    },

    {
      title: "Business back online after equipment failure",
      location: "Yangebup, WA",
      description:
        "After the customer's existing Gen 2 Starlink system failed, the business was left without reliable internet access. We installed an upgraded Starlink system, restoring connectivity quickly and helping minimise disruption to daily operations.",
      image: {
        src: "/images/work-photos/Starlink/yangebub.jpg",
        alt: "Upgraded Starlink installation for a business in Yangebup",
      },
    },
  ],
};
