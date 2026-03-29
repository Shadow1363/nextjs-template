
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coreva-normal.trae.ai",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
