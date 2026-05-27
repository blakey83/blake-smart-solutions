import type { MetadataRoute } from "next";
import { promises as fs } from "node:fs";
import {
  getAbsoluteCanonicalUrl,
  getPublicAppRouteEntries,
  getRouteChangeFrequency,
  getRoutePriority,
} from "@/lib/seoRoutes";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await getPublicAppRouteEntries();

  return Promise.all(
    routes.map(async ({ route, filePath }) => {
      const stats = await fs.stat(filePath);

      return {
        url: getAbsoluteCanonicalUrl(route),
        lastModified: stats.mtime,
        changeFrequency: getRouteChangeFrequency(route),
        priority: getRoutePriority(route),
      };
    }),
  );
}
