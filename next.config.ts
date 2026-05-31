import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/starlink-setup-perth",
        destination: "/starlink-setup-wa",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
