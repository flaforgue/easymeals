module.exports = {
  extends: ['../../.eslintrc.js'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  env: {
    node: true,
    jest: true,
  },
};
