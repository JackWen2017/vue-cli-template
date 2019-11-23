module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-unused-vars': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
