module.exports = {
    stories: ['../docs/**/*.stories.mdx', '../src/**/*.stories.(tsx|mdx)'],
    addons: [
        '@storybook/preset-typescript',
        '@storybook/addon-contexts',
        '@storybook/addon-actions',
        '@storybook/addon-a11y',
        '@storybook/addon-knobs',
        '@storybook/addon-docs',
    ],
};
