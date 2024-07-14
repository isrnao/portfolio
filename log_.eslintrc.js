// .eslintrc.js

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'next/core-web-vitals',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/react-in-jsx-scope': 'off', // JSXでのReactインポートを無効化
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'react/jsx-props-no-spreading': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    settings: {
        react: {
            version: 'detect', // Reactバージョンの自動検出を明示的に指定
        },
        'import/resolver': {
            typescript: {},
        },
    },
};
