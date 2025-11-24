/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/project-4',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
