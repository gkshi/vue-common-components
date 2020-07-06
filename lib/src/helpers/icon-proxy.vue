<template>
  <span>
    <!-- eslint-disable-next-line -->
    <span v-if="typeof data === 'string'" v-html="data" />
    <component :is="data" v-else-if="data" />
  </span>
</template>

<script>
export default {
  props: {
    data: [Function, Object, String]
  }
}
</script>
