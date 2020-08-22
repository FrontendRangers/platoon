module.exports = {
    stories: ['../**/*.stories.@(tsx|mdx)'],
    addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
    logLevel: 'debug',
    typescript: {
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            shouldRemoveUndefinedFromOptional: true,
            propFilter: (prop) => {
                prop.name === 'aria-label' && console.log(prop);
                return prop.parent
                    ? !prop.parent.fileName.includes('react/index.d.ts')
                    : true;
            },
        },
    },
};
