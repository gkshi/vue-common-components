<template>
  <transition>
    <div v-if="show" class="common-modal-component" @click.self="close">
      <div class="common-modal-scroll-parent" @click.self="close">
        <dialog
          :open="show"
          :class="`common-modal-size-${size}`"
        >
          <div class="close" @click="close">
            <icon-proxy v-if="_options.icon" :data="_options.icon" />
            <span v-else class="cross">x</span>
          </div>
          <div v-if="$slots.head" class="common-modal-head">
            <slot name="head" />
          </div>
          <div class="common-modal-body">
            <slot>Modal content</slot>
          </div>
          <div v-show="$slots.buttons" class="common-modal-buttons">
            <slot name="buttons" />
          </div>
        </dialog>
      </div>
    </div>
  </transition>
</template>

<script>
import storeModule from '../../modules/modal'
import iconProxy from '../../helpers/icon-proxy'

export default {
  components: {
    iconProxy
  },
  props: {
    id: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    storeModals () {
      return this.$store.state.commonModal ? this.$store.state.commonModal.list : []
    },
    show () {
      return this.storeModals.includes(this.id)
    }
  },
  watch: {
    show () {
      this.show
        ? this.$emit('open')
        : this.$emit('close')
    }
  },
  created () {
    this._registerVuexModule()
  },
  mounted () {
    this._registerEvents()
  },
  beforeDestroy () {
    this._unregisterEvents()
  },
  methods: {
    open () {
      this.openModal(this.id)
    },
    close () {
      this.closeModal(this.id)
    },
    onKeyup (e) {
      const key = e.key ? e.key.toLowerCase() : e.code ? e.code.toLowerCase() : e.keyCode
      if (key === 'escape' || key === 27) {
        this.closeLastModal()
      }
    },
    _registerVuexModule () {
      if (this.$store.state.commonModal) {
        return
      }
      this.$store.registerModule('commonModal', storeModule)
    },
    _registerEvents () {
      if (this.$store.state.commonModal.inited) {
        return
      }
      this.$store.commit('commonModal/INIT_UDPATE', true)
      document.addEventListener('keyup', this.onKeyup)
    },
    _unregisterEvents () {
      if (!this.$store.state.commonModal.inited) {
        return
      }
      this.$store.commit('commonModal/INIT_UDPATE', false)
      document.removeEventListener('keyup', this.onKeyup)
    }
  }
}
</script>

<style lang="scss">
  $common-modal-padding: 40px;

  .common-modal-component {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: $common-modal-padding 0 0;
    background: rgba(0, 0, 0, 0.35);
    box-sizing: border-box;
    overflow: auto;

    .common-modal-scroll-parent {
      max-height: 100%;
    }

    dialog {
      position: relative;
      display: block;
      max-width: 100%;
      margin-bottom: $common-modal-padding;
      color: inherit;
    }

    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 1;
      cursor: pointer;
      ::v-deep {
        svg {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }

    .cross {
      display: block;
    }
  }
</style>
