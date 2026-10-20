import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow video and image files from /public
  async headers() {
    return [
      {
        source: "/hero-video.mp4",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Accept-Ranges", value: "bytes" },
        ],
      },
    ];
  },
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
