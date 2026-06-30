type ArticleSubsection = {
  title: string;
  paragraphs?: string[];
};

type ArticleSection = {
  title: string;
  paragraphs?: string[];
  subsections?: ArticleSubsection[];
};

export const starlinkVsNbnPerthContent: {
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
  pagePath: "/articles/starlink-vs-nbn-perth",
  pageTitle: "Starlink vs NBN: Which Is Better in Perth?",
  pageDescription:
    "Compare Starlink and NBN in Perth across speed, reliability, latency, cost, installation and real-world use cases for homes and businesses.",
  publishedTime: "2026-06-30",
  modifiedTime: "2026-06-30",
  hero: {
    eyebrow: "Starlink guide",
    intro:
      "Access to fast, reliable internet is now more essential than ever for work, study and entertainment. In Australia, two of the most prominent internet solutions are the National Broadband Network and Starlink.",
    image: {
      src: "/images/products/starlink/Starlink.jpg",
      alt: "Starlink dish installed for a Perth internet connection",
    },
  },
  summary:
    "For most urban and suburban Australians with access to fibre or high-quality NBN, the NBN remains the best-value, highest-performance choice. However, for people in rural, remote or underserved areas, Starlink can be a breakthrough, offering speeds and reliability previously unavailable through traditional fixed-line or fixed-wireless services.",
  images: [
    {
      src: "/images/products/wifi/tplink-deco-x55-pro-stack-side.avif",
      alt: "Home network equipment used with NBN or Starlink internet",
    },
    {
      src: "/images/how_to/Starlink/serpie_install.jpg",
      alt: "Starlink dish mounted on a roof for a clear sky view",
    },
    {
      src: "/images/how_to/Starlink/speed_test.png",
      alt: "Starlink speed test result after setup",
    },
    {
      src: "/images/products/wifi/x55_mesh.jpeg",
      alt: "Mesh Wi-Fi system for improving home internet coverage",
    },
    {
      src: "/images/how_to/Starlink/starlink_kit.webp",
      alt: "Starlink kit ready for installation",
    },
    {
      src: "/images/solutions/wifi/wifi_testing.jpg",
      alt: "Wi-Fi testing for a home internet connection",
    },
    {
      src: "/images/work-photos/Starlink/yangebub.jpg",
      alt: "Completed Starlink installation on a Perth property",
    },
  ],
  sections: [
    {
      title: "Introduction",
      paragraphs: [
        "Choosing between NBN and Starlink can be challenging, especially since each service has particular benefits and drawbacks depending on your location, needs and priorities. This article compares NBN and Starlink across key categories to help you make an informed decision.",
      ],
    },
    {
      title: "When NBN Is Better",
      paragraphs: [
        "While Starlink has gained a lot of attention, NBN still outshines it in several important scenarios. Here's where NBN holds the advantage.",
      ],
      subsections: [
        {
          title: "FTTP NBN",
          paragraphs: [
            "Fibre to the Premises is the gold standard of NBN technology. With FTTP, internet signals travel directly to your home via high-speed fibre optic cables. This infrastructure is capable of delivering gigabit speeds, ultra-low latency and generally excellent reliability.",
            "FTTP is ideal for households or businesses requiring the highest performance for tasks such as 4K streaming, large file uploads or professional-grade video conferencing.",
          ],
        },
        {
          title: "Stable high-speed plans",
          paragraphs: [
            "NBN's high-speed plans, especially on FTTP, HFC and some FTTN or FTTC connections, offer consistent and stable download and upload speeds. Unlike satellite services, these plans are not subject to weather interference or the same degree of crowding during peak times.",
          ],
        },
        {
          title: "Lower monthly cost",
          paragraphs: [
            "In many cases, NBN plans, particularly on lower and mid-tier speed tiers, are less expensive than Starlink's monthly fee. For cost-conscious households, the ability to choose from a range of price points and plans can be a real benefit.",
          ],
        },
        {
          title: "Better latency for some users",
          paragraphs: [
            "Latency is generally lower on fixed-line NBN services than on satellite internet. This matters for gamers, video callers and anyone who values live responsiveness. While Starlink's latency is impressive for satellite internet, fibre-based NBN still tends to offer more consistent low-latency performance.",
          ],
        },
      ],
    },
    {
      title: "When Starlink Is Better",
      paragraphs: [
        "Starlink is a breakthrough for Australians living where typical broadband options fall short. Here's when Starlink shines.",
      ],
      subsections: [
        {
          title: "Rural and semi-rural properties",
          paragraphs: [
            "For properties located far from urban infrastructure, Starlink provides high-speed internet access where NBN fixed-line or fixed-wireless may not reach or perform well. The satellite constellation covers most of Australia, making it available to people who previously had no viable broadband options.",
          ],
        },
        {
          title: "Poor fixed wireless NBN",
          paragraphs: [
            "Some users on NBN fixed wireless experience slow speeds, dropouts and unreliable connections, especially during peak periods or in areas with line-of-sight issues. Starlink bypasses these limitations and often delivers dramatically better speed and reliability.",
          ],
        },
        {
          title: "Slow copper-based connections",
          paragraphs: [
            "Many rural or outer-suburban properties are still served by legacy copper networks such as FTTN or ADSL. These connections can be prone to slow speeds and signal weakening over distance. Starlink offers a modern alternative with much faster speeds and more consistent performance.",
          ],
        },
        {
          title: "Properties with limited provider options",
          paragraphs: [
            "In some regions, only a small number of NBN providers offer service, which can mean fewer plan options. Starlink offers a more universal option at a standard price, giving consumers more choice and flexibility.",
          ],
        },
        {
          title: "Business backup internet",
          paragraphs: [
            "Businesses that depend on uninterrupted connectivity often use Starlink as a backup to their primary NBN connection. If the NBN drops out, Starlink can help keep key operations online.",
          ],
        },
      ],
    },
    {
      title: "Speed Comparison",
      paragraphs: [
        "FTTP NBN can deliver speeds up to 1,000 Mbps for downloads, though most households choose 50-100 Mbps plans due to price. Starlink typically offers download speeds between 50-250 Mbps and upload speeds between 10-40 Mbps.",
        "While Starlink's speeds are impressive for a satellite network, they may vary due to network traffic or weather conditions. NBN fixed-line connections, particularly FTTP and HFC, provide more stable speeds, while copper-based NBN and fixed wireless can be slower than Starlink in poorly serviced areas.",
      ],
    },
    {
      title: "Reliability Comparison",
      paragraphs: [
        "NBN reliability varies greatly depending on the connection type. FTTP and HFC are generally very reliable, while FTTN, FTTC and fixed wireless can be affected by infrastructure issues, distance or congestion.",
        "Starlink can be affected by weather, including intense rain, which may cause brief dropouts. However, for people in areas with unreliable NBN, Starlink may offer a steadier connection overall. Both services can have occasional planned maintenance and rare unplanned outages.",
      ],
    },
    {
      title: "Latency and Gaming",
      paragraphs: [
        "Low latency is vital for activities like online gaming, video calls and other live applications. FTTP NBN can deliver latency as low as 3-10 ms, while Starlink usually ranges from 30-50 ms.",
        "This is a huge upgrade over traditional satellite internet, which can exceed 600 ms, but it may still be noticeable for competitive gamers. For most everyday tasks, Starlink's latency is more than adequate, but for the lowest latency needs, fibre-based NBN is superior.",
      ],
    },
    {
      title: "Cost Comparison",
      paragraphs: [
        "Starlink now offers several residential plans to match different households. Residential plans start from $75 per month for speeds up to 100 Mbps, with a 200 Mbps plan at $110 per month and the Residential Max plan at $150 per month. Customers can either purchase the Starlink hardware outright, typically around $599 AUD, or rent the standard kit from Starlink for $15 per month.",
        "By comparison, NBN plans generally start at around $60-$70 per month for entry-level speeds, while 100 Mbps and faster plans typically range from $90 to $140 per month, depending on the provider and available technology.",
        "If your property has access to a reliable FTTP connection, the NBN will often be the more affordable choice. However, for households limited to slower technologies such as FTTN, fixed wireless or unreliable alternative networks, many customers find Starlink's performance and reliability outweigh the additional equipment or installation costs.",
      ],
    },
    {
      title: "Installation Comparison",
      paragraphs: [
        "NBN installation depends on the technology type and property. FTTP installations may require a technician visit and can take several weeks to schedule, while FTTN and FTTC may be self-installed or activated remotely. Fixed wireless or satellite NBN can take longer in remote areas.",
        "Starlink's installation is largely self-service. Users receive a kit with a dish, modem and mounting hardware and can be online within hours of delivery. This convenience is a major advantage, especially for remote properties, but a professional install is often worthwhile when roof mounting, cable routing or weatherproofing is involved.",
      ],
    },
    {
      title: "Wi-Fi Still Matters",
      paragraphs: [
        "Regardless of whether you choose NBN or Starlink, the quality of your home Wi-Fi setup plays a vital role in your overall internet experience. A modern router, proper placement and, if necessary, Wi-Fi extenders or mesh systems can help maximise speeds and coverage throughout your home.",
        "Many complaints about slow internet are actually due to local Wi-Fi limitations, not the connection itself.",
      ],
    },
    {
      title: "Case Study: Upgrading a Home Network in Byford",
      paragraphs: [
        "One recent installation in Byford was for a FIFO worker who was frustrated with the internet options available at his property. Although the home was connected via the Opticomm network rather than the NBN, the connection was not delivering the reliable performance he needed for online gaming, streaming and multiple devices being used at the same time.",
        "After discussing how the household used the internet, Starlink was selected as the best solution. The dish was mounted on the roof in a position that provided a clear view of the sky, while the main Starlink router was installed neatly in the garage to keep the equipment protected and close to the cable entry point.",
        "To improve wireless coverage throughout the home, a Starlink Mini was also installed in the kitchen and configured as a mesh node. This extended strong Wi-Fi coverage into the main living areas without the need for additional third-party networking equipment.",
        "The result was a fast, reliable internet connection with considerably improved wireless coverage throughout the property. The customer now has a network capable of supporting streaming, gaming and everyday internet use across multiple devices.",
        "This installation highlights that Starlink is not only for rural properties without internet. In some cases, it can also be the best solution for homeowners with broadband service who want faster, more consistent performance for how they actually use the internet.",
      ],
    },
    {
      title: "So, Should You Choose Starlink or NBN?",
      paragraphs: [
        "The best internet solution depends on your specific circumstances. If you're in an area with access to FTTP or high-quality NBN and do not need the mobility or backup capability of Starlink, the NBN is likely the best choice for cost, speed and reliability.",
        "However, for people in rural, remote or underserved locations, or for those who want a dependable backup connection, Starlink provides a powerful alternative, bringing fast internet to places the NBN cannot reach.",
      ],
    },
    {
      title: "Final Verdict",
      paragraphs: [
        "Australia's internet landscape is more diverse and competitive than ever. For most people in well-serviced areas, NBN remains the top pick, offering affordable, reliable and fast broadband.",
        "Starlink, however, is a breakthrough for those beyond the NBN's reach or facing persistent connectivity issues. By considering your location, needs and priorities, you can choose the internet solution that will serve you best now and into the future.",
      ],
    },
  ],
  relatedArticles: [
    {
      title: "Is Starlink Worth It? A Perth Installer's Honest Opinion",
      description:
        "A practical guide to when Starlink makes sense, when it doesn't, and what Perth households should consider before buying.",
      href: "/articles/is-starlink-worth-it",
    },
    {
      title: "How To Set Up Starlink In WA",
      description:
        "A step-by-step look at dish placement, roof mounting, cable routing, router setup and common Starlink installation mistakes.",
      href: "/articles/starlink-setup-wa",
    },
  ],
  finalCta: {
    eyebrow: "Need a hand?",
    title: "Looking at installing Starlink professionally?",
    description:
      "If you're comparing Starlink and NBN and think Starlink might be the right fit, feel free to get in touch. We can help with dish mounting, cable routing, setup and Wi-Fi coverage.",
    buttonLabel: "Get in touch about Starlink",
  },
};
