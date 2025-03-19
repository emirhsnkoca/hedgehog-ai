/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Type checking is skipped in build
    // This may have severe consequences!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig; 