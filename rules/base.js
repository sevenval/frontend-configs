module.exports = {
  root: true,
  extends: [
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      "impliedStrict": true
    }
  },
  env: {
    browser: true,
    mocha: true
  },
  globals: {
    ai: true,
    ac: true
  },
  rules: {
    "no-console": "error",
    "no-alert": "error",
    "no-else-return": "error",
    "no-fallthrough": "error",
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-with": "error",
    "array-callback-return": "error",
    "func-call-spacing": "error",
    "guard-for-in": "error",
    "yoda": "error",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "one-var": ["error", "never"],
    "no-unneeded-ternary": "error",
    "eqeqeq": ["error", "allow-null"],
    "space-infix-ops": "error",
    "semi": "error",
    "spaced-comment": ["error", "always"],
    "valid-jsdoc": ["error", {
      "requireReturnType": false,
      "requireReturn": false,
      "requireReturnDescription": false,
      "requireParamDescription": false
    }],
    "lines-around-comment": ["error", { "beforeBlockComment": true }]
  }
};
