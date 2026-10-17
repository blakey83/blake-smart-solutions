import type { WorkShowcaseContent } from "@/lib/types";

export const recentWifiInstallationsContent: WorkShowcaseContent = {
  eyebrow: "Recent Wi-Fi Installations",
  title: "Real Wi-Fi solutions for Perth homes",
  description:
    "From detached sheds to large family homes, these recent installations show how the right network design can deliver reliable connectivity without compromising how a property looks or works.",
  finalCtaDescription:
    "If you can tell us where your internet doesn’t reach, we can give you a quote for the right solution.",

  completedJobs: [
    {
      title: "Reliable internet for a workshop, office and the entire property",
      location: "Oakford, WA",
      description:
        "A carpenter in Oakford had started his own business, working from a large shed on his property with a dedicated office inside. But with no reliable internet reaching the shed and poor 5G coverage in the area, getting connected was a real challenge.\n\nWe installed a wireless bridge to bring the home's existing internet connection across to the shed, then added a wireless access point for dependable Wi-Fi throughout the workshop and a wired Ethernet connection for the office.\n\nWe also installed an outdoor wireless access point on the house roof, extending coverage across the property for future security cameras and gate connectivity — and letting the owner stream music while mowing the lawn.",
      outcome:
        "The result: a connected workshop and office, reliable outdoor Wi-Fi, and a network ready to support the growing business and property.",
      image: {
        src: "/images/work-photos/WiFi/oakford-workshop-outdoor-wifi.webp",
        alt: "Roof-mounted outdoor wireless access point overlooking the workshop on an Oakford property",
      },
    },
    {
      title: "Fast NBN, but weak Wi-Fi in the home office",
      location: "Alkimos, WA",
      description:
        "A family in Alkimos had recently upgraded to a superfast 1 Gbps NBN plan, but their home office at the back of the house was still struggling with poor Wi-Fi coverage. The internet connection was fast — the wireless signal simply wasn't reaching where they needed it.\n\nWe installed a discreet, ceiling-mounted wireless access point to extend reliable Wi-Fi coverage to the rear of the home, helping the family make better use of their new NBN connection.",
      outcome:
        "The result: stronger, more reliable Wi-Fi in the home office, without having to move closer to the router to get connected.",
      image: {
        src: "/images/work-photos/WiFi/alkimos-ceiling-wifi-access-point.webp",
        alt: "Discreet ceiling-mounted wireless access point extending Wi-Fi coverage to the home office in an Alkimos home",
      },
    },
    {
      title: "One well-placed access point fixed Wi-Fi for the whole family",
      location: "Kallaroo, WA",
      description:
        "The family had two different Wi-Fi problems in the same home. The kids were struggling with Roblox in the front room, while Mum was having Teams meetings drop out — not ideal when you’re trying to work professionally from home.\n\nThe existing Telstra NBN connection was fine. The problem was simply getting reliable Wi-Fi into the part of the house where it was needed.\n\nA single, carefully positioned ceiling-mounted access point was connected back to the existing Telstra system, extending strong coverage into the weak area without replacing everything they already had.",
      outcome:
        "The result: stable Teams calls, happier kids, and reliable Wi-Fi where the family actually uses it.",
      image: {
        src: "/images/work-photos/WiFi/kallaroo-ceiling-wifi-access-point.webp",
        alt: "Ceiling-mounted Wi-Fi access point extending coverage in a Kallaroo family home",
      },
    },
    {
      title: "Reliable internet for a backyard shed",
      location: "Wanneroo, WA",
      description: [
        "The owner had built a shed for his toys, TV and music system, but the house network didn’t reach and mobile coverage was patchy. A ",
        {
          text: "dedicated wireless bridge",
          href: "/wifi-solutions-perth/internet-to-sheds-workshops",
        },
        " brought the home network across to the shed, giving him reliable connectivity for streaming and connected devices.",
      ],
      outcome:
        "Now he can put the TV or music on, crack a beer and actually enjoy the shed without fighting a weak connection.",
      image: {
        src: "/images/work-photos/WiFi/wanneroo-shed-wireless-bridge.webp",
        alt: "View across a Wanneroo property to a detached shed connected by a wireless bridge",
      },
    },
    {
      title: "Fast, reliable Wi-Fi across a large family home",
      location: "Hocking, WA",
      description: [
        "A husband and wife running their plumbing business from home both needed reliable internet in different parts of a large family house. The Telstra router provided a fast connection, but its Wi-Fi couldn’t cover the whole building. Two ",
        {
          text: "hardwired ceiling access points",
          href: "/wifi-solutions-perth/wifi-access-point-installation",
        },
        " extended that connection throughout the home, giving the family strong coverage and speeds of up to 500 Mbps where they actually work and use the network.",
      ],
      outcome:
        "No moving closer to the router for work. No weak rooms. The fast internet they were already paying for became usable across the whole home.",
      image: {
        src: "/images/work-photos/WiFi/hocking-ceiling-wifi-access-points.webp",
        alt: "Hardwired ceiling-mounted Wi-Fi access point installed in a Hocking family home",
      },
    },
    {
      title: "A home network designed properly from day one",
      location: "Attadale, WA",
      description: [
        "With a newly built home, the owner wanted reliable connectivity built around how the property would actually be used rather than depending on one router after moving in. The finished network provides ",
        {
          text: "consistent Wi-Fi throughout the home",
          href: "/wifi-solutions-perth/wifi-access-point-installation",
        },
        ", ",
        {
          text: "wired connections",
          href: "/wifi-solutions-perth/data-cabling",
        },
        " for equipment that benefits from a permanent link, and a separate network connection in the office for sensitive work requirements.",
      ],
      outcome:
        "Instead of trying to fix coverage and cabling problems later, the home started with the network infrastructure already in the right places.",
      image: {
        src: "/images/work-photos/WiFi/attadale-home-network.webp",
        alt: "Ceiling-mounted Wi-Fi access point forming part of a complete home network in Attadale",
      },
    },
    {
      title: "Better Wi-Fi without ceiling-mounted access points",
      location: "Kelmscott, WA",
      description: [
        "The customer wanted stronger Wi-Fi coverage but didn’t want access points visible on the ceilings of her home. ",
        {
          text: "Wall-mounted access points",
          href: "/wifi-solutions-perth/wifi-access-point-installation",
        },
        " provided a more discreet installation while still delivering the coverage and performance she needed.",
      ],
      outcome:
        "She didn’t have to choose between better Wi-Fi and the look of her home.",
      image: {
        src: "/images/work-photos/WiFi/kelmscott-wall-mounted-access-point.webp",
        alt: "Discreet wall-mounted Wi-Fi access point installed in a Kelmscott home",
      },
    },
  ],
};
