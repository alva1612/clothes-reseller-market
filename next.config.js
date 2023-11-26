/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "media-assets.grailed.com", protocol: "https", port: "" },
      { hostname: "hmperu.vtexassets.com", protocol: "https", port: "" },
    ],
  },
};

module.exports = nextConfig;
