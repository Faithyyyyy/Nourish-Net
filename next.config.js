/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.themealdb.com", "localhost", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
