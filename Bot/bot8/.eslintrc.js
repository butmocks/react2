module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: 'eslint-config-airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 2,
    'import/prefer-default-export': 0,
  },
  globals: {
    document: true,
    alert: true,
  },
};
