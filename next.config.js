const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github.com"]
  }
}

module.exports = withContentlayer(nextConfig);
