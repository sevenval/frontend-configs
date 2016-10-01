module.exports = {
  extends: [
    './rules/base',
    './rules/es2017',
  ].map(require.resolve),
};
