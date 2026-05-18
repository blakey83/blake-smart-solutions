import type { MetadataRoute } from "next";
import {
  getAbsoluteCanonicalUrl,
  getPublicAppRoutes,
  getRouteChangeFrequency,
  getRoutePriority,
} from "@/lib/seoRoutes";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await getPublicAppRoutes();

  return routes.map((route) => ({
    url: getAbsoluteCanonicalUrl(route),
    changeFrequency: getRouteChangeFrequency(route),
    priority: getRoutePriority(route),
  }));
}
