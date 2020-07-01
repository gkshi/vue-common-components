<template>
  <div v-if="show" class="common-loader-component">
    Loading...
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .common-loader-component {
    //
  }
</style>
