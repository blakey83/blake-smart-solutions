import { SITE_URL } from "@/lib/seoConfig";

export const CORE_SERVICE_ROUTES = [
  "/",
  "/security-cameras-perth",
  "/ajax-security-perth",
  "/wifi-solutions-perth",
  "/starlink-installation-perth",
  "/rural-starlink-installation-wa",
  "/data-cabling",
  "/tv-antennas-perth",
  "/enquiry",
  "/wifi-enquiry",
] as const;

export const ARTICLE_RESOURCE_ROUTES = [
  "/articles/7-ways-to-fix-wifi",
  "/articles/is-starlink-worth-it",
  "/articles/starlink-installation-cost-perth",
  "/articles/starlink-setup-wa",
  "/articles/starlink-vs-nbn-perth",
  "/articles/where-to-book-starlink-installer-perth",
  "/articles/what-makes-a-great-starlink-installer",
  "/articles/why-nbn-feels-slow",
  "/case-studies",
  "/case-studies/starlink-installation-city-beach-gen-3-router-bracket",
  "/case-studies/starlink-installation-oakford-poor-nbn-fixed-wireless",
  "/recent-installations/ajax",
  "/recent-installations/starlink",
] as const;

export const WIFI_SITELINK_ROUTES = [
  "/wifi-solutions-perth/wifi-access-point-installation",
  "/wifi-solutions-perth/internet-to-sheds-workshops",
  "/wifi-solutions-perth/outdoor-wifi-installation",
  "/wifi-solutions-perth/business-wifi-installation",
  "/wifi-solutions-perth/data-cabling",
] as const;

export const UTILITY_ROUTES = [
  "/privacy-policy",
  "/quote-terms-and-conditions",
] as const;

export const INDEXABLE_ROUTES = [
  ...CORE_SERVICE_ROUTES,
  ...WIFI_SITELINK_ROUTES,
  ...ARTICLE_RESOURCE_ROUTES,
  ...UTILITY_ROUTES,
] as const;

const ARTICLE_ROUTES = new Set<string>(ARTICLE_RESOURCE_ROUTES);
const RECENT_INSTALLATION_ROUTES = new Set<string>([
  "/recent-installations/ajax",
  "/recent-installations/starlink",
]);

export function getAbsoluteCanonicalUrl(route: string): string {
  if (!route.startsWith("/")) {
    throw new Error(`Sitemap route must start with "/": ${route}`);
  }

  if (route.includes("?") || route.includes("#")) {
    throw new Error(`Sitemap route cannot include query strings or fragments: ${route}`);
  }

  return `${SITE_URL}${route === "/" ? "" : route}`;
}

export function getRoutePriority(route: string): number {
  if (route === "/") {
    return 1;
  }

  const serviceRoutes = new Set([
    "/wifi-solutions-perth",
    "/security-cameras-perth",
    "/ajax-security-perth",
    "/starlink-installation-perth",
    "/rural-starlink-installation-wa",
    "/data-cabling",
    "/tv-antennas-perth",
  ]);

  if (route === "/enquiry" || route === "/wifi-enquiry") {
    return 0.9;
  }

  if (serviceRoutes.has(route)) {
    return 0.9;
  }

  if (RECENT_INSTALLATION_ROUTES.has(route)) {
    return 0.8;
  }

  if (
    ARTICLE_ROUTES.has(route) ||
    route.includes("/blog/") ||
    route.startsWith("/articles/") ||
    route.startsWith("/case-studies") ||
    route.includes("/guides/")
  ) {
    return 0.7;
  }

  if (
    route.includes("/privacy") ||
    route.includes("/terms") ||
    route.includes("/cookies") ||
    route.includes("/legal")
  ) {
    return 0.4;
  }

  return 0.8;
}

export function getRouteChangeFrequency(
  route: string,
): "weekly" | "monthly" | "yearly" {
  if (route === "/") {
    return "weekly";
  }

  if (route === "/enquiry" || route === "/wifi-enquiry") {
    return "monthly";
  }

  if (RECENT_INSTALLATION_ROUTES.has(route)) {
    return "monthly";
  }

  if (
    ARTICLE_ROUTES.has(route) ||
    route.includes("/blog/") ||
    route.startsWith("/articles/") ||
    route.startsWith("/case-studies") ||
    route.includes("/guides/")
  ) {
    return "monthly";
  }

  if (
    route.includes("/privacy") ||
    route.includes("/terms") ||
    route.includes("/cookies") ||
    route.includes("/legal")
  ) {
    return "yearly";
  }

  return "weekly";
}
