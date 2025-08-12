/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['localhost'],
  },
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/_next/static/fonts/',
          outputPath: 'static/fonts/',
        },
      },
    });
    return config;
  },
}

module.exports = nextConfig