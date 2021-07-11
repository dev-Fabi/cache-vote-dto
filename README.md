# CacheVote DTO

Data Transfer Objects for the CacheVote API

To use it you may need a GitHub access token with at least package:read scope.
Place a file calle `.npmrc` in the root folder (next to the package.json) and add following line.  
Replace `TOKEN` with your personal GitHub access token

```text
//npm.pkg.github.com/:_authToken=TOKEN
```

## Install
````shell
npm install github:dev-Fabi/cache-vote-dto
````

## Publish
1. Bump version
```shell
npm version [major | minor | patch | premajor | preminor | prepatch | prerelease --preid=rc ]
```
This also crates a new commit with version tag to the repo

2. Publish the new package version
```shell
npm publish
```
