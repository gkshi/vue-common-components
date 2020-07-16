<template>
  <div :class="classList">
    <label>
      <input
        :id="id"
        ref="input"
        type="checkbox"
        :form="form"
        :value="value"
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
      <span class="common-switch-box" />
      <span v-if="$slots.default" class="common-switch-label">
        <slot />
      </span>
    </label>
  </div>
</template>

<script>
import mixinFocusBlur from '../../mixins/focus-blur'

export default {
  mixins: [mixinFocusBlur],
  model: {
    prop: 'model',
    event: 'change'
  },
  props: {
    id: String,
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
      let str = 'common-switch-component'
      if (this.isChecked) {
        str += ' common-switch-checked'
      }
      return str
    },
    computedValue () {
      return this.isManuallyChecked ? this.checked : this.value
    },
    isManuallyChecked () {
      return Object.keys(this.$options.propsData).includes('checked')
    },
    isChecked () {
      return this.isManuallyChecked ? this.checked : this.model
    }
  },
  methods: {
    onChange (e) {
      if (this.isManuallyChecked) {
        this.$emit('change', e.target.checked)
        this.$refs.input.checked = this.checked
        return
      }
      this.$emit('change', e.target.checked)
    }
  }
}
</script>

<style lang="scss">
  $common-switch-size: 32px;
  $common-switch-point-size: 24px;

  .common-switch-component {
    position: relative;
    display: inline-flex;
    flex-direction: column;

    label {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    input {
      position: absolute;
      width: 56px;
      height: $common-switch-size;
      margin: 0;
      opacity: 0;
      cursor: pointer;
    }

    .common-switch-label {
      margin-left: 10px;
    }

    .common-switch-box {
      display: flex;
      align-items: center;
      width: 56px;
      height: $common-switch-size;
      background: #ddd;
      border-radius: $common-switch-size;
      padding: calc((#{$common-switch-size} - #{$common-switch-point-size}) / 2);
      box-shadow: inset 0 0 5px rgba(0,0,0,0.15);
      transition: background .2s ease;
      cursor: pointer;

      &:before {
        content: '';
        display: block;
        width: $common-switch-point-size;
        height: $common-switch-point-size;
        background: #fff;
        border-radius: $common-switch-point-size;
        box-shadow: 0 0 5px 0 rgba(0,0,0,0.15);
        transition: transform .2s ease;
      }
    }

    &.common-switch-checked {
      .common-switch-box {
        background: #4091e4;
        &:before {
          transform: translate(100%, 0);
        }
      }
    }
  }
</style>
