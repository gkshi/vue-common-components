<template lang="pug">
  pre.code-component
    code
      div(v-if="data") {{ data }}
      slot(v-else)
</template>

<script>
export default {
  name: 'code-component',
  props: {
    data: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .code-component {
    code {
      display: block;
      background: $color-light;
    }
  }
</style>
