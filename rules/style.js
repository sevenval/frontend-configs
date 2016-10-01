module.exports = {
  rules: {
    "keyword-spacing": "error",
    "space-infix-op": "off",
    "no-trailing-spaces": "error",
    "space-before-blocks": "error",
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 3 }],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "lines-around-comment": ["error", { "beforeBlockComment": true }],
    "spaced-comment": ["error", "always"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "one-var": ["error", "never"],
    "func-call-spacing": "error",
    "yoda": "error",
  }
};
