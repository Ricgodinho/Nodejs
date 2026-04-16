import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
  experimental: {
    optimizePackageImports: ["@radix-ui/*", "lucide-react"],
  },
};

export default nextConfig;
