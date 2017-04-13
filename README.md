VTab
---

[![npm](https://img.shields.io/npm/v/v-tab.svg)](https://www.npmjs.com/package/v-tab) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A Vue.js Plugin

Installation
------------

```bash
npm install --save v-tab
yarn add v-tab
```

Demo
----

[DEMO](https://github.com/dflourusso/v-tab)

Usage
-----

### Bundler (Webpack, Rollup)

```js
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-tab/dist/v-tab.css'

import { Tabs, Tab } from 'v-tab'

export default {
  components: { Tabs, Tab }
}
```

### Browser

```html
<link rel="stylesheet" href="v-tab/dist/v-tab.css"></link>
<script src="v-tab/dist/v-tab.js"></script>
```

Development
-----------

### Build

Bundle the js and css of to the `dist` folder:

```bash
yarn run build
# or
bin/build
```

### Dist

Bundle the js and css min of to the `dist` folder:

```bash
yarn run dist
# or
bin/dist
```

### Release

Bundle aliases for build and dist

```bash
yarn run release
```

### Publish

Generate git tag and push to github and npm pusblish

```bash
bin/publish
```

### Author

[Daniel Fernando Lourusso](http://dflourusso.com.br)

License
-------

[MIT](http://opensource.org/licenses/MIT)
