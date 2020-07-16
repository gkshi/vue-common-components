<template lang="pug">
  .common-notifications-component
    vItem(v-for="item in items" :data="item" :key="item.id")
</template>

<script>
import storeModule from '../../modules/notification'
import vItem from './item'

export default {
  components: {
    vItem
  },
  created () {
    this._registerVuexModule()
  },
  methods: {
    _registerVuexModule () {
      if (this.$store.state.commonNotification) {
        return
      }
      this.$store.registerModule('commonNotification', storeModule)
    }
  }
}
</script>

<style lang="scss" scoped>
  .common-notifications-component {
    //
  }
</style>
