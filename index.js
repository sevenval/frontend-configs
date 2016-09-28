module.exports = {
  extends: "stylelint-config-standard",
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "at-rule-empty-line-before": [
      "always",
      {
        except: [
          "blockless-after-same-name-blockless",
          "first-nested"
        ],
        ignore: [
          "after-comment"
        ],
        ignoreAtRules: [
          "if",
          "else"
        ]
      }
    ],
    "block-closing-brace-newline-after": [
      "always",
      {
        ignoreAtRules: [
          "if",
          "else"
        ]
      }
    ],
    "color-hex-case": null,
    "color-hex-length": null,
    "color-named": null,
    "declaration-colon-newline-after": null,
    "declaration-empty-line-before": null,
    "function-name-case": null,
    "number-leading-zero": null,
    "selector-max-compound-selectors": null,
    "shorthand-property-no-redundant-values": null,
  }
}
