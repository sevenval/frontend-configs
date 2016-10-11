module.exports = {
  extends: [
    './rules/base',
    './rules/style',
    './rules/es2017',
    './rules/react',
  ].map(require.resolve),
};
