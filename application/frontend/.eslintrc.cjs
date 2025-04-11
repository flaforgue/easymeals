module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    '../../.eslintrc.js',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  plugins: ['react', 'react-refresh', '@tanstack/query', 'readable-tailwind'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js', 'postcss.config.js', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'readable-tailwind/sort-classes': [
      'warn',
      {
        order: 'official',
      },
    ],
    'readable-tailwind/multiline': [
      'warn',
      {
        classesPerLine: 1,
        group: 'emptyLine',
        printWidth: 120,
      },
    ],
    'react/jsx-closing-tag-location': ['warn'],
    'react/jsx-tag-spacing': [
      'warn',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-curly-brace-presence': ['warn', 'never'],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/jsx-curly-newline': ['warn', 'consistent'],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
    'react/jsx-tag-spacing': ['warn'],
    'react/jsx-one-expression-per-line': [
      'warn',
      {
        allow: 'single-child',
      },
    ],
    '@stylistic/js/jsx-quotes': ['warn', 'prefer-double'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/no-rest-destructuring': 'warn',
    '@tanstack/query/stable-query-client': 'error',
  },
};
