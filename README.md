# CacheVote DTO

Data Transfer Objects for the CacheVote API

## Install

### Github access token
To use it you may need a GitHub access token with at least package:read scope.
Place a file calle `.npmrc` in the root folder (next to the package.json) and add following line.  
Replace `TOKEN` with your personal GitHub access token

```text
//npm.pkg.github.com/:_authToken=TOKEN
@dev-fabi:registry=https://npm.pkg.github.com
```

````shell
$ npm install @dev-Fabi/cache-vote-dto
````

### 
You can use the package also without issuing a Personal GitHub token as npm has the ability to clone repositories.
To do so use following command. (It will take some time as the repository needs to be cloned and build first)

```shell
# to use a specific tag (replace TAG with the tag name e.g. v1.0.0)
$ npm install github:dev-Fabi/cache-vote-dto@TAG

# to use a specific commit (replace COMMIT with the 'short' commit hash)
$ npm install github:dev-Fabi/cache-vote-dto#COMMIT
```

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
