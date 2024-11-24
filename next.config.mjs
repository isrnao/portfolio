/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // basePathとassetPrefixを設定
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
