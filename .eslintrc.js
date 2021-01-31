module.exports = {
  extends: 'airbnb-base',
  plugins: ['jest'],
  env: {
    node: true,
    es6: true,
    'jest/globals': true,
  },
  globals: {
    document: true,
  },
  rules: {
    semi: 0,
  },
}
