<template>
  <transition>
    <div v-if="show" class="common-modal-component">
      <div class="common-modal-scroll-parent" @click.self="close">
        <dialog
          :open="show"
          :class="`common-modal-size-${size}`"
        >
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

export default {
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
      // if (key === 'enter' || key === 13) {
      //   this.clickFirstButton()
      // }
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

<style>
  .common-modal-component {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    display: table;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.35);
  }
  .common-modal-component .common-modal-scroll-parent {
    display: table-cell;
    vertical-align: middle;
  }
  .common-modal-component dialog {
    display: block;
    margin: 0 auto;
  }
</style>
