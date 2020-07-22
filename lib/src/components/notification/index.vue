<template>
  <div class="common-notifications-component">
    <transition-group tag="div">
      <v-item
        v-for="item in list"
        :key="item.id"
        :data="item"
        :_options="_options"
      >
        <icon-proxy v-if="_options.icon" slot="icon" :data="_options.icon" />
      </v-item>
    </transition-group>
  </div>
</template>

<script>
import storeModule from '../../modules/notification'
import vItem from './item'

export default {
  components: {
    vItem
  },
  computed: {
    list () {
      return this.$store.state.commonNotification ? this.$store.state.commonNotification.list : []
    }
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

<style lang="scss">
  .common-notifications-component {
    position: fixed;
    bottom: 30px;
    left: 30px;
    z-index: 10000;
    max-height: 70vh;
    overflow: auto;

    & > * {
      & > * {
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }
</style>
