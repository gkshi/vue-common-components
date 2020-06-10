<template lang="pug">
  header.header-component
    .wrapper.flex.a-center.j-between
      div
        nuxt-link(to="/") Common components
      .flex.a-center
        //- div
          nuxt-link(to="/get-started") Get Started
        //- div
          nuxt-link(to="/docs") Docs
        div
          a(:href="repository" target="_blank") GitHub
</template>

<script>
import app from '@/package.json'

export default {
  name: 'header-component',
  data () {
    return {
      repository: app.repository.url
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-component {
    padding: 10px 0;
    background: $color-light;
  }
</style>
