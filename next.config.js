/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'linkedin.com'],
  },
  // Performance optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
