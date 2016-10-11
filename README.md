# Sevenval ESLint Rules

[![NPM version](http://img.shields.io/npm/v/eslint-config-sevenval.svg)](https://www.npmjs.org/package/eslint-config-sevenval)  [![Build Status](https://travis-ci.org/sevenval/eslint-config-sevenval.svg?branch=master)](https://travis-ci.org/sevenval/eslint-config-sevenval)

The official style rules for JavaScript written at Sevenval.

## Installation

```bash
npm install --save-dev eslint-config-sevenval
```

## Usage

Create a file named `.eslintrc` in your project root with the following
content:

```json
{
  "extends": "eslint-config-sevenval"
}
```

For react projects:

```json
{
  "extends": "eslint-config-sevenval/react"
}
```

For legacy ES 5 projects:

```json
{
  "extends": "eslint-config-sevenval/es5"
}
```
