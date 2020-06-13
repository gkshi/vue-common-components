<template>
  <div class="common-input-component" :class="classList">
    <label v-if="$slots.default" :for="localId">
      <slot />
    </label>
    <input
      :id="localId"
      :name="name"
      :type="native"
      :value="value"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="placeholder"
      :autofocus="autofocus"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @keyup="$emit('keyup', $event)"
      @paste="paste"
    >
    <div v-if="typeof error === 'string'" class="common-input-error">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'common-input-component',
  props: {
    // ID for label and input
    id: String,

    // Input name value
    name: String,

    // Input type value
    native: {
      type: String,
      default: 'text'
    },

    // Input type for custom styles
    type: {
      type: String,
      default: 'default'
    },

    // Input size for custom styles
    size: {
      type: String,
      default: 'default'
    },

    // Input reactive value
    value: [String, Number],

    // Error message or state
    error: [String, Boolean],

    // Input placeholder
    placeholder: String,

    // Input autofocus state
    autofocus: Boolean,

    // Input readonly state
    readonly: Boolean,

    // Input disabled state
    disabled: Boolean
  },
  data () {
    return {
      localId: this.id
    }
  },
  computed: {
    classList () {
      let str = `common-input-type-${this.type} common-input-size-${this.size}`
      if (this.error) {
        str += ' common-input-component-error'
      }
      return str
    }
  },
  mounted () {
    // Random ID generating if no ID as prop
    this.localId = this.localId || Math.random().toFixed(7).slice(2)
    if (this.autofocus) {
      this.focus()
    }
  },
  methods: {
    focus () {
      try {
        // for Nuxt.js
        this.$nextTick(() => {
          this.$refs.input.focus()
        })
      } catch (e) {
        // for Vue.js
        this.$refs.input.focus()
      }
    },
    select () {
      try {
        this.$nextTick(() => {
          // for Nuxt.js
          this.$refs.input.focus()
          this.$refs.input.select()
        })
      } catch (e) {
        // for Vue.js
        this.$refs.input.focus()
        this.$refs.input.select()
      }
    },
    paste (e) {
      e.preventDefault()
      const value = e.clipboardData.getData('Text')
      this.$emit('paste', value)
      this.$emit('input', value)
    }
  }
}
</script>

<style>
  .common-input-component {}
</style>
