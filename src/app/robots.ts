import type { MetadataRoute } from "next";

const BASE_URL = "https://www.blakesmartsolutions.com.au";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/_internal/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
