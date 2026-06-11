import type { SolutionPageTemplateProps } from "@/components/solutions/types";
import { securityProducts } from "./security_products";

export const alarmsSolutionContent: SolutionPageTemplateProps = {
  headline: "Finally, A Security System You'll Actually Use",
  subHeadline:
    "No confusing keypads. No outdated alarm panels. No expensive monitoring contracts. Just smart protection, instant alerts and complete control from your phone.",
  bulletPoints: [
    "Know what's happening at home, even when you're not there",
    "Receive instant alerts the moment something isn't right",
    "Control everything from a simple app that's easy for the whole family to use",
    "Reduce nuisance alarms caused by poor sensor placement and outdated systems",
    "Protect your home with earlier warning and smarter detection",
    "Avoid expensive ongoing monitoring contracts and monthly fees",
  ],

  heroEyebrow: "Attention Perth homeowners",

  heroImage: "/images/solutions/ajaxSecurity/ajax_hero.png",
  heroImageAlt: "Ajax alarm installation by Blake Smart Solutions",

  heroSocialProof: {
    eyebrow: "Google review",
    ratingLabel: "Five star Google review",
    quote: "Good communication and clean workmanship. Highly recommended.",
    author: "Mark Lumacang",
  },

  primaryCta: {
    label: "Book a Free Security Assessment",
    action: "enquiry",
  },

  secondaryCta: {
    label: "Call now for a free quote",
    action: "link",
    href: "tel:0477948079",
  },

  problemSolutionEyebrow: "Problem / Solution",

  problemSolutionTitle: "Why many alarm systems leave people feeling exposed",

  problemSolutionIntro:
    "A good alarm system should help you feel safer, not create more stress. Poorly planned systems often leave gaps around entry points, trigger false alarms, feel frustrating to use or fail to give you confidence when you're away from the property.",

  problemSolutionCards: [
    {
      title: "Worried about break-ins or vulnerable entry points",
      description:
        "Doors, windows, garages, side access and rear areas are often the first places intruders look for easy access. If these areas are not properly considered, the system may leave obvious weak spots that reduce the whole point of having security.",
      image: "/images/solutions/ajaxSecurity/break_in.jpg",
      imageAlt: "Concern about break-ins and vulnerable entry points",
    },

    {
      title: "False alarms that become frustrating",
      description:
        "Poor sensor placement and outdated detectors can lead to nuisance alarms, interruptions and stress. Over time, many people start ignoring alerts or stop using the system properly altogether.",
      image: "/images/solutions/ajaxSecurity/false_alarms.jpg",
      imageAlt: "False alarms causing frustration",
    },

    {
      title: "Alarm systems that are confusing or hard to manage",
      description:
        "If arming, disarming or checking your alarm feels clunky or unreliable, it quickly becomes something you avoid using. A system should feel simple and work properly when you need it.",
      image: "/images/solutions/ajaxSecurity/old-keypad.jpg",
      imageAlt: "Outdated and confusing alarm system",
    },

    {
      title: "No visibility when you're away",
      description:
        "Whether you're at work, travelling or just out for the day, not knowing what is happening at home or at your business can be stressful. Modern alarms should give you instant alerts and clear control wherever you are.",
      image: "/images/solutions/ajaxSecurity/fifo_2.jpg",
      imageAlt: "Outdated and confusing alarm system",
    },

    {
      title: "After-hours risks for workshops and businesses",
      description:
        "Commercial sites often have vulnerable access points, storage areas or internal spaces that need proper after-hours protection. Weak alarm coverage can leave valuable equipment and stock exposed.",
      image: "/images/solutions/ajaxSecurity/afterhours.jpg",
      imageAlt:
        "After-hours security risks for businesses and commercial properties",
    },

    {
      title: "Generic alarm kits that don't suit the property",
      description:
        "Every property is different. A proper system should suit the layout, lifestyle and level of risk. Cheap off-the-shelf kits often create more hassle than confidence.",
      image: "/images/solutions/ajaxSecurity/alarm_essential2.png",
      imageAlt: "Generic alarm kits that don't suit the property",
    },
  ],

  realInstallationsEyebrow: "Real installations",
  realInstallationsTitle:
    "Ajax alarm installations for homes, businesses and higher-risk sites",
  realInstallationsIntro:
    "These are common alarm system types we install across Perth. Final recommendations depend on the property layout, number of entry points, how the site is used and the level of protection, control and verification required.",

  products: securityProducts,

  faqsEyebrow: "FAQ",
  faqsTitle: "Ajax alarm installation Perth FAQs",
  faqsIntro:
    "Common questions about smart alarms, false alarms, app control and professional setup.",
  faqs: [
    {
      question: "Why do you install Ajax alarm systems?",
      answer:
        "Ajax combines reliable encrypted wireless devices, clean modern hardware and a polished app that is easy to use. It suits homes and businesses that want strong protection without clunky keypads or expensive monitoring contracts.",
    },
    {
      question: "Can an Ajax alarm reduce false alarms?",
      answer:
        "Good sensor choice and placement makes a big difference. We design the system around doors, windows, internal movement and everyday use so it is practical to arm and less likely to become annoying.",
    },
    {
      question: "Do I need a monitoring contract?",
      answer:
        "Not necessarily. Ajax can send instant alerts to your phone and give you control through the app. Some customers still want monitoring, but many prefer direct control without ongoing monthly fees.",
    },
    {
      question: "Can the system expand later?",
      answer:
        "Yes. Ajax systems can expand with extra intrusion sensors, sirens, keypads, remotes, fire detection, flood detection and automation devices as your needs change.",
    },
  ],

  finalCtaEyebrow: "Talk to Blake Smart Solutions",
  finalCtaTitle:
    "Need an alarm system in Perth? Let’s design one that actually suits the property",
  finalCtaIntro:
    "Whether you need a simple smart alarm for a home, better protection for a business, or a more modern alternative to an outdated system, Blake Smart Solutions can help you work out the right Ajax solution for the site.",
  finalCtaButton: {
    label: "Book a Free Security Assessment",
    action: "enquiry",
  },
};

export const alarmsSolutionTrustItems = [
  "Certified Ajax Expert",
  "Average 5/5 star Google reviews",
  "Fully Insured and Police Licensed",
  "Perth-Based Professional Installers",
];
