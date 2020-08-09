module.exports = {
    stories: ['../docs/**/*.stories.mdx', '../src/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-toolbars',
        '@storybook/addon-actions',
        '@storybook/addon-a11y',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
            },
        },
        '@storybook/addon-controls',
    ],
};
