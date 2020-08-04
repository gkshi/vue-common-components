<template>
  <!-- eslint-disable vue/no-v-html -->
  <div :class="classList">
    <div class="common-notification-close" @click="hide">
      <slot name="icon">
        <div class="close-indicator" />
      </slot>
    </div>
    <div v-if="_options.showTitle" class="common-notification-title" v-html="title" />
    <div class="common-notification-content" v-html="data.content" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    // eslint-disable-next-line vue/prop-name-casing
    _options: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      timeout: null
    }
  },
  computed: {
    classList () {
      return `common-notification-component common-notification-type-${this.data.type}`
    },
    timeoutDelay () {
      return Object.keys(this.data).includes('timeout') ? this.data.timeout || 0 : this._options.timeout
    },
    title () {
      if (Object.keys(this.data).includes('title')) {
        return this.data.title
      }
      return this._options.titles[this.data.type]
    }
  },
  mounted () {
    // root show event
    this.$root.$emit('notification-show', this.data.id)

    // creating timeout if notification has timeout value
    if (this.timeoutDelay) {
      this.timeout = setTimeout(() => {
        this.hide()
      }, this.timeoutDelay)
    }

    this._scrollParentToBottom()
  },
  beforeDestroy () {
    // clearing timeout
    clearTimeout(this.timeout)
    // root hide event
    this.$root.$emit('notification-hide', this.data.id)
  },
  methods: {
    hide () {
      // clearing timeout
      clearTimeout(this.timeout)
      this.hideNotification(this.data.id)
    },

    _scrollParentToBottom () {
      try {
        this.$nextTick(() => {
          setTimeout(() => {
            this.$el.scrollIntoView({
              behavior: 'smooth'
            })
          }, this._getAnimationDelay())
        })
      } catch (e) {
        setTimeout(() => {
          this.$el.scrollIntoView({
            behavior: 'smooth'
          })
        }, this._getAnimationDelay())
      }
    },

    _getAnimationDelay () {
      try {
        const duration = document.defaultView.getComputedStyle(this.$el, null).transitionDuration
        return parseFloat(duration) * 1000
      } catch (e) {
        return 0
      }
    }
  }
}
</script>

<style lang="scss">
  .common-notification-component {
    position: relative;
    display: block;
    width: 320px;
    max-width: 100%;
    padding: 20px;
    background: #ddd;
    transition: all .25s ease;

    .common-notification-close {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 1;
      cursor: pointer;
    }

    .close-indicator {
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
        background: #a0a0a0;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }

    &.v-enter,
    &.v-leave-active {
      opacity: 0;
    }
  }
</style>
