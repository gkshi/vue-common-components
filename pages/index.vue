<template lang="pug">
  .page.index
    .flex.column.center
      .wrapper.narrow.flex.column.center
        h1 Common components
        h2.text-regular {{ description }}.
      .component-list.flex.center
        nuxt-link.component(v-for="component in components" :to="`/docs?component=${component.id}`" :key="component.id") {{ component.title }}

    .wrapper.narrow(id="get_started")
      .h1.heading.flex.center Getting started

      .block
        .h3
          span 1. Install the dependency via
          = " "
          u yarn
          = " "
          span or
          = " "
          u npm.
        vCode(:data="codes.yarn_install")
        vCode(:data="codes.npm_install")

      .block.less-margin
        .h3 2. Init the plugin.
        div For Vue.js project: use it in your main.js file:
        vCode(:data="codes.vue_init")

      .block
        div For Nuxt.js project: the plugin inits automatically, just add it in nuxt.config.js:
        vCode(:data="codes.nuxt_init")

      .block.more-margin
        .h3 3. Use common components everywhere in project:
        div All common components will register globally.
        div Just use them in your other components or pages.
        vCode(:data="codes.using")

      .block
        .h1.flex.center Manual options
        vCode(:data="codes.init_options")
        .h3 components
        div An array of the components to be registered. All of them by default.
        .space
        .space
        .h3 nameCasing
        div Name casing you prefer.
        div camelCase (by default), PascalCase, kebab-case or snake_case.

    .pagination.wrapper.narrow.flex.a-center.j-end
      div Next:&nbsp;
      div
        nuxt-link(to="/docs") Documentation →
</template>

<script>
import { mapState } from 'vuex'
import vCode from '@/components/code'

const description = require('@/package.json').description

export default {
  components: {
    vCode
  },
  data () {
    return {
      description,
      codes: {
        yarn_install: 'yarn add --dev vue-common-components',
        npm_install: 'npm i vue-common-components',
        vue_init: `import Vue from 'vue'
import VueCommonComponents from 'vue-common-components'
Vue.use(VueCommonComponents, {
  // manual options here
})`,
        nuxt_init: `export default {
  plugins: [
    'node_modules/vue-common-components'
  ],
  commonComponents: {
    // manual options here
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
< /script>`,
        init_options: `{
  components: ['button', 'input'],
  nameCasing: 'camelCase'
}`
      }
    }
  },
  computed: {
    ...mapState({
      components: state => state.components
    })
  }
}
</script>

<style lang="scss" scoped>
  .page.index {
    margin-top: 60px;
    margin-bottom: 100px;
    .heading {
      margin-bottom: 40px;
    }
    .component-list {
      width: 800px;
      max-width: 100%;
      margin: 50px auto 100px;
      & > * {
        margin: 8px;
      }
    }
    .component {
      display: block;
      background: $color-light;
      color: $color-text-regular;
      padding: 10px 32px 12px;
      border-radius: 30px;
      text-decoration: none;
      transition: $transition-default;
      &:hover {
        background: darken($color-light, 3%);
      }
    }
    section {
      margin-bottom: 50px;
    }
    .pagination {
      margin-top: 100px;
    }
  }
</style>
