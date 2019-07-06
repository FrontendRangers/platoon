module.exports = {
    root: true,
    extends: [
        'plugin:jest/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
    ],
    plugins: [
        '@typescript-eslint',
        'prettier',
        'jest',
        'import',
        'react',
        'jsx-a11y',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: { es6: true, node: true, 'jest/globals': true },
    settings: {
        'import/resolver': {
            node: { extensions: ['.js', '.ts', '.tsx'] },
        },
    },
    rules: {},
};
