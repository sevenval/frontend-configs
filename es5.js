module.exports = {
  extends: [
    './rules/base',
    './rules/style'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 5
  }
};
