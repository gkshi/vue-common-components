<template>
  <div :class="classList">
    <label>
      <input
        :id="id"
        ref="input"
        type="radio"
        :name="name"
        :form="form"
        :value="computedValue"
        :checked="isChecked"
        :autofocus="autofocus"
        :required="required"
        :readonly="readonly"
        :disabled="disabled"
        @change="onChange"
        @click="$emit('click', $event)"
        @focus="onFocus"
        @blur="onBlur"
      >
      <span class="common-radio-box">
        <transition>
          <template v-if="isChecked">
            <icon-proxy v-if="_options && _options.icon" class="common-radio-icon" :data="_options.icon" />
            <span v-else class="checked-indicator" />
          </template>
        </transition>
      </span>
      <span v-if="$slots.default">
        <slot />
      </span>
    </label>
  </div>
</template>

<script>
import mixinFocusBlur from '../../mixins/focus-blur'
import iconProxy from '../../helpers/icon-proxy'

export default {
  components: {
    iconProxy
  },
  mixins: [mixinFocusBlur],
  model: {
    prop: 'model',
    event: 'change'
  },
  props: {
    id: String,
    name: String,
    model: [String, Boolean, Number, Object, Array, Function],
    value: [String, Boolean, Number, Object, Array, Function],
    form: String,
    autofocus: Boolean,
    required: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    checked: Boolean
  },
  computed: {
    classList () {
      let string = 'common-radio-component'
      if (this.isChecked) {
        string += ' common-radio-checked'
      }
      if (this.isFocused) {
        string += ' common-radio-focused'
      }
      return string
    },
    multiple () {
      return ['string', 'number', 'object', 'array'].includes(typeof this.model)
    },
    computedValue () {
      return this.isManuallyChecked ? this.checked : this.value
    },
    isManuallyChecked () {
      return Object.keys(this.$options.propsData).includes('checked')
    },
    isChecked () {
      return this.isManuallyChecked ? this.checked : this.multiple ? this.model === this.value : this.model
    }
  },
  beforeMount () {
    // Checking required "name" property if it's a group of radio buttons
    if (this.multiple && !this.name) {
      console.warn('[vue-common-components][radio] Looks like you\'re using a group of radio buttons. You should provide the same "name" property in each component.')
    }
  },
  methods: {
    onChange (e) {
      if (this.isManuallyChecked) {
        this.$emit('change', e.target.checked)
        this.$refs.input.checked = this.checked
        return
      }
      this.$emit('change', this.multiple ? e.target.value : e.target.checked)
    }
  }
}
</script>

<style lang="scss">
  $common-radio-size: 24px;
  $common-radio-color: rgb(118, 118, 118);

  .common-radio-component {
    label {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
    }

    .common-radio-box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: $common-radio-size;
      height: $common-radio-size;
      margin-right: 6px;
      background: #f8f8f8;
      border: 2px solid $common-radio-color;
      border-radius: 50%;
      user-select: none;
      .common-radio-icon {
        opacity: 0;
      }
    }

    .common-radio-icon {
      ::v-deep svg {
        max-width: 100%;
        max-height: 100%;
      }
    }

    input {
      position: absolute;
      width: $common-radio-size;
      height: $common-radio-size;
      margin: 0;
      opacity: 0;
      cursor: pointer;
    }

    .checked-indicator {
      position: relative;
      width: 14px;
      height: 14px;
      &:before,
      &:after {
        content: '';
        position: relative;
        display: block;
        height: 3px;
        background: $common-radio-color;
      }
      &:before {
        transform: rotate(45deg);
        top: 7px;
        left: 1px;
        width: 6px;
      }
      &:after {
        transform: rotate(-45deg);
        top: 2px;
        right: -4px;
        width: 10px;
      }
    }

    &.common-radio-checked {
      .common-radio-box {
        .common-radio-icon {
          opacity: 1;
        }
      }
    }

    &.common-radio-focused {
      // focused styles
    }
  }
</style>
