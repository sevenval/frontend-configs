# Changelog

## 1.0.1

* Disable `prefer-function-over-method` rule

## 1.0.0

* Remove style-related rules (use `prettier` for that).
* Add more sensitive defaults

## 0.6.4

* Add `devDependencies` to `no-implicit-dependencies` rule

## 0.6.3

* Explicitely disable `variable-name` rule. The `tslint:latest` preset recently
  added it back in which is why we have to opt-out.

## 0.6.1 + 0.6.2

* Remove `variable-name` rule. Get's too much in the way when writing jsx.

## 0.6.0

Add code-style rules. Unfortunately `TSLint` is not as feature
rich as `ESLint` in this regard.

## 0.5.0

This is a pre-release. Everything seems to be working so far
and we'll slowly roll this preset out to more projects.
