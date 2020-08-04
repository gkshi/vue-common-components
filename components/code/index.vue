<template lang="pug">
  pre.code-component(@click="select")
    code(ref="code")
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
  },
  methods: {
    select () {
      if (document.selection) { // IE
        const range = document.body.createTextRange()
        range.moveToElementText(this.$refs.code)
        range.select()
      } else if (window.getSelection) {
        const range = document.createRange()
        range.selectNode(this.$refs.code)
        window.getSelection().removeAllRanges()
        window.getSelection().addRange(range)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .code-component {
    max-width: 100%;
    margin: 0 auto;
    code {
      display: block;
      margin: 15px auto;
      padding: 15px 30px 17px;
      background: $color-light;
      font-family: monospace;
      font-size: $font-size-code;
      line-height: $line-height-code;
      border-radius: 5px;
      max-height: 250px;
      overflow: auto;
    }
  }
</style>
