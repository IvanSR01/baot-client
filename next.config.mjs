/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    ID: process.env.ID,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://62.113.104.41:4200/api/:path*`,
      },
      {
        source: "/uploads/:path*",
        destination: `http://62.113.104.41:4200/uploads/:path*`,
      },
    ];
  },
};

export default nextConfig;
