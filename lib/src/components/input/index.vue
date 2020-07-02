<template>
  <div class="common-input-component" :class="classList">
    <label v-if="$slots.default" :for="localId">
      <slot />
    </label>
    <input
      :id="localId"
      ref="field"
      :name="name"
      :type="native"
      :value="value"
      :placeholder="placeholder"
      :required="required"
      :autofocus="autofocus"
      :autocomplete="autocomplete ? 'on' : 'off'"
      :readonly="readonly"
      :disabled="disabled"
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
import mixinId from '../../mixins/id'
import mixinField from '../../mixins/field'

export default {
  mixins: [mixinId, mixinField],
  props: {
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

    // Input required state
    required: Boolean,

    // Input autofocus state
    autofocus: Boolean,

    // Autocomplete state
    autocomplete: {
      type: Boolean,
      default: true
    },

    // Input readonly state
    readonly: Boolean,

    // Input disabled state
    disabled: Boolean
  },
  computed: {
    classList () {
      let str = `common-input-type-${this.type} common-input-size-${this.size}`
      if (this.error) {
        str += ' common-input-error'
      }
      return str
    }
  },
  mounted () {
    if (this.autofocus) {
      this.focus()
    }
  }
}
</script>

<style lang="scss">
  .common-input-component {
    label {
      display: block;
    }
  }
</style>
