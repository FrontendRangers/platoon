const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
        '../docs/**/*.stories.mdx',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        'storybook-addon-performance/register',
    ],
    typescript: {
        check: true,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            shouldRemoveUndefinedFromOptional: true,
            propFilter: (prop) => {
                const isHTMLElementProp =
                    prop.parent?.fileName.includes('react/index.d.ts') ?? false;
                const isExternalProp =
                    prop.parent?.fileName.includes('node_modules') ?? false;

                return !(isExternalProp || isHTMLElementProp);
            },
        },
    },
    webpackFinal: async (config) => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    'styled-components': toPath(
                        'node_modules/styled-components',
                    ),
                },
            },
        };
    },
};
