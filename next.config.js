/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "raw.githubusercontent.com",
      "img.icons8.com"
    ]
  }
}

module.exports = nextConfig
