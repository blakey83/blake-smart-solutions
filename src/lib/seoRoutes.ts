import { promises as fs } from "node:fs";
import path from "node:path";

export const SITE_URL = "https://www.blakesmartsolutions.com.au";

const APP_DIRECTORY = path.join(process.cwd(), "src", "app");
const MAX_SITEMAP_URLS = 50_000;

const ARTICLE_ROUTES = new Set([
  "/articles/7-ways-to-fix-wifi",
  "/articles/starlink-setup-wa",
  "/articles/why-nbn-feels-slow",
]);

const RECENT_INSTALLATION_ROUTES = new Set([
  "/recent-installations/starlink",
]);

const EXCLUDED_SEGMENTS = new Set([
  "api",
  "admin",
  "private",
  "_private",
  "_internal",
]);

const EXCLUDED_FILENAMES = new Set([
  "error.tsx",
  "error.ts",
  "not-found.tsx",
  "not-found.ts",
  "loading.tsx",
  "loading.ts",
  "route.ts",
  "route.tsx",
  "template.tsx",
  "template.ts",
  "default.tsx",
  "default.ts",
]);

type AppRouteEntry = {
  route: string;
  filePath: string;
};

async function collectPageRoutes(
  directory: string,
  segments: string[] = [],
): Promise<AppRouteEntry[]> {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const routes = new Map<string, AppRouteEntry>();

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const segment = entry.name;

      if (segment.startsWith("(") && segment.endsWith(")")) {
        const nestedRoutes = await collectPageRoutes(
          path.join(directory, segment),
          segments,
        );
        nestedRoutes.forEach((entry) => routes.set(entry.route, entry));
        continue;
      }

      if (
        segment.startsWith("@") ||
        segment.startsWith(".") ||
        segment.includes("[")
      ) {
        continue;
      }

      if (EXCLUDED_SEGMENTS.has(segment)) {
        continue;
      }

      const nestedRoutes = await collectPageRoutes(
        path.join(directory, segment),
        [...segments, segment],
      );
      nestedRoutes.forEach((entry) => routes.set(entry.route, entry));
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    if (EXCLUDED_FILENAMES.has(entry.name)) {
      continue;
    }

    if (entry.name !== "page.tsx" && entry.name !== "page.ts") {
      continue;
    }

    const routePath = segments.length === 0 ? "/" : `/${segments.join("/")}`;
    routes.set(routePath, {
      route: routePath,
      filePath: path.join(directory, entry.name),
    });
  }

  return Array.from(routes.values()).sort((left, right) =>
    left.route.localeCompare(right.route),
  );
}

export async function getPublicAppRouteEntries(): Promise<AppRouteEntry[]> {
  const routes = await collectPageRoutes(APP_DIRECTORY);

  if (routes.length > MAX_SITEMAP_URLS) {
    throw new Error(
      `Sitemap contains ${routes.length} URLs, which exceeds Google's ${MAX_SITEMAP_URLS} URL limit.`,
    );
  }

  return routes;
}

export async function getPublicAppRoutes(): Promise<string[]> {
  const entries = await getPublicAppRouteEntries();
  return entries.map((entry) => entry.route);
}

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
    "/security",
    "/wifi-solutions-perth",
    "/security-cameras-perth",
    "/ajax-security-perth",
    "/starlink-installation-perth",
    "/rural-starlink-installation-wa",
    "/data-cabling",
    "/tv-antennas-perth",
  ]);

  if (route === "/enquiry") {
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
    route.includes("/articles/") ||
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

  if (route === "/enquiry") {
    return "monthly";
  }

  if (RECENT_INSTALLATION_ROUTES.has(route)) {
    return "monthly";
  }

  if (
    ARTICLE_ROUTES.has(route) ||
    route.includes("/blog/") ||
    route.includes("/articles/") ||
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
