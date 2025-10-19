/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel автоматически оптимизирует проект
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // SEO настройки
  poweredByHeader: false
}

module.exports = nextConfig