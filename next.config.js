/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Disable image optimization for static export
  images: { unoptimized: true },

  trailingSlash: true,
};

module.exports = nextConfig;
