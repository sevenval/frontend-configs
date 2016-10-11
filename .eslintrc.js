"use strict";

module.exports = {
  extends: [
    'eslint:recommended',
    require.resolve('./rules/base'),
    require.resolve('./rules/es2017'),
    require.resolve('./rules/react'),
  ],
  env: {
    node: true
  }
};
