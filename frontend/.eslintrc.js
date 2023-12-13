module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'next/core-web-vitals',
  ],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'semi': ['error', 'always'],
    'sort-imports': ['error'],
  },
};
