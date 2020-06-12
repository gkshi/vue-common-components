<template>
  <div class="common-button-component" @click="click">
    <component
      :is="tagName"
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
      <slot v-if="$slots.default" />
      <div v-else>
        Button
      </div>
    </component>
  </div>
</template>

<script>
let isNuxt = false
try {
  // eslint-disable-next-line no-unused-vars
  isNuxt = !!require('@/nuxt.config').default
} catch (e) {}

export default {
  props: {
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

<style>
  .common-button-component {
    display: block;
  }
  .common-button-component > * {
    display: inline-flex;
    background: #ccc;
    color: #fff;
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }
  .common-button-component > button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  }
</style>
