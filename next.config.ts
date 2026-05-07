import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/security",
        destination: "/security-cameras-perth",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
