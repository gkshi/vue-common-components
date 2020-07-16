export default {
  data () {
    return {
      isFocused: false
    }
  },
  mounted () {
    if (this.autofocus) {
      this.focus()
    }
  },
  methods: {
    focus (e) {
      try {
        this.$nextTick(() => {
          this.onFocus(e)
        })
      } catch (e) {
        this.onFocus(e)
      }
    },
    onFocus (e) {
      this.isFocused = true
      this.$refs.input ? this.$refs.input.focus() : this.$refs.field.focus()
      this.$emit('focus', e)
    },
    onBlur (e) {
      this.isFocused = false
      this.$emit('blur', e)
    }
  }
}
