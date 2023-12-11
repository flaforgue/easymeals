module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/explicit-member-accessibility": ["error"],

    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "space-before-function-paren": [
      "error",
      { "anonymous": "always", "named": "never", "asyncArrow": "always" }
    ],
    "max-len": [
      "warn",
      {
        "code": 100
      }
    ],
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "default-case": ["error"],
    "default-param-last": ["error"],
    "prefer-const": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "memberLike",
        "modifiers": ["private"],
        "format": ["camelCase"],
        "leadingUnderscore": "require"
      }
    ],
    "max-classes-per-file": ["error", 1],
    "no-caller": ["error"],
    "no-constructor-return": ["error"],
    "no-eq-null": ["error"],
    "no-eval": ["error"],
    "no-extend-native": ["error"],
    "no-implicit-globals": ["error"],
    "no-implied-eval": ["error"],
    "no-invalid-this": ["error"],
    "no-iterator": ["error"],
    "no-labels": ["error"],
    "no-lone-blocks": ["error"],
    "no-loop-func": ["error"],
    "no-multi-str": ["error"],
    "no-new-func": ["error"],
    "no-new-wrappers": ["error"],
    "no-octal-escape": ["error"],
    "no-param-reassign": ["error"],
    "no-proto": ["error"],
    "no-return-assign": ["error"],
    "no-return-await": ["error"],
    "no-script-url": ["error"],
    "no-self-compare": ["error"],
    "no-sequences": ["error"],
    "no-throw-literal": ["error"],
    "no-useless-call": ["error"],
    "no-useless-concat": ["error"],
    "no-var": "error",
    "no-void": ["error"],
    "prefer-regex-literals": ["error"],
    "radix": ["error"],
    "require-await": ["error"]
  },
};
