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
      @focus="onFocus"
      @blur="onBlur"
      @keyup="$emit('keyup', $event)"
      @paste="onPaste"
    >
    <div v-if="typeof error === 'string'" class="common-input-error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import mixinId from '../../mixins/id'
import mixinField from '../../mixins/field'
import mixinFocusBlur from '../../mixins/focus-blur'

export default {
  mixins: [mixinId, mixinField, mixinFocusBlur],
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
      if (this.isFocused) {
        str += ' common-input-focused'
      }
      if (this.disabled) {
        str += ' common-input-disabled'
      }
      str += ` common-input-${this.value ? 'filled' : 'empty'}`
      return str
    }
  }
}
</script>

<style lang="scss">
  .common-input-component {
    label {
      display: block;
    }
    input {
      width: 100%;
    }
  }
</style>
