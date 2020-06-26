export default {
  methods: {
    openModal (id) {
      this.$store.dispatch('commonModal/open', id)
    },
    closeModal (id) {
      this.$store.dispatch('commonModal/close', id)
    },
    closeLastModal () {
      this.$store.dispatch('commonModal/closeLast')
    },
    closeAllModals () {
      this.$store.dispatch('commonModal/closeAll')
    }
  }
}
