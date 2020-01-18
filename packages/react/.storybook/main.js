module.exports = {
    stories: [
        '../src/primitives/**/*.stories.tsx',
        '../src/components/**/*.stories.tsx',
        '../src/hooks/**/*.stories.tsx',
    ],
    addons: [
        '@storybook/addon-contexts',
        '@storybook/addon-actions',
        '@storybook/addon-a11y',
        '@storybook/addon-knobs',
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                presets: [['react-app', { flow: false, typescript: true }]],
            },
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
