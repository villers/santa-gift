/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/santa-gift",
    assetPrefix: '/santa-gift',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'villers.github.io',
                port: '',
                pathname: '/santa-gift/**',
            },
        ],
    },
};

module.exports = nextConfig;
