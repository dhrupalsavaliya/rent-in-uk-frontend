/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  experimental:{
    appDir:true
  },
  images:{
    domains: ['findhouse-nextjs.netlify.app']
  }
};

module.exports = nextConfig;
