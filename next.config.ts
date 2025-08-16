import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol:
          (process.env.NEXT_PUBLIC_IMAGE_PROTOCOL as "http" | "https") ||
          "http",
        hostname: process.env.NEXT_PUBLIC_IMAGE_HOST || "localhost",
        port: process.env.NEXT_PUBLIC_IMAGE_PORT || "",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
