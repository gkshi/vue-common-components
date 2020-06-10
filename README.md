# vue-common-components

> Global basic components for your Vue.js/Nuxt.js project

## Getting started

#### 1. Install the dependency.

```bash
yarn add --dev vue-common-components
```

```bash
npm i vue-common-components
```

#### 2. Init the plugin.

If you are using Vue.js:
```javascript
// main.js
import Vue from 'vue'
import VueCommonComponents from 'vue-common-components'
Vue.use(VueCommonComponents)
```

If you are using Nuxt.js:  
The plugin inits automatically, you just have to add it in nuxt config:

```javascript
// nuxt.config.js
export default {
  plugins: [
    'vue-common-components'
  ],
  commonComponents: {
    // custom options here
  }
}
```

#### 3. Use common components everywhere in project:

```vue
// any component or page
<template>
  <div class="your-any-component">
    <common-button>Button</common-button>
  </div>
</template>

<script>
export default {
  // No need to import common components
}
</script>
```
