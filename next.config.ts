import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      { source: "/about-us.html", destination: "/about", permanent: true },
      { source: "/programs.html", destination: "/programs", permanent: true },
      { source: "/media.html", destination: "/media", permanent: true },
      { source: "/contact-us.html", destination: "/contact", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
