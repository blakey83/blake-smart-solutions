"use client";

import { usePathname } from "next/navigation";
import { SITE_URL } from "@/lib/seoConfig";

type BreadcrumbConfig = {
  title: string;
  section?: {
    title: string;
    path: string;
  };
};

const breadcrumbRoutes: Record<string, BreadcrumbConfig> = {
  "/": {
    title: "Home",
  },
  "/ajax-security-perth": {
    title: "Ajax Security Perth",
  },
  "/articles/7-ways-to-fix-wifi": {
    title: "7 Ways to Fix Wi-Fi Problems at Home",
    section: {
      title: "Articles",
      path: "/articles",
    },
  },
  "/articles/is-starlink-worth-it": {
    title: "Is Starlink Worth It? A Perth Installer's Honest Opinion",
    section: {
      title: "Articles",
      path: "/articles",
    },
  },
  "/articles/starlink-setup-wa": {
    title: "How To Set Up Starlink In WA",
    section: {
      title: "Articles",
      path: "/articles",
    },
  },
  "/articles/starlink-vs-nbn-perth": {
    title: "Starlink vs NBN: Which Is Better in Perth?",
    section: {
      title: "Articles",
      path: "/articles",
    },
  },
  "/articles/what-makes-a-great-starlink-installer": {
    title: "What Makes a Great Starlink Installer?",
    section: {
      title: "Starlink Installation Perth",
      path: "/starlink-installation-perth",
    },
  },
  "/articles/where-to-book-starlink-installer-perth": {
    title: "Where to Book a Starlink Installer in Perth",
    section: {
      title: "Starlink Installation Perth",
      path: "/starlink-installation-perth",
    },
  },
  "/articles/why-nbn-feels-slow": {
    title: "Why Fast NBN (or Starlink) Still Feels Slow",
    section: {
      title: "Articles",
      path: "/articles",
    },
  },
  "/data-cabling": {
    title: "Data Cabling",
  },
  "/enquiry": {
    title: "Enquiry",
  },
  "/privacy-policy": {
    title: "Privacy Policy",
  },
  "/recent-installations/ajax": {
    title: "Recent Ajax Installations",
    section: {
      title: "Recent Installations",
      path: "/recent-installations",
    },
  },
  "/recent-installations/starlink": {
    title: "Recent Starlink Installations",
    section: {
      title: "Recent Installations",
      path: "/recent-installations",
    },
  },
  "/rural-starlink-installation-wa": {
    title: "Rural Starlink Installation WA",
  },
  "/security-cameras-perth": {
    title: "Security Cameras Perth",
  },
  "/starlink-installation-perth": {
    title: "Starlink Installation Perth",
  },
  "/tv-antennas-perth": {
    title: "TV Antennas Perth",
  },
  "/wifi-solutions-perth": {
    title: "WiFi Solutions Perth",
  },
  "/wifi-solutions-perth/wifi-access-point-installation": {
    title: "Wi-Fi Access Point Installation",
    section: { title: "Wi-Fi Solutions Perth", path: "/wifi-solutions-perth" },
  },
  "/wifi-solutions-perth/internet-to-sheds-workshops": {
    title: "Internet to Sheds & Workshops",
    section: { title: "Wi-Fi Solutions Perth", path: "/wifi-solutions-perth" },
  },
  "/wifi-solutions-perth/outdoor-wifi-installation": {
    title: "Outdoor Wi-Fi Installation",
    section: { title: "Wi-Fi Solutions Perth", path: "/wifi-solutions-perth" },
  },
  "/wifi-solutions-perth/business-wifi-installation": {
    title: "Business Wi-Fi Installation",
    section: { title: "Wi-Fi Solutions Perth", path: "/wifi-solutions-perth" },
  },
  "/wifi-solutions-perth/data-cabling": {
    title: "Data Cabling",
    section: { title: "Wi-Fi Solutions Perth", path: "/wifi-solutions-perth" },
  },
};

function normalizePath(pathname: string): string {
  if (pathname === "/") {
    return pathname;
  }

  return pathname.replace(/\/+$/, "");
}

function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

function buildBreadcrumbSchema(pathname: string) {
  const route = normalizePath(pathname);
  const config = breadcrumbRoutes[route];

  if (!config) {
    return null;
  }

  const breadcrumbs = [
    {
      name: "Home",
      path: "/",
    },
  ];

  if (config.section) {
    breadcrumbs.push({
      name: config.section.title,
      path: config.section.path,
    });
  }

  if (route !== "/") {
    breadcrumbs.push({
      name: config.title,
      path: route,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: absoluteUrl(breadcrumb.path),
    })),
  };
}

export function BreadcrumbJsonLd() {
  const pathname = usePathname();
  const schema = buildBreadcrumbSchema(pathname);

  if (!schema) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
