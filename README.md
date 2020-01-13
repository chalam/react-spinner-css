# react-spinner-css

ReactJS CSS Spinner
https://www.npmjs.com/package/react-spinner-css
https://github.com/alex996/react-css-spinners

-   Add editor config https://editorconfig.org/

```sh
vi .editorconfig
vi .gitignore
```

-   Add eslint
    https://eslint.org/docs/user-guide/getting-started
    https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

```sh
npm i -D eslint
npx eslint --init
vi .eslintrc.json
vi .eslintignore
npx eslint "src/**/*.js"
```

-   Add prettier code formatter
    https://prettier.io/docs/en/integrating-with-linters.html
    https://github.com/prettier/prettier-eslint
    https://github.com/prettier/prettier-eslint-cli
    https://dev.to/sophiabrandt/format-and-fix-all-files-with-prettier-and-eslint-recursively-1gld
    May be format on save: true

```sh
npm i -D prettier prettier-eslint eslint-plugin-prettier eslint-config-prettier
vi .prettierrc
vi .prettierignore
npx prettier-eslint "src/**/*.js"
```

-   Add dependency checks with either depcheck or npm-check https://www.npmjs.com/package/npm-check

```sh
npm install depcheck -g
depcheck
npm install npm-check -g
npm-check
```

-   Add pre-commit hooks
    https://github.com/typicode/husky
    https://github.com/okonet/lint-staged

```sh
npm i -D husky lint-staged
vi package.json
```

-   Modules
    https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm

    -   **ESM** ES6 Modules `import {} from ''; export func()`
    -   **UMD** Universal Mod Def - usually the fallback module
    -   **CJS** CommonJS Sync `module = require('module') module.exports`
    -   **AMD** Async Module Def

-   Add bundler
    https://webpack.js.org/concepts/
    https://webpack.js.org/plugins/
    https://webpack.js.org/loaders/css-loader/
    https://rollupjs.org/guide/en/

```sh
npm i -D webpack webpack-cli
vi webpack.config.js
npx webpack

npm i -D  rollup rollup-plugin-babel rollup-plugin-node-resolve rollup-plugin-terser rollup-plugin-postcss @babel/core
vi rollup.config.js
npx rollup
```

-   test jest
    https://jestjs.io/
    -   Add eslint babel presets
    -   Add react test rendere
    -   Add webpack mocks

```sh
npm i -D jest babel-jest @babel/core @babel/preset-env
jest react-test-renderer eslint-plugin-jest
```

-   code coverage
    https://coveralls.io/

-   target browser in preset
    https://browserl.ist/
    https://github.com/browserslist/browserslist

-   Component Dev
    https://storybook.js.org/docs/guides/guide-react/
    https://storybook.js.org/docs/configurations/custom-webpack-config/
    https://react-styleguidist.js.org/

```sh
npx -p @storybook/cli sb init --type react_script
npm run storybook
```
