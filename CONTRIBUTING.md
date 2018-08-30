# Contribution Guidelines

## Found a Bug?

If you find a bug, you can help us by [submitting an issue](https://github.com/sevenval/frontend-configs/issues/new) and even better, you can submit a [Pull Request](https://github.com/sevenval/frontend-configs/pulls) with a fix.

## Contributing a Pull Request (PR)

To contribute a successful Pull Request (commonly referred to as a PR), write
down a short summary of your changes and why you think they are necessary.
This makes your PR easier to review.

## Publishing a new release

Please follow these steps when releasing a new version of any of the packages
in this repository.

1. Increase the version number inside `package.json` for the relevant package according to [SemVer](https://semver.org/)
2. Update the package's `CHANGELOG.md` by adding the release notes
3. Tag the release on GitHub (can be found behind the menu item `Releases`)
4. Write down a summary of the changes from the perspective of an enduser. Answer questions like: What has changed? Do users need to change something to ensure that the new version works with their code? Where there any breaking changes? etc. This can be similar to the content in `CHANGELOG.md`.
