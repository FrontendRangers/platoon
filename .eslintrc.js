module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
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
    },
    env: { es6: true, node: true, 'jest/globals': true },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: { extensions: ['.js', '.ts', '.tsx'] },
        },
    },
    rules: {
        'prettier/prettier': ['error', { singleQuote: true }],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
    },
};
