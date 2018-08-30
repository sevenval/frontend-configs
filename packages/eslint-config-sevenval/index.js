module.exports = {
  extends: ['./rules/base', './rules/style', './rules/es2017'].map(
    require.resolve,
  ),
};
