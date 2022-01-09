module.exports = {
  extends: 'airbnb-base',
  plugins: ['jest'],
  env: {
    node: true,
    es2020: true,
    'jest/globals': true,
  },
  globals: {
    document: true,
  },
  rules: {
    semi: 0,
  },
}
