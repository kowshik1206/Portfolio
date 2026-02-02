/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/My-Portfolio',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
