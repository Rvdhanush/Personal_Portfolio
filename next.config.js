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
  // Enable experimental optimizations
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Optimize bundle
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
}

module.exports = nextConfig
