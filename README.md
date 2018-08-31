# Sevenval Frontend Configs

This repository contains configuration files for several tools commonly used
when developing frontends.

Table of contents:

- [Editorconfig](#editorconfig)
- [Prettier](#prettier)
- [Stylelint](#stylelint)
- [ESLint](#eslint)
- [TSLint](#tslint)
- [Setting up Git-Hooks](#git-hooks)

## Editorconfig

All popular editors support [EditorConfig](https://editorconfig.org/)
as a way to share common settings like encoding, indentation style or
which character to use for line-endings. Throughout our projects we use
this config:

```ini
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
insert_final_newline = true
trim_trailing_whitespace = true
```

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

Besides the IDE-Plugins we recommend setting up a `pre-commit` so that only
formatted code finds its way into the repository. Please read the docs about
[Git-Hooks](#githooks) for instructions on how to do so.

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
  extends: 'stylelint-config-sevenval',
};
```

If you need to further customise the ruleset for your project you can look
[into the official docs](https://stylelint.io/user-guide/configuration/#the-configuration-object).

### Editor Plugins

- [Atom](https://atom.io/packages/linter-stylelint)
- [vim](https://github.com/vim-syntastic/syntastic/blob/master/syntax_checkers/css/stylelint.vim)
- [Visual Studio Code](https://github.com/shinnn/vscode-stylelint)
- [Sublime Text](https://github.com/SublimeLinter/SublimeLinter-stylelint)
- [WebStorm](https://www.jetbrains.com/help/webstorm/using-stylelint-code-quality-tool.html)

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
  "extends": "tslint-config-sevenval"
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

## Git Hooks

Git hooks can be used to execute arbitrary scripts or commands on git events. The most popular one is the `pre-commit` hook which runs just before
a git commit is created. We recommend create a `pre-commit` hook for
[prettier](#prettier) so that only formatted code can enter the repository.

If there isn't already a git hook pipeline setup in your project we
suggest setting them up via [husky](https://github.com/typicode/husky)
and [lint-staged](https://github.com/okonet/lint-staged). _Note that for backend projects that are not based on nodejs you'll likely encounter different tools for setting up git hooks._

```bash
npm install --save-dev husky
```

Husky is used to execute npm scripts defined in `package.json` as a git hook.

```json
{
  "name": "my-project",
  "scripts": {
    "pre-commit": "echo 'hello world'"
  },
  "devDependencies": {
    "husky": "^x.x.x"
  }
}
```

This will output `hello world` before creating a commit.

If you execute commands that expect an files as input like it is commonly
done with linters, you do not want to lint the whole repository. Instead developers only want to check the files that are staged in git. This is
a lot more performant and ensures a less invasive workflow change.

For that we have made great experiences with [lint-staged](https://github.com/okonet/lint-staged).

```bash
npm install --save-dev lint-staged
```

After the package is installed you can enable it via extending
`package.json`. This config tells lint stage to always run prettier if the
staged file ends with `.js` or `.json`:

```json
{
  "name": "my-project",
  "scripts": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,json}": ["prettier --write", "git add"]
  },
  "devDependencies": {
    "husky": "^x.x.x",
    "lint-staged": "^x.x.x"
  }
}
```
