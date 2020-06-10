// eslint-disable-next-line no-unused-vars
import Vue from "vue"
import { _normalizeOptions, _componentName } from './helpers'

/**
 *  Main plugin
 */
const CommonComponents = {
  install (Vue, options) {
    options = _normalizeOptions(options)
    options.components.forEach(name => {
      // dynamic component import
      Vue.component(_componentName(name, options.nameCasing), () => import(`./components/${name}`))
    })
  }
}

export default CommonComponents

/**
 * Automatic init
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(CommonComponents)
  if (CommonComponents.installed) {
    CommonComponents.installed = false
  }
}
