import type { SolutionPageTemplateProps } from "@/components/solutions/types";
import { securityProducts } from "./security_products";

export const alarmsSolutionContent: SolutionPageTemplateProps = {
  title:
    "Ajax alarm installation Perth — smart security systems for homes and businesses",
  intro:
    "Blake Smart Solutions installs Ajax alarm systems for homes, businesses, workshops and commercial properties across Perth and the surrounding suburbs. Whether you want better protection around entry points, instant alerts when something happens, or a smarter system that is actually easy to use day to day, we design alarm solutions that are practical, reliable and built around the property.",

  heroEyebrow: "Smart alarm solutions",
  heroImage: "/images/solutions/ajaxSecurity/ajax_hero.png",
  heroImageAlt: "Ajax alarm installation by Blake Smart Solutions",

  primaryCta: {
    label: "Book an Alarm Quote",
    action: "enquiry",
  },
  secondaryCta: {
    label: "Call now for a quote",
    action: "link",
    href: "tel:0477948079",
  },

  problemsEyebrow: "Common issues",
  problemsTitle: "Why most alarm systems fail to properly protect the property",
  problemsIntro:
    "Most alarm systems don’t fail because they lack sensors — they fail because they’re not designed properly for the property or the people using them. Poor sensor placement, missed entry points and clunky old systems often lead to false alarms, weak coverage and setups that people stop using properly.",

  problems: [
    {
      title: "Worried about break-ins or vulnerable entry points",
      description:
        "Doors, windows, side access, garages and rear areas are often the weakest parts of a property. If these points are not considered properly, the system may leave obvious gaps that reduce the value of having an alarm in the first place.",
      image: "/images/solutions/ajaxSecurity/break_in.jpg",
      imageAlt: "Concern about break-ins and property security",
    },
    {
      title: "False alarms caused by poor sensor placement",
      description:
        "Motion detectors need to be positioned properly to suit the layout, room use and movement through the property. Poor placement can lead to nuisance alarms, frustration and systems that are eventually ignored or left disarmed.",
      image: "/images/solutions/ajaxSecurity/false_alarms.jpg",
      imageAlt: "Poor alarm sensor placement causing false alarms",
    },
    {
      title: "Old systems that are confusing or hard to use",
      description:
        "Many older alarm systems are unreliable, awkward to manage and offer a poor user experience. If arming, disarming or checking the system feels like a hassle, people are less likely to use it properly when it matters most.",
      image: "/images/solutions/ajaxSecurity/old-keypad.jpg",
      imageAlt: "Outdated alarm system keypad",
    },
    {
      title: "No visibility when you're away from the property",
      description:
        "A modern alarm system should do more than make noise onsite. Instant alerts, clear event information and practical app control help you stay aware of what is happening, whether you are at work, travelling or simply away from the property.",
      // image: "/images/solutions/ajaxSecurity/app-alerts.jpg",
      // imageAlt: "Alarm alerts and control from smartphone app",
    },
    {
      title: "Commercial sites with weak after-hours protection",
      description:
        "Workshops, offices, retail spaces and small commercial properties often need stronger protection after hours. Poorly planned alarm coverage can leave access points, internal zones or key areas exposed when the site is unattended.",
      // image: "/images/solutions/ajaxSecurity/commercial-alarm.jpg",
      // imageAlt: "Commercial alarm system protection",
    },
    {
      title: "Cheap off-the-shelf systems that don't suit the property",
      description:
        "Every property is different. A small home, larger family property, workshop or business all need different devices, coverage and user setup. Generic alarm kits often miss what actually matters and create more hassle than confidence.",
      // image: "/images/solutions/ajaxSecurity/generic-alarm-kit.jpg",
      // imageAlt: "Generic alarm kit not suited to the property",
    },
  ],

  brandBlock: {
    eyebrow: "Ajax alarm systems Perth",
    title:
      "Built around practical protection, with Ajax smart security technology",
    intro:
      "Blake Smart Solutions has partnered with Ajax, using modern alarm systems designed for real-world security and a better user experience. Rather than dated alarm panels and clunky interfaces, Ajax offers fast alerts, strong wireless performance, app control and smarter devices that make the system easier to live with and easier to trust.",
    image: "/images/solutions/ajaxSecurity/Ajax-partner.png",
    imageAlt: "Ajax alarm systems",
    points: [
      "Ajax partner systems with professional setup and configuration",
      "App control for arming, disarming and checking system status remotely",
      "Detailed notifications with device name, time and event information",
      "Photo verification options with compatible MotionCam detectors",
      "Wireless devices for clean, modern installations without the mess of traditional systems",
      "Expandable ecosystem including intrusion, fire, flood and smart automation devices",
    ],
  },

  productsEyebrow: "Popular options",
  productsTitle:
    "Ajax alarm solutions in Perth for homes, businesses and higher-risk sites",
  productsIntro:
    "These are some of the most common alarm system types we install. Final recommendations depend on the property layout, number of entry points, how the site is used and the level of protection, control and verification required.",

  products: securityProducts,

  imageSectionEyebrow: "Installed properly",
  imageSection: {
    title:
      "Alarm installation in Perth — planned properly for coverage, usability and peace of mind",
    intro:
      "An alarm system only works properly when it is designed around the property and the people using it. Blake Smart Solutions looks at access points, internal movement, likely risk areas and how you want the system to operate day to day, then builds a setup that makes sense. The result is a smarter, cleaner and more practical security system that is easy to use and ready when it matters.",
    image: "/Blake_shop_front.jpeg",
    imageAlt: "Professional Ajax alarm installation in Perth",
  },

  finalCtaEyebrow: "Talk to Blake Smart Solutions",
  finalCtaTitle:
    "Need an alarm system in Perth? Let’s design one that actually suits the property",
  finalCtaIntro:
    "Whether you need a simple smart alarm for a home, better protection for a business, or a more modern alternative to an outdated system, Blake Smart Solutions can help you work out the right Ajax solution for the site.",
  finalCtaButton: {
    label: "Send an Enquiry",
    action: "enquiry",
  },
};

export const alarmsSolutionTrustItems = [
  "Local WA-Based Service",
  "WA Police Licensed & Fully Insured",
  "Ajax Smart Security Systems",
  "Designed for Real World Protection",
];
