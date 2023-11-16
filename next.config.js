/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
    {
      protocol: 'https',
      hostname: '**.pixabay.com',
    },
    {
      protocol: 'https',
      hostname: '**.adrop.cz',
    }
  ],
  },
}
module.exports = nextConfig