<template>
  <transition>
    <div v-if="show" class="common-loader-component" @click="$emit('click', $event)">
      <icon-proxy v-if="_options && _options.icon" class="common-loader-icon" :data="_options.icon" />
      <span v-else class="loader-indicator">Loading...</span>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: Boolean
  },
  watch: {
    show () {
      this.$emit(this.show ? 'show' : 'hide')
    }
  }
}
</script>

<style lang="scss">
  .common-loader-component {
    transition: all .3s ease;

    &.v-enter,
    &.v-leave-active {
      opacity: 0;
    }
  }
</style>
