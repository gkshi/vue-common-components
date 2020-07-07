<template>
  <div class="common-button-component" @click="click">
    <component
      :is="tagName"
      :id="id || false"
      :name="name || false"
      :class="classList"
      role="button"
      :type="tagName === 'button' ? native : false"
      :form="tagName === 'button' ? form : false"
      :to="to"
      :href="href"
      :target="href ? target : false"
      :disabled="disabled"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    >
      <slot>Button</slot>
    </component>
  </div>
</template>

<script>
// Nuxt detection for nuxt-link / router-link tag
let isNuxt = false
try {
  // eslint-disable-next-line no-unused-vars
  isNuxt = !!require('@/nuxt.config').default
} catch (e) {}

export default {
  props: {
    // Button "id" attribute value
    id: [String, Number],

    // Button "name" attribute value
    name: String,

    // Button type for custom styles
    type: {
      type: String,
      default: 'default'
    },

    // Button size for custom styles
    size: {
      type: String,
      default: 'default'
    },

    // "type" attribute value of button
    native: {
      type: String,
      default: 'button' // button, submit, confirm
    },

    // "form" attribute value (for "button" tag only)
    form: String,

    // "href" attribute value (for "a" tag only)
    href: String,

    // "to" attribute value (for "nuxt-link"/"router-link" tag only)
    to: String,

    // "target" attribute value (for "a" tag only)
    target: {
      type: String,
      default: '_self'
    },

    // Disabled state
    disabled: Boolean
  },
  computed: {
    tagName () {
      return this.href ? 'a' : this.to ? isNuxt ? 'nuxt-link' : 'router-link' : 'button'
    },
    classList () {
      // custom type and size classnames
      return `common-button-type-${this.type} common-button-size-${this.size}`
    }
  },
  methods: {
    click (e) {
      if (this.disabled) {
        return e
      }
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss">
  .common-button-component {
    display: inline-flex;
    flex-direction: column;

    & > * {
      display: inline-flex;
      align-items: center;
      background: #ccc;
      color: #fff;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      font-weight: inherit;
      text-decoration: none;
      outline: none;
      cursor: pointer;

      ::v-deep svg {
        font-weight: normal;
      }
    }
  }
</style>
