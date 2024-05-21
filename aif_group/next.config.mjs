/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/image/:path*',
        destination: 'http://43.201.183.156:8001/image/:path*',
      },
      {
        source: '/api/slash',
        destination: 'http://43.201.183.156:8001/',
      },
      {
        source: '/api/surveys/:path*',
        destination: 'http://43.201.183.156/surveys/:path*',
      },
      {
        source: '/api/users/:path*',
        destination: 'http://43.201.183.156/users/:path*',
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
      {
        protocol: 'https',
        hostname: 'aif-bucket-240429.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
