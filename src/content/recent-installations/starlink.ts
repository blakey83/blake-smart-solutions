import type { WorkShowcaseContent } from "@/lib/types";

export const recentStarlinkInstallationsContent: WorkShowcaseContent = {
  eyebrow: "Recent Starlink Installations",
  title: "Real Starlink installations across Perth",
  description:
    "From rural properties to commercial premises, these are a few recent Starlink installations completed by Blake Smart Solutions across Perth and surrounding areas.",

  completedJobs: [
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
        "After the customer's existing Gen 2 Starlink system failed, the business was left without reliable internet access. We supplied and installed an upgraded Starlink system, restoring connectivity quickly and helping minimise disruption to daily operations.",
      image: {
        src: "/images/work-photos/Starlink/yangebub.jpg",
        alt: "Upgraded Starlink installation for a business in Yangebup",
      },
    },
  ],
};
