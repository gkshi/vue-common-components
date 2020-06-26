/* eslint-disable */
import Vue from 'vue'
import { _normalizeOptions, _componentName } from './helpers'

/**
 *  Main plugin
 */
const CommonComponents = {
  install (Vue, options) {
    options = _normalizeOptions(options)
    // console.log('options', options)
    options.components.forEach(name => {
      // dynamic component import
      Vue.component(_componentName(name, options.nameCasing), () => import(`./components/${name}`))
      // mixin using if exist
      try {
        Vue.mixin(require(`./mixins/${name}`).default)
      } catch (e) {}
    })
  }
}

export default CommonComponents
