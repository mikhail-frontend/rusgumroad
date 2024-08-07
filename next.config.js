/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  buildExcludes: [/middleware-manifest\.json$/],
});

const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withPWA], {
  reactStrictMode: false,
  images: {
    loader: 'akamai',
    path: '',
  },
  output: 'export',
  async headers() {
    return [
      {
        source: '/:all*(woff2|js|css|svg|png|jpg|jpeg|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
});
