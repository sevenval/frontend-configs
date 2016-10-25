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
    "guard-for-in": "error",
    "no-unneeded-ternary": "error",
    "eqeqeq": ["error", "allow-null"],
    "space-infix-ops": "error",
    "semi": "error",
    "valid-jsdoc": ["error", {
      "requireReturnType": false,
      "requireReturn": false,
      "requireReturnDescription": false,
      "requireParamDescription": false
    }],
    "no-multi-spaces": "error"
  }
};
