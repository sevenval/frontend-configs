module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
    }
  },
  extends: [
    "plugin:react/recommended"
  ],
  plugins: [
    "react"
  ]
};
