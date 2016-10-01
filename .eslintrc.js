"use strict";

module.exports = {
  extends: [
    'eslint:recommended',
    require.resolve('./rules/base'),
    require.resolve('./rules/es2017'),
  ],
  env: {
    node: true
  }
};
