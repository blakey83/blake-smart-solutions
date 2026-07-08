import type { MetadataRoute } from "next";
import {
  getAbsoluteCanonicalUrl,
  getRouteChangeFrequency,
  getRoutePriority,
  INDEXABLE_ROUTES,
} from "@/lib/seoRoutes";

export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_ROUTES.map((route) => ({
    url: getAbsoluteCanonicalUrl(route),
    changeFrequency: getRouteChangeFrequency(route),
    priority: getRoutePriority(route),
  }));
}
