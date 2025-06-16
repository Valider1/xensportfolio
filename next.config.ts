/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"],  // allow this host for external images
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
