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
  ],
  rules: {
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': 'error',
    'react/self-closing-comp': 'error',
    'react/no-unused-prop-types': ['warn', {
      customValidators: [],
      skipShapeProps: true,
    }],
    'react/style-prop-object': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-children-prop': 'error'
  }
};
