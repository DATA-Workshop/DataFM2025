/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/DataFM2025' : '',
  assetPrefix: isProd ? '/DataFM2025/' : '',
  trailingSlash: true,
};

export default nextConfig;