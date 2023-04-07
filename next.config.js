/** @type {import('next').NextConfig} */
const repos = process.env.NEXT_PUBLIC_REPOSITORY_NAME || "";

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: `/${repos}`,
}

module.exports = nextConfig
