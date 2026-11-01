import { SITE_URL } from "@/lib/seoConfig";

export const siteMetadataContent = {
  businessName: "Blake Smart Solutions",
  city: "Perth",
  region: "WA",
  country: "AU",
  telephone: "+61477948079",
  website: SITE_URL,
  title:
    "Blake Smart Solutions | Security Cameras, Wi-Fi & Starlink Installation Perth",
  description:
    "Perth smart technology specialists for CCTV, smart alarms, Wi-Fi, Starlink installation and data solutions. Licensed, insured, and experienced in CCTV and smart security systems.",
};

export const navContent = {
  logoAlt: "Blake Smart Solutions",
  links: [
    { label: "Wi-Fi & Network Solutions", href: "/wifi-solutions-perth" },
    { label: "Security Camera Solutions", href: "/security-cameras-perth" },
    { label: "Alarm & Access Control", href: "/ajax-security-perth" },
    { label: "Starlink Installation", href: "/starlink-installation-perth" },
  ],
  quoteCta: "Request a Quote",
  mobileToggleLabel: "Toggle navigation menu",
};

export const footerContent = {
  logoAlt: "Blake Smart Solutions",
  description:
    "Practical technology solutions for Perth homes and small businesses, with a focus on security, connectivity, and professional service",
  quickLinksTitle: "Quick Links",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Popular", href: "/#specials" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#final-cta" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    {
      label: "Quote Terms & Conditions",
      href: "/quote-terms-and-conditions",
    },
  ],
  serviceLinksTitle: "Services",
  serviceLinks: [
    { label: "CCTV & Security Cameras", href: "/security-cameras-perth" },
    { label: "Wi-Fi & Wireless", href: "/wifi-solutions-perth" },
    { label: "Alarm & Access Control", href: "/ajax-security-perth" },
    { label: "Starlink", href: "/starlink-installation-perth" },
    { label: "Data Cabling", href: "/wifi-solutions-perth/data-cabling" },
    { label: "TV Antennas", href: "/tv-antennas-perth" },
  ],
  contactTitle: "Contact",
  phone: "0477 948 079",
  phoneHref: "tel:0477948079",
  email: "info@blakesmartsolutions.com.au",
  emailHref: "mailto:info@blakesmartsolutions.com.au",
  location: " Western Australia",
  abn: "ABN 66 695 399 761",
  securityLicence: "SA 84208",
  copyright: "Blake Smart Solutions pty ltd. All rights reserved.",
};

export const enquiryModalContent = {
  generalQuoteProductName: "General Quote Request",
  generalQuoteMessage: "I'm interested in a quote.",
  productMessagePrefix: "Hi, I'm interested in the ",
  productMessageSuffix: ".",
  sendError: "We could not send your enquiry right now. Please try again.",
  successMessage: "We’ve received your message and will be in touch shortly.",
  closeLabel: "Close enquiry form",
  eyebrow: "Get in touch",
  intro:
    "Tell us a little about what you need and how you'd prefer to be contacted, and we'll be in touch.",
  preferPrompt: "Prefer to speak to someone?",
  callCta: "Call 0477 948 079",
  successTitle: "Thanks for your enquiry",
  okCta: "OK",
  placeholders: {
    name: "Your name",
    contact: "Phone Number or Email",
    suburb: "Suburb",
    message: "How can we help? (optional)",
  },
  contactInvalidError: "Please enter a valid phone number or email address.",
  privacyDisclaimerBeforeLink:
    "No Spam! We'll use your contact details only to respond to this enquiry and provide the service you've asked about. View our",
  privacyDisclaimerAfterLink: ".",
  privacyPolicyLabel: "Privacy Policy",
  privacyPolicyHref: "/privacy-policy",
  sendingCta: "Sending...",
  submitCta: "Send My Details",
  wifiConnectivityQuote: {
    productNames: [
      "WiFi Solutions",
      "Wi-Fi Help",
      "Wi-Fi Access Point Installation",
      "Internet to Sheds & Workshops",
      "Outdoor Wi-Fi Installation",
      "Business Wi-Fi & Network Assessment",
    ],
    title: "Need some professional help?",
    intro:
      "Have a question about Wi-Fi or home networking, need some advice or want a quote? Let us know how you'd prefer to be contacted and we'll be in touch.",
    messagePlaceholder: "What can we help you with? (Optional)",
    submitCta: "Send My Details",
  },
  starlinkInstallationQuote: {
    productNames: ["Starlink Installation"],
    title: "Need your Starlink installed?",
    intro:
      "Already have your Starlink kit? Leave your details and we'll get in touch to arrange your installation.",
    messagePlaceholder: "What can we help you with? (Optional)",
    submitCta: "Send My Details",
  },
  ajaxSecurityQuote: {
    productNames: ["Ajax Alarm Systems"],
    title: "Need some professional help?",
    intro:
      "Tell us how we can help, and how you'd prefer to be contacted, and we'll be in touch.",
    messagePlaceholder: "What can we help you with? (Optional)",
    submitCta: "Send My Details",
  },
  cctvQuote: {
    productNames: ["Security Cameras"],
    title: "Need some profeesional help?",
    intro:
      "We can help you with brands, features, camera placement, or a free quote. Let us know how you'd prefer to be contacted, and we'll be in touch.",
    messagePlaceholder: "What can we help you with? (Optional)",
    submitCta: "Send My Details",
  },
  dataCablingQuote: {
    productNames: ["Data Cabling"],
    title: "Get Your Data Cabling Quote",
    intro:
      "Tell us what you need connected and how you'd prefer to be contacted, and we'll be in touch.",
    messagePlaceholder:
      "Tell us where you need data points or a wired connection.",
    submitCta: "Send My Details",
  },
  tvAntennaQuote: {
    productNames: ["TV Antennas"],
    title: "Get Your TV Antenna Quote",
    intro:
      "Tell us about your TV reception or antenna needs and how you'd prefer to be contacted, and we'll be in touch.",
    messagePlaceholder:
      "Tell us about your reception problem or the installation you need.",
    submitCta: "Send My Details",
  },
};

export const enquiryProductContent = {
  generalQuoteRequest: "General Quote Request",
  starlinkInstallation: "Starlink Installation",
  wifiSolutions: "WiFi Solutions",
  wifiHelp: "Wi-Fi Help",
};

export const wifiArticleCtaContent = {
  defaultMessage:
    "I’d like a connectivity quote. The areas or devices I need connected are: ",
  inlinePrompt: "Need help in Perth?",
  inlineCta: "Get a quote for reliable Wi-Fi where you need it.",
  defaultPrimaryLabel: "Get a connectivity quote",
  defaultSecondaryLabel: "Call Blake Smart Solutions",
};

export const productPageTemplateContent = {
  heroEyebrow: "Services",
  relatedServicesTitle: "Compare related services",
  relatedServicesDescription:
    "Many jobs overlap across Wi-Fi, cabling, Starlink, antennas and security. These nearby service pages can help you find the best fit.",
  finalCtaEyebrow: "Get in touch",
  finalCtaTitle: "Need advice on the right option for your property?",
  finalCtaIntro:
    "Blake Smart Solutions can help you compare the practical options and work out the best next step for the site.",
  callCta: "Call 0477 948 079",
  quoteCta: "Request a Quote",
};

export const relatedServicesContent = {
  eyebrow: "Related services",
  defaultTitle: "Explore related services",
  defaultDescription:
    "If this page is close to what you need, these related services are often worth comparing as well.",
  serviceCta: "View service",
  backCta: "Back to all services",
};

export const solutionPageTemplateContent = {
  heroEyebrow: "Solutions",
  problemSolutionEyebrow: "Problem / Solution",
  problemSolutionIntro:
    "Solutions are planned around the problem you actually need solved, not just the hardware being installed.",
  approachEyebrow: "OUR APPROACH",
  approachTitle: "What You Can Expect From Every Installation",
  approachIntro:
    "Every job starts with understanding what you need and ends with a system that is installed properly, tested and explained clearly. The goal is practical advice, tidy workmanship and support from a local team.",
  faqsEyebrow: "FAQ",
  finalCtaEyebrow: "Get in touch",
};
