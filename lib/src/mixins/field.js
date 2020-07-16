export default {
  methods: {
    focus () {
      try {
        // for Nuxt.js
        this.$nextTick(() => {
          this.$refs.field.focus()
        })
      } catch (e) {
        // for Vue.js
        this.$refs.field.focus()
      }
    },
    select () {
      try {
        this.$nextTick(() => {
          // for Nuxt.js
          this.$refs.field.focus()
          this.$refs.field.select()
        })
      } catch (e) {
        // for Vue.js
        this.$refs.field.focus()
        this.$refs.field.select()
      }
    },
    onPaste (e) {
      e.preventDefault()
      const value = e.clipboardData.getData('Text')
      this.$emit('paste', value)
      this.$emit('input', value)
    }
  }
}
