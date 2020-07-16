<template>
  <component
    :is="tag"
    class="common-text-component"
    :class="classList"
    @click="$emit('click', $event)"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    weight: {
      type: String,
      default: 'regular'
    }
  },
  computed: {
    classList () {
      return `common-text-type-${this.type} common-text-size-${this.size} common-text-weight-${this.weight}`
    }
  }
}
</script>

<style lang="scss">
  .common-text-component {
    //
  }
</style>
