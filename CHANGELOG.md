# Changelog

## 3.0.0

- **breaking**: Deprecate `es5` preset. If you absolutely need it, you can
  install an older version via `npm install eslint-config-sevenval@2`
- **breaking**: The `react` preset has been merged into the default one. Instead
  of extending `eslint-config-sevenval/react` just use `eslint-config-sevenval`
- The preset is now based on `eslint-config-react-app`.

## 2.0.0

- Change few styling rules (#16, #15)
- Breaking: Upgrade `eslint-plugin-react` (#14)

## 1.4.1

- Upgrade `eslint-plugin-react` to fix an issue introduced by
  the recent prop-types split from React core.
- Update eslint to latest `4.x` release
- Run tests on node 8

## 1.4.0

- Update `react` preset
- Use `es6` environment which enables all es6 features except modules

## 1.3.0

- Add rule to disallow multiple spaces inside a line
- Add more react specific linting rules

## 1.2.1

- Use `babel-eslint` for better es6 parsing

## 1.2.0

- Add react preset

## 1.1.2

- Transfer repository to sevenval organization

## 1.1.1

- Fix incorrect license in `package.json`

## 1.1.0

- Add more code style rules

## 1.0.0

- initial release
