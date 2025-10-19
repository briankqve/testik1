/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // SEO настройки
  poweredByHeader: false,
  generateEtags: false,
  compress: true
}

module.exports = nextConfig
