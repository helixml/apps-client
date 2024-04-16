# Developer Documentation

## Release

To release, create a Github tag following x.x.x semver. This builds and publishes the library to NPM via the [github action](.github/workflows/publish.yaml).

This will update the package.json version fields to match the tag, push to NPM and commit back to the repo.
