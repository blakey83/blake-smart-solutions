import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/starlink-setup-perth",
        destination: "/articles/starlink-setup-wa",
        permanent: true,
      },
      {
        source: "/7-ways-to-fix-wifi",
        destination: "/articles/7-ways-to-fix-wifi",
        permanent: true,
      },
      {
        source: "/starlink-setup-wa",
        destination: "/articles/starlink-setup-wa",
        permanent: true,
      },
      {
        source: "/why-nbn-feels-slow",
        destination: "/articles/why-nbn-feels-slow",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
