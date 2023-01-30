/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    API_URL: "https://good-lime-anemone-wig.cyclic.app",
  },
};

module.exports = nextConfig;
