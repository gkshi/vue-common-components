<template>
  <div v-if="show" class="common-loader-component">
    Loading...
  </div>
</template>

<script>
export default {
  name: 'common-loader-component',
  props: {
    show: Boolean
  }
}
</script>

<style>
  .common-loader-component {}
</style>
