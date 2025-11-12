const tsParser = require('@typescript-eslint/parser')
const tsPlugin = require('@typescript-eslint/eslint-plugin')
const prettierPlugin = require('eslint-plugin-prettier')
const prettierConfig = require('eslint-config-prettier')

module.exports = [
  {
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    ignores: ['node_modules', 'Pods', 'build'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          printWidth: 100,
          tabWidth: 2,
          trailingComma: 'all',
          bracketSpacing: true,
          arrowParens: 'avoid',
        },
      ],
      'no-console': 'warn',
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['*.js', '*.cjs'],
    rules: {
      'no-console': 'warn',
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
    },
  },
]
