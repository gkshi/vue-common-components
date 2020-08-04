<template>
  <div :class="classList">
    <a
      v-for="(tab, i) in localTabs"
      :key="tab.id"
      :class="['common-tab', { 'common-tab-active': activeTab.id === tab.id }, { 'common-tab-disabled': tab.disabled }]"
      href="#"
      @click.prevent="change(tab, i)"
      v-html="tab.label"
    />
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    disabled: Boolean
  },
  data () {
    return {
      localTabs: []
    }
  },
  computed: {
    classList () {
      let str = 'common-tabs-component'
      if (this.disabled) {
        str += ' common-tabs-disabled'
      }
      return str
    },
    activeTab () {
      return this.localTabs.find(i => i.active) || this.localTabs[0]
    }
  },
  watch: {
    tabs () {
      this._sanitize()
    },
    localTabs () {
      this.showActive()
    }
  },
  mounted () {
    this.showActive()
    this.$on('change', this._changeActiveTab)
    this._sanitize()
  },
  beforeDestroy () {
    this.$off('change')
  },
  methods: {
    change (tab, index, emit) {
      this.hideAll()
      this.show(tab, index, emit)
    },
    show (tab = {}, index = 0, emit = true) {
      const target = document.querySelector(`[data-common-tab="${tab.id}"]`) || document.querySelectorAll('[data-common-tab]')[index]
      if (target) {
        target.hidden = false
        if (emit) {
          this.$emit('change', tab.id || target.dataset.commonTab)
        }
      } else {
        console.warn(`[vue-common-components] No tab with id "${tab.id}" found in DOM.`)
      }
    },
    showActive () {
      this.hideAll()
      // show tab with active option or the first tab
      this.change(this.activeTab, 0, false)
    },
    hideAll () {
      Array.from(document.querySelectorAll('[data-common-tab]')).forEach(i => {
        i.hidden = true
      })
    },

    _changeActiveTab (tabId) {
      this.localTabs = this.localTabs.map(i => {
        i.active = i.id === tabId
        return i
      })
    },
    _sanitize () {
      this.localTabs = this.tabs.map(i => ({
        id: i.id || i,
        label: i.label || i,
        active: i.active || false,
        disabled: i.disabled || false
      }))
    }
  }
}
</script>

<style lang="scss">
  *[data-common-tab][hidden] {
    display: none !important;
  }

  .common-tabs-component {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    color: inherit;

    .common-tab {
      position: relative;
      text-decoration: none;
      color: inherit;
      cursor: pointer;

      &:after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: #ccc;
        opacity: 0;
        visibility: hidden;
        transition: all .2s ease;
      }

      &.common-tab-active {
        &:after {
          opacity: 1;
          visibility: visible;
        }
      }

      &.common-tab-disabled {
        opacity: .5;
        pointer-events: none;
      }

      &:not(:last-child) {
        margin-right: 20px;
      }
    }

    &.common-tabs-disabled {
      opacity: .5;
      pointer-events: none;
    }
  }
</style>
