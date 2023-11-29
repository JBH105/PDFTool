require("dotenv").config();

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disableDevLogs: true,
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer(
  withPWA({
    reactStrictMode: true,
    env: {
      BASE_URL: process.env.BASE_URL,
    },}))

    module.exports = nextConfig