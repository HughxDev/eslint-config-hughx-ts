<p align="center"><img src="https://raw.githubusercontent.com/HughxDev/eslint-config-hughx-ts/master/eslint-config-hughx-ts.svg?sanitize=true" width="150" alt="logo" /></p>

<h1 align="center">eslint-config-hughx-ts</h1>

<p align="center">Provides <a href="https://hughx.dev/from-github-elint-config-hughx-ts">hughx</a>’s TypeScript conventions as <code>.eslintrc</code> shared configs.<br />Emphasizes readability and ease of writing.</p>

<p align="center"><a href="https://www.npmjs.com/package/eslint-config-hughx-ts"><img src="https://img.shields.io/npm/dm/eslint-config-hughx-ts.svg" alt="Downloads per month (NPM)"></a></p>

----

ℹ️ For plain JavaScript support, use [`eslint-config-hughx`](https://github.com/HughxDev/eslint-config-hughx) instead.

## Installation

### npm versions 7 and above

```zsh
npm install -D eslint-config-hughx-ts
```

### yarn and older npm

You will have to install `peerDependencies` manually:

```zsh
# npm install -D
yarn add -D \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb-typescript \
  eslint-config-hughx \
  eslint-config-hughx-ts \
  eslint-plugin-import
```

### React projects

```zsh
# npm install -D
yarn add -D \
  @types/react \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb-typescript \
  eslint-config-hughx \
  eslint-config-hughx-ts \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint-plugin-react \
  eslint-plugin-react-hooks
```

### Node projects

Same as above, but you will need to add the following as well:

```zsh
# npm install -D
yarn add -D \
  @types/node \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb-typescript \
  eslint-config-hughx \
  eslint-config-hughx-ts \
  eslint-plugin-import
```

## Usage

Extend `hughx-ts` in your project’s `.eslintrc.js` or equivalent:

```js
module.exports = {
  "extends": [
    "hughx-ts",
  ],
  // …
}
```

Eslint-config-hughx-ts defaults to the latest version of JavaScript/ECMAScript at the time of release. If your transpiler isn’t set up for this (or you don’t use one), then you should override both `env.es*` and `parserOptions.ecmaVersion`, e.g.

```js
// Downgrading from ES2021 to ES6
module.exports = {
  "extends": [
    "hughx-ts",
  ],
  "env": {
    "es2021": false,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6
  }
};
```

## Environment-specific Configs

You can extend from one of the following to bring in sensible defaults for different use cases:

- `hughx-ts/react`
- `hughx-ts/node`
- `hughx-ts/web-components`