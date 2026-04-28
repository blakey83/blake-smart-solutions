import type { MetadataRoute } from "next";
import {
  getPublicAppRoutes,
  getRouteChangeFrequency,
  getRoutePriority,
} from "@/lib/seoRoutes";

const BASE_URL = "https://www.blakesmartsolutions.com.au";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await getPublicAppRoutes();

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: getRouteChangeFrequency(route),
    priority: getRoutePriority(route),
  }));
}
