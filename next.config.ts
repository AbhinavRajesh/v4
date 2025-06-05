import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],
  images: {
    domains: ["cdn.hashnode.com"],
  },
};

export default nextConfig;
