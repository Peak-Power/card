/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'imgix',
    path: 'https://pkpwr-card.netlify.app/',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
