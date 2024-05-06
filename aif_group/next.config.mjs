/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8001/:path*',
      },
    ];
  },
  images: {
    domains: ['pub-3626123a908346a7a8be8d9295f44e26.r2.dev'],
  },
};

export default nextConfig;
