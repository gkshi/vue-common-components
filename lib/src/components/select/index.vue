<template>
  <div v-common-outside="close" :class="classList">
    <!-- label -->
    <label v-if="$slots.default" class="common-select-label">
      <slot />
    </label>

    <!-- selected -->
    <div class="common-select-parent">
      <div class="common-select-selected" @click="toggle">
        {{ computedSelectedText }}
      </div>
      <div class="common-select-icons">
        <div v-if="showClearButton" class="common-select-clear" @click="clear">
          <icon-proxy v-if="_options && _options.icons.clear" class="icon" :data="_options.icons.clear" />
          <span v-else class="clear-indicator" />
        </div>
        <div class="common-select-angle" @click="toggle">
          <icon-proxy v-if="_options && _options.icons.angle" class="icon" :data="_options.icons.angle" />
          <span v-else class="angle-indicator" />
        </div>
      </div>
    </div>

    <!-- dropdown with options and search -->
    <transition>
      <div v-if="isOpened" class="common-select-dropdown">
        <!-- search bar -->
        <div v-if="searchable" class="common-select-search">
          <input ref="search" v-model="query" type="text" :placeholder="searchPlaceholder">
        </div>

        <div class="common-select-list">
          <!-- empty option -->
          <div
            v-if="showEmptyOption"
            class="common-select-option empty"
            :data-value="optionValue(emptyOption)"
            :data-selected="isOptionSelected(emptyOption)"
            :data-disabled="isOptionDisabled(emptyOption)"
            @click="onOptionClick(emptyOption)"
          >
            <div>{{ emptyText }}</div>
            <div v-if="isOptionSelected(emptyOption)" class="common-select-option-indicator">
              <icon-proxy v-if="_options && _options.icons.selected" class="icon" :data="_options.icons.selected" />
              <div v-else class="selected-indicator" />
            </div>
          </div>

          <!-- option list -->
          <div
            v-for="option in computedOptions"
            :key="optionValue(option)"
            :data-value="optionValue(option)"
            :data-selected="isOptionSelected(option)"
            :data-disabled="isOptionDisabled(option)"
            class="common-select-option"
            @click="onOptionClick(option)"
          >
            <div>{{ optionText(option) }}</div>
            <div v-if="isOptionSelected(option)" class="common-select-option-indicator">
              <icon-proxy v-if="_options && _options.icons.selected" class="icon" :data="_options.icons.selected" />
              <div v-else class="selected-indicator" />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import directiveOutside from '../../directives/outside'
import iconProxy from '../../helpers/icon-proxy'

export default {
  directives: {
    commonOutside: directiveOutside
  },
  components: {
    iconProxy
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: [String, Boolean, Number, Object, Array, Function],
    options: {
      type: Array,
      default: () => []
    },
    emptyText: {
      type: String,
      default: 'Not selected'
    },
    emptyValue: {
      type: [String, Boolean, Number, Object, Array, Function],
      default: null
    },
    searchable: {
      type: Boolean,
      default: true
    },
    searchPlaceholder: {
      type: String,
      default: 'Search...'
    },
    selectedText: {
      type: String,
      default: '{n} selected'
    },
    selectedCount: {
      type: Number,
      default: 3
    },
    required: Boolean,
    disabled: Boolean
  },
  data () {
    return {
      isOpened: false,
      query: ''
    }
  },
  computed: {
    classList () {
      let str = 'common-select-component'
      if (this.disabled) {
        str += ' common-select-disabled'
      }
      if (this.isOpened) {
        str += ' common-select-opened'
      }
      return str
    },
    isMultiple () {
      return Array.isArray(this.value)
    },
    isOptionSelected () {
      return option => {
        const value = this.optionValue(option)
        return this.isMultiple
          ? this.value.includes(value)
          : this.value === value
      }
    },
    isOptionDisabled () {
      return option => {
        if (this.required && !this.optionValue(option)) {
          return true
        }
        return option ? option.disabled : false
      }
    },
    optionText () {
      return option => {
        try {
          const original = this.options.find(i => this.optionValue(i) === this.optionValue(option))
          return Object.keys(original).includes('text') ? original.text : option
        } catch (e) {
          return option
        }
      }
    },
    optionValue () {
      return option => {
        try {
          return Object.keys(option).includes('value') ? option.value : option
        } catch (e) {
          return option
        }
      }
    },
    computedSelectedText () {
      if (this.isMultiple) {
        if (this.value.length >= this.selectedCount) {
          return this.selectedText.replace(/{n}/g, this.value.length)
        } else if (this.value.length) {
          return this.value.map(i => this.optionText(i)).join(', ')
        }
        return this.emptyText
      }
      return this.value === this.emptyValue ? this.emptyText : this.optionText(this.value)
    },
    emptyOption () {
      return {
        text: this.emptyText,
        value: this.emptyValue
      }
    },
    showEmptyOption () {
      if (this.query) {
        const values = Object.values(this.emptyOption).map(i => String(i).toLowerCase()).join(', ')
        return !this.isMultiple && values.includes(this.query.toLowerCase())
      }
      return !this.isMultiple
    },
    computedOptions () {
      if (this.query) {
        const query = this.query.toLowerCase()
        return this.options.filter(i => this.optionText(i).toLowerCase().includes(query) || String(this.optionValue(i)).toLowerCase().includes(query))
      }
      return this.options
    },
    showClearButton () {
      return this.isMultiple ? !!this.value.length : this.optionValue(this.value) !== this.emptyOption.value
    }
  },
  watch: {
    query () {
      this.$emit('search', this.query)
    },
    isOpened () {
      this.query = ''
      this.isOpened ? this.$emit('open') : this.$emit('close')
    }
  },
  beforeMount () {
    // Checking required option property
    if (!Object.keys(this.$options.propsData).includes('options')) {
      console.warn('[vue-common-components][select] You should provide an array of options to the Select component.')
    }
  },
  mounted () {
    document.addEventListener('keyup', this.onKeyup)
  },
  beforeDestroy () {
    document.removeEventListener('keyup', this.onKeyup)
  },
  methods: {
    onOptionClick (option) {
      if (this.isMultiple) {
        const value = this.isOptionSelected(option)
          ? this.value.filter(i => this.optionValue(i) !== this.optionValue(option))
          : [...this.value, this.optionValue(option)]

        this.change(value)
        return
      }
      this.change(this.optionValue(option))
      this.close()
    },
    change (value) {
      if (value !== this.value) {
        this.$emit('change', value)
      }
    },
    toggle () {
      this.isOpened = !this.isOpened
    },
    close () {
      this.isOpened = false
    },
    clear () {
      this.change(this.isMultiple ? [] : this.emptyOption.value)
    },
    onKeyup (e) {
      const key = e.key ? e.key.toLowerCase() : e.code ? e.code.toLowerCase() : e.keyCode
      if (key === 'escape' || key === 27) {
        this.close()
      }
      if (this.searchable && this.isOpened && e.target.tagName.toLowerCase() === 'body' && e.key.length === 1) {
        this.$refs.search.focus()
        this.query += e.key
      }
    }
  }
}
</script>

<style lang="scss">
  $common-radio-color: #f8f8f8;

  .common-select-component {
    position: relative;

    label {
      cursor: text;
    }

    .common-select-parent {
      position: relative;
    }

    .common-select-selected {
      padding: 10px;
      background: $common-radio-color;
      border: 1px solid;
      border-color: inherit;
      color: inherit;
      cursor: pointer;
    }

    .common-select-icons {
      position: absolute;
      top: 0;
      right: 10px;
      z-index: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;

      & > * {
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all .2s ease;
        &:not(:last-child) {
          margin-right: 10px;
        }
      }
    }

    .common-select-dropdown {
      position: absolute;
      top: calc(100% + 10px);
      left: 0;
      z-index: 2000;
      width: 100%;
      background: #fff;
      box-shadow: 0px 5px 10px -1px rgba(0, 0, 0, 0.15);
      transition: all .2s ease;

      &.v-enter,
      &.v-leave-active {
        opacity: 0;
      }
    }

    .common-select-search {
      input {
        width: 100%;
        border: none;
        padding: 8px 10px;
      }
    }

    .common-select-list {
      max-height: 240px;
      overflow: auto;
    }

    .common-select-option {
      position: relative;
      padding: 8px 10px;
      cursor: pointer;
      &:hover {
        background: $common-radio-color;
      }
      &[data-selected="true"] {
        background: $common-radio-color;
        font-weight: bold;
      }
      &[data-disabled="true"] {
        opacity: .5;
        pointer-events: none;
      }
    }

    .common-select-option-indicator {
      position: absolute;
      top: 50%;
      right: 14px;
      transform: translate(0, -50%);
    }

    .angle-indicator {
      position: relative;
      width: 14px;
      height: 10px;
      padding-top: 1px;
      &:before,
      &:after {
        content: '';
        position: relative;
        display: block;
        width: 9px;
        height: 3px;
        background: #ccc;
      }
      &:before {
        transform: rotate(45deg);
        top: 3px;
      }
      &:after {
        transform: rotate(-45deg);
        left: 4px;
      }
    }

    .clear-indicator {
      position: relative;
      width: 12px;
      height: 12px;
      &:before,
      &:after {
        content: '';
        position: absolute;
        display: block;
        width: 12px;
        height: 3px;
        top: 4px;
        background: #ccc;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }

    .selected-indicator {
      position: relative;
      display: block;
      width: 15px;
      height: 12px;
      &:before,
      &:after {
        content: '';
        position: relative;
        display: block;
        height: 3px;
        background: #ccc;
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

    &.common-select-disabled {
      .common-select-selected {
        opacity: .5;
        pointer-events: none;
      }
    }

    &.common-select-opened {
      .common-select-angle {
        transform: rotate(180deg);
      }
    }
  }
</style>
