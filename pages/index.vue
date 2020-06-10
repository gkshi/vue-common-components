<template lang="pug">
  .page.index
    .wrapper
      section
        h1 Common components
        h2 {{ description }}

      //- div
        div(v-for="component in config.components" :key="component") {{ component }}

      section
        h3 Getting started
        .block
          div 1. Install the dependency.
          vCode(:data="codes.yarn_install")
          vCode(:data="codes.npm_install")

        .block
          div 2. Init the plugin.
          div If you are using Vue.js put it in main.js:
          vCode(:data="codes.vue_init")
        .block
          div If you are using Nuxt.js:
          div The plugin inits automatically, you just have to add it in nuxt.config.js:
          vCode(:data="codes.nuxt_init")

        .block
          div 3. Use common components everywhere in project:
          vCode(:data="codes.using")
</template>

<script>
import config from '@/lib/config'
import vCode from '@/components/code'

const description = require('@/package.json').description

export default {
  components: {
    vCode
  },
  data () {
    return {
      config,
      description,
      codes: {
        yarn_install: 'yarn add --dev vue-common-components',
        npm_install: 'npm i vue-common-components',
        vue_init: `import Vue from 'vue'
import VueCommonComponents from 'vue-common-components'
Vue.use(VueCommonComponents)`,
        nuxt_init: `export default {
  plugins: [
    'vue-common-components'
  ],
  commonComponents: {
    // custom options here
  }
}`,
        using: `<template>
  <div class="your-any-component">
    <common-button>Button</common-button>
  </div>
</template>

<script>
export default {
  // No need to import common components
}
< /script>`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .page.index {
    section {
      margin-bottom: 50px;
    }
    .block {
      margin-bottom: 20px;
    }
  }
</style>
