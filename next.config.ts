import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed static export - need server for API routes & database
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
