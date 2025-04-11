module.exports = {
  extends: ['../../.eslintrc.js'],
  ignorePatterns: ['dist'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  env: {
    node: true,
  },
};
