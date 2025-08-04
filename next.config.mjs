/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'DataFM2025'; // Replace with your GitHub repo name

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
  // Add basePath and assetPrefix for GitHub Pages deployment
  basePath: isProd ? `/${DataFM2025}` : '',
  assetPrefix: isProd ? `/${DataFM2025}/` : '',
  trailingSlash: true, // Recommended for static export
};

export default nextConfig;