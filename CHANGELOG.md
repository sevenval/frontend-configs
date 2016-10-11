# Changelog

## 1.3.0

- Add support for CSS-Modules

## 1.2.1

- Complete repo transfer to sevenval organization

## 1.2.0

- Support sass conditionals in one line

```scss
@if $a {
  color: red;
} @else {
  color: blue;
}
```

## 1.1.0

- Remove selector depth limits. There is no way that would go well with parsing projects
- Disable "declaration-empty-line-before" rule. We don't have an empty line after `@extend`

## 1.0.0

- Initial Release
