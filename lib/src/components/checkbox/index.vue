<template>
  <div :class="classList">
    <label>
      <input
        :id="id"
        ref="input"
        type="checkbox"
        :name="name"
        :form="form"
        :value="computedValue"
        :checked="isChecked"
        :indeterminate.prop="isIndeterminated"
        :autofocus="autofocus"
        :required="required"
        :readonly="readonly"
        :disabled="disabled"
        @change="onChange"
        @click="$emit('click', $event)"
        @focus="onFocus"
        @blur="onBlur"
      >
      <span class="common-checkbox-box">
        <transition>
          <span v-if="isIndeterminated" class="indeterminate-indicator" />
          <template v-else-if="isChecked">
            <icon-proxy v-if="_options && _options.icon" class="icon" :data="_options.icon" />
            <span v-else class="checked-indicator" />
          </template>
        </transition>
      </span>
      <span v-if="$slots.default" class="common-checkbox-label">
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
    model: [Boolean, Array],
    value: [String, Boolean, Number, Object, Array, Function],
    form: String,
    autofocus: Boolean,
    required: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    checked: Boolean,
    indeterminate: Boolean
  },
  computed: {
    classList () {
      let string = 'common-checkbox-component'
      if (this.isIndeterminated) {
        string += ' common-checkbox-indeterminated'
      }
      if (this.isChecked) {
        string += ' common-checkbox-checked'
      }
      if (this.isFocused) {
        string += ' common-checkbox-focused'
      }
      return string
    },
    multiple () {
      return Array.isArray(this.model)
    },
    computedValue () {
      return this.isManuallyChecked ? this.checked : this.value
    },
    isManuallyChecked () {
      return Object.keys(this.$options.propsData).includes('checked')
    },
    isManuallyIndeterminated () {
      return Object.keys(this.$options.propsData).includes('indeterminate')
    },
    isChecked () {
      return this.isManuallyChecked ? this.checked : this.multiple ? this.model.includes(this.value) : this.model
    },
    isIndeterminated () {
      return this.isManuallyIndeterminated ? this.indeterminate : this.$refs.input ? this.$refs.input.indeterminate : false
    }
  },
  methods: {
    onChange (e) {
      if (this.isManuallyChecked) {
        this.$emit('change', e.target.checked)
        this.$refs.input.checked = this.checked
        return
      }
      if (this.multiple) {
        const value = e.target.checked
          ? [...this.model, e.target.value]
          : this.model.filter(i => i !== e.target.value)
        this.$emit('change', value)
        return
      }
      this.$emit('change', e.target.checked)
    }
  }
}
</script>

<style lang="scss">
  $common-checkbox-size: 24px;
  $common-checkbox-color: rgb(118, 118, 118);

  .common-checkbox-component {
    label {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
    }

    .common-checkbox-box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: $common-checkbox-size;
      height: $common-checkbox-size;
      background: #f8f8f8;
      color: $common-checkbox-color;
      border: 2px solid $common-checkbox-color;
      user-select: none;
      .icon {
        opacity: 0;
      }
    }

    .common-checkbox-label {
      margin-left: 6px;
    }

    .icon {
      ::v-deep svg {
        max-width: 100%;
        max-height: 100%;
      }
    }

    input {
      position: absolute;
      width: $common-checkbox-size;
      height: $common-checkbox-size;
      margin: 0;
      opacity: 0;
      cursor: pointer;
    }

    .checked-indicator {
      position: relative;
      width: 70%;
      height: 70%;
      &:before,
      &:after {
        content: '';
        position: relative;
        display: block;
        height: 3px;
        background: $common-checkbox-color;
      }
      &:before {
        transform: rotate(45deg);
        top: 7px;
        left: 0px;
        width: 8px;
      }
      &:after {
        transform: rotate(-45deg);
        top: 2px;
        right: -3px;
        width: 13px;
      }
    }

    .indeterminate-indicator {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 3px;
      background: $common-checkbox-color;
    }

    &.common-checkbox-checked {
      .common-checkbox-box {
        .icon {
          opacity: 1;
        }
      }
    }

    &.common-checkbox-focused {
      // focused styles
    }

    &.common-checkbox-indeterminated {
      // indeterminated styles
      .indeterminate-indicator {
        opacity: 1;
      }
    }
  }
</style>
