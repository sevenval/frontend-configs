module.exports = {
  extends: [
    "stylelint-config-standard"
  ],
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    // CSS Modules
    "selector-pseudo-class-no-unknown": [ true, {
      ignorePseudoClasses: [
        "export",
        "import",
        "global",
        "local",
      ],
    }],
    "property-no-unknown": [ true, {
      ignoreProperties: [
        "composes",
      ],
    }],
    "at-rule-no-unknown": [ true, {
      ignoreAtRules: [
        "value",
        "if",
        "else",
        "mixin"
      ],
    }],

    // Style
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
    // "selector-list-comma-newline-after": null,
  }
}
