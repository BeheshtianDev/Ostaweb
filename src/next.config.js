/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        // Exclude SVG from default file loader
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg')
        );
        fileLoaderRule.exclude = /\.svg$/;

        // For SVGs as component (when using ?component)
        config.module.rules.push({
            test: /\.svg$/,
            resourceQuery: /component/, // *.svg?component
            use: ['@svgr/webpack'],
        });

        // For SVGs as file
        config.module.rules.push({
            test: /\.svg$/,
            type: 'asset/resource',
        });

        return config;
    },
};

module.exports = nextConfig;
