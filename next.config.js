/** @type {import('next').NextConfig} */
const withPwa = require('next-pwa');
module.exports = withPwa({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
  },
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space', 'pexels.com'],
  },
});
