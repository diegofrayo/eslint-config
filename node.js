module.exports = {
  extends: ['eslint:all', 'airbnb-base', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  globals: {
    console: true,
    Promise: true,
  },
  rules: {
    // https://eslint.org/docs/rules/
    'arrow-body-style': 0,
    'no-console': 0,
    'no-continue': 0,
    'no-underscore-dangle': 0,
    'valid-typeof': 0,

    // -----------------------

    // https://eslint.org/docs/rules/
    'no-param-reassign': 1,
    'no-unreachable': 1,
    'no-unused-expressions': 1,
    'no-unused-vars': 1,
    'prefer-promise-reject-errors': 1,
  },
};
