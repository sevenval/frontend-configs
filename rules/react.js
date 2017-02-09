module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
    }
  },
  extends: [
    'plugin:react/recommended'
  ],
  plugins: [
    'react'
  ],
  rules: {
    'react/prefer-es6-class': ['error', 'always'],
    'react/self-closing-comp': 'error',
    'react/no-unused-prop-types': ['warn', {
      customValidators: [],
      skipShapeProps: true,
    }],
    'react/style-prop-object': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-children-prop': 'error',
    'react/prefer-stateless-function': 0,
    'react/jsx-no-bind': 2,
    'react/jsx-indent': [2, 2],
    'react/no-multi-comp': 2,
    'react/sort-comp': 2,
    'react/require-render-return': 2,
    'react/no-unknown-property': 2,
    'react/no-string-refs': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-deprecated': 2,
    'react/no-array-index-key': 2
  }
};
