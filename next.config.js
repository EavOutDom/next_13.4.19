/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zandokh.com',
        pathname: '/image/**',
      },
    ],
  },
}

module.exports = nextConfig
