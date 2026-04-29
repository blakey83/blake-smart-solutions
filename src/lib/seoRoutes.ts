import { promises as fs } from "node:fs";
import path from "node:path";

const APP_DIRECTORY = path.join(process.cwd(), "src", "app");

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

async function collectPageRoutes(
  directory: string,
  segments: string[] = [],
): Promise<string[]> {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const routes = new Set<string>();

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const segment = entry.name;

      if (segment.startsWith("(") && segment.endsWith(")")) {
        const nestedRoutes = await collectPageRoutes(
          path.join(directory, segment),
          segments,
        );
        nestedRoutes.forEach((route) => routes.add(route));
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
      nestedRoutes.forEach((route) => routes.add(route));
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
    routes.add(routePath);
  }

  return Array.from(routes).sort((left, right) => left.localeCompare(right));
}

export async function getPublicAppRoutes(): Promise<string[]> {
  return collectPageRoutes(APP_DIRECTORY);
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
    "/data-cabling",
    "/tv-antennas-perth",
    "/wifi-problems-perth",
  ]);

  if (route === "/enquiry") {
    return 0.9;
  }

  if (serviceRoutes.has(route)) {
    return 0.9;
  }

  if (
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

  if (
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
