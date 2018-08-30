module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ['plugin:react/recommended', 'react-app'],
  rules: {
    'no-const-assign': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-var': 'error',
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-rest-params': 'error',
    // babel inserts `'use strict';` for us
    strict: ['error', 'never'],

    // react specific
    'react/prefer-es6-class': ['error', 'always'],
    'react/no-unused-prop-types': [
      'warn',
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],
    'react/no-unknown-property': 'error',
    'react/no-string-refs': 'error',
    'react/no-did-update-set-state': 'warn',
    'react/no-did-mount-set-state': 'warn',
    'react/no-deprecated': 'error',
    'react/no-array-index-key': 'off',

    // https://github.com/facebook/create-react-app/issues/2631
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
  },
};
