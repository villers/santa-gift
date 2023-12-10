/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/santa-gift",
    assetPrefix: '/santa-gift',
    images: {
        unoptimized: true,
        domains: ['villers.github.io'],
        loader: 'custom',
        loaderFile: './image.loader.js',
    },
};

module.exports = nextConfig;
