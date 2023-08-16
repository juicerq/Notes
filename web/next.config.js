/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
