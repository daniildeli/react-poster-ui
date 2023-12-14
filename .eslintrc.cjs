module.exports = {
    env: {
        'node': true,
        'browser': true,
        'es2021': true,
      },
      extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['react', 'react-hooks'],
    rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'eol-last': ['error', 'always'],
        'no-trailing-spaces': 'error',
        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'always',
            'imports': 'never',
            'exports': 'never',
            'functions': 'never',
        }],
        'space-before-blocks': 'error',
        'keyword-spacing': 'error',
        'object-curly-spacing': ['error', 'always'],
        'no-unused-vars': ['error', {
            'argsIgnorePattern': '^_',
            'varsIgnorePattern': '^_',
            'caughtErrorsIgnorePattern': '^_',
        }],
        'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
};
