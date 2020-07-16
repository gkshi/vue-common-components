<template>
  <div class="common-textarea-component">
    <label v-if="$slots.default" :for="localId">
      <slot />
    </label>
    <textarea
      :id="localId"
      ref="field"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :required="required"
      :autofocus="autofocus"
      :readonly="readonly"
      :disabled="disabled"
      :cols="cols"
      :rows="rows"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @focus="onFocus"
      @blur="onBlur"
      @keyup="$emit('keyup', $event)"
      @paste="onPaste"
    />
    <div v-if="typeof error === 'string'" class="common-textarea-error">
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
    // Textarea name value
    name: String,

    // Textarea type for custom styles
    type: {
      type: String,
      default: 'default'
    },

    // Textarea size for custom styles
    size: {
      type: String,
      default: 'default'
    },

    // Textarea reactive value
    value: [String, Number],

    // Error message or state
    error: [String, Boolean],

    cols: Number,
    rows: Number,

    // Textarea placeholder
    placeholder: String,

    // Textarea required state
    required: Boolean,

    // Textarea autofocus state
    autofocus: Boolean,

    // Textarea readonly state
    readonly: Boolean,

    // Textarea disabled state
    disabled: Boolean
  },
  computed: {
    classList () {
      let str = `common-textarea-type-${this.type} common-textarea-size-${this.size}`
      if (this.error) {
        str += ' common-textarea-error'
      }
      if (this.isFocused) {
        str += ' common-textarea-focused'
      }
      if (this.disabled) {
        str += ' common-textarea-disabled'
      }
      str += ` common-textarea-${this.value ? 'filled' : 'empty'}`
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
  .common-textarea-component {
    label {
      display: block;
    }
    textarea {
      width: 100%;
    }
  }
</style>
