export default {
  methods: {
    showNotification (id) {
      this.$store.dispatch('commonNotification/show', id)
    },
    hideNotification (id) {
      this.$store.dispatch('commonNotification/hide', id)
    },
    hideLastNotification () {
      this.$store.dispatch('commonNotification/hideLast')
    },
    hideAllNotifications () {
      this.$store.dispatch('commonNotification/hideAll')
    }
  }
}
