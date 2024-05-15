/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/image/:path*',
        destination: 'http://localhost:8001/image/:path*',
      },
      {
        source: '/api/surveys/:path*',
        destination: 'http://0.0.0.0:8000/surveys/:path*',
      },
      {
        source: '/api/users/:path*',
        destination: 'http://0.0.0.0:8000/users/:path*',
      },
      {
        source: '/api/slash/users/:path*',
        destination: 'http://0.0.0.0:8000/users/:path*/',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-3626123a908346a7a8be8d9295f44e26.r2.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
