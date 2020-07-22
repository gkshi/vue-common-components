<template lang="pug">
  #app
    vHeader
    main
      nuxt
    // vFooter
    common-notification
</template>

<script>
import vHeader from '@/components/header'
import vFooter from '@/components/footer'

export default {
  components: {
    vHeader,
    vFooter
  }
}
</script>

<style lang="scss">
  #app {
    main {
      padding-top: $header-height;
    }
  }
</style>
