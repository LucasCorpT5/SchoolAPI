module.exports = {
  env: {
    es2017: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'eslintno-unused-vars': 'on',
    'no-params-reassing': 'off',
  },
};
