# Sevenval Frontend Configs

This repository contains configuration files for several tools commonly used
when developing frontends.

Table of contents:

- [Prettier](#prettier)
- [Stylelint](#stylelint)
- [ESLint](#eslint)
- [TSLint](#tslint)
- [Setting up Git-Hooks](#githooks)

<a href="#prettier"/>

## Prettier

[Prettier](https://prettier.io/) is a tool for automatic code formatting. For a
complete list of supported languages head over to [their docs](https://prettier.io/docs/en/language-support.html).
If you're unsure what it does, you can try it online without any installations
via the [playground](https://prettier.io/playground/).

### Usage

Install prettier in your project:

```bash
npm install --save-dev prettier
```

Add `.prettierrc` file at the root directory with the following content:

```json
{
  "trailingComma": "all",
  "singleQuote": true
}
```

### Editor Plugins

We highly recommend to install the relevant plugin for your editor of choice to
enable formatting on save. Please follow the installation instructions of the
plugins README.

- [Atom](https://github.com/prettier/prettier-atom)
- [vim](https://prettier.io/docs/en/vim.html)
- [Visual Studio Code](https://github.com/prettier/prettier-vscode)
- [Visual Studio](https://github.com/madskristensen/JavaScriptPrettier)
- [Sublime Text](https://packagecontrol.io/packages/JsPrettier)
- [WebStorm, PyCharm, PHPStorm, etc](https://prettier.io/docs/en/webstorm.html)

Please consult the [official docs](https://prettier.io/docs/en/install.html) for more information like on how to [ignoring code](https://prettier.io/docs/en/ignore.html)
and other topics.

### Githook integration (optional)

Besides the IDE-Plugins we recommend setting up a `pre-commit` so that only
formatted code finds its way into the repository. Please read the docs about
[Git-Hooks](#githooks) for instructions on how to do so.

<a href="#stylelint"/>

## Stylelint

With the advent of various compile to CSS languages, [stylelint](https://stylelint.io/) has been created to support a one size fits all linting solution for all your style-related files. It follows the footsteps of previous
libraries like [sass-lint](https://github.com/sasstools/sass-lint)
and [scss-lint](https://github.com/brigade/scss-lint).

### Usage

Install stylelint in your project:

```bash
npm install --save-dev stylelint stylelint-config-sevenval
```

Add the configuration file `stylelint.config.js` with the following content:

```js
module.exports = {
  extends: "stylelint-config-sevenval"
}
```

If you need to further customise the ruleset for your project you can look
[into the official docs](https://stylelint.io/user-guide/configuration/#the-configuration-object).

### Editor Plugins

- [Atom](https://atom.io/packages/linter-stylelint)
- [vim](https://github.com/vim-syntastic/syntastic/blob/master/syntax_checkers/css/stylelint.vim)
- [Visual Studio Code](https://github.com/shinnn/vscode-stylelint)
- [Sublime Text](https://github.com/SublimeLinter/SublimeLinter-stylelint)
- [WebStorm](https://www.jetbrains.com/help/webstorm/using-stylelint-code-quality-tool.html)

<a href="#eslint"/>

## ESLint

[ESLint](https://eslint.org/) has been the standard for lining JavaScript-based
code for quite a while. It enjoys a solid standing throughout the whole 
Open-Source Community being known for it's rock solid support.

### Usage

Installing eslint:

```bash
npm install --save-dev eslint eslint-config-sevenval
```

Add the configuration file `.eslintrc` with the following content:

```json
{
  "extends": "eslint-config-sevenval"
}
```

If you need to further customise the ruleset for your project you can look
[into the official docs](https://eslint.org/docs/user-guide/configuring).

### Editor Plugins

- [Atom](https://atom.io/packages/linter-eslint)
- [vim](https://github.com/vim-syntastic/syntastic/tree/master/syntax_checkers/javascript)
- [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Sublime Text](https://github.com/SublimeLinter/SublimeLinter-eslint)
- [WebStorm](https://www.jetbrains.com/help/webstorm/eslint.html)

<a href="#tslint"/>

## TSLint

[TSLint](https://palantir.github.io/tslint/) works similarly as ESLint just for
TypeScript.

### Usage

Installing eslint:

```bash
npm install --save-dev tslint tslint-config-sevenval
```

Add the configuration file `tslint.json` with the following content:

```json
{
  "extends": "tslint-config-sevenval",
}
```

If you need to further customise the ruleset for your project you can look
[into the official docs](https://palantir.github.io/tslint/usage/configuration/).

### Editor Plugins

- [Atom](https://atom.io/packages/linter-tslint)
- [vim](https://github.com/vim-syntastic/syntastic/blob/master/syntax_checkers/typescript/tslint.vim)
- [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
- [Sublime Text](https://github.com/SublimeLinter/SublimeLinter-tslint)
- [WebStorm](https://www.jetbrains.com/help/webstorm/tslint.html)