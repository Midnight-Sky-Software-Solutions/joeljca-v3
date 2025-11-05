import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(nextConfig);
