import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seoRoutes";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/_internal/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
