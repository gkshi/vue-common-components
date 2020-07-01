<template>
  <div :class="classList">
    <label>
      <input
        :id="localId"
        ref="input"
        type="checkbox"
        :name="name"
        :form="form"
        :value="computedValue"
        :checked="isChecked"
        :autofocus="autofocus"
        :required="required"
        :readonly="readonly"
        :disabled="disabled"
        @change="change"
        @click="$emit('click', $event)"
        @focus="focus"
        @blur="blur"
      >
      <span class="box">
        <span class="icon">
          <icon-proxy v-if="_options.icon" :data="_options.icon" />
          <span v-else class="dot" />
        </span>
      </span>
      <span>
        <slot />
      </span>
    </label>
  </div>
</template>

<script>
import mixinId from '../../mixins/id'
import iconProxy from '../../helpers/icon-proxy'

export default {
  components: {
    iconProxy
  },
  mixins: [mixinId],
  model: {
    prop: 'model',
    event: 'change'
  },
  props: {
    name: String,
    model: [Boolean, Array],
    value: [String, Boolean, Number, Object, Array, Function],
    form: String,
    autofocus: Boolean,
    required: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    checked: Boolean
  },
  data () {
    return {
      isFocused: false
    }
  },
  computed: {
    classList () {
      let string = 'common-checkbox-component'
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
    isChecked () {
      return this.isManuallyChecked ? this.checked : this.multiple ? this.model.includes(this.value) : this.model
    }
  },
  mounted () {
    if (this.autofocus) {
      this.focus()
    }
  },
  methods: {
    change (e) {
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
    },
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
      this.$refs.input.focus()
      this.$emit('focus', e)
    },
    blur (e) {
      this.isFocused = false
      this.$emit('blur', e)
    }
  }
}
</script>

<style lang="scss" scoped>
  $size: 24px;
  $color: rgb(118, 118, 118);
  .common-checkbox-component {
    label {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      .box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: $size;
        height: $size;
        margin-right: 6px;
        background: #f8f8f8;
        border: 2px solid $color;
        user-select: none;
        .icon {
          opacity: 0;
        }
      }

      .icon {
        ::v-deep svg {
          max-width: 100%;
          max-height: 100%;
        }
      }

      .dot {
        display: block;
        width: 10px;
        height: 10px;
        background: $color;
      }

      input {
        position: absolute;
        width: $size;
        height: $size;
        margin: 0;
        opacity: 0;
        cursor: pointer;
      }
    }

    &.common-checkbox-checked {
      .box {
        .icon {
          opacity: 1;
        }
      }
    }

    &.common-checkbox-focused {
      .box {
        // focused styles
      }
    }
  }
</style>
