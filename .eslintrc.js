module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    plugins: [
        '@typescript-eslint',
        'prettier',
        'jest',
        'react',
        'jsx-a11y',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
    },
    env: { browser: true, node: true, es6: true, 'jest/globals': true },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'prettier/prettier': ['error', { singleQuote: true }],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        'react/prop-types': 0,
        'react/no-unescaped-entities': 0,
    },
};
