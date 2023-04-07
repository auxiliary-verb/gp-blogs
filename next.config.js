/** @type {import('next').NextConfig} */
const repos = process.env.NEXT_PUBLIC_ROOT_URL || "";

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: `${repos}`,
  assetPrefix: `${repos}`,
}

module.exports = nextConfig
