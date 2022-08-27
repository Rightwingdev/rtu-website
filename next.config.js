/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "rtu.com",
      'rtu.paris',
      'i1.sndcdn.com',
      'www.freepnglogos.com'
    ]
}}

module.exports = nextConfig
