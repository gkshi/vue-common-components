/* eslint-disable */
import Vue from 'vue'
import config from '../config'
import { _normalizeOptions, _componentName } from './helpers'

/**
 *  Main plugin
 */
const CommonComponents = {
  install (Vue, options) {
    options = _normalizeOptions(options)
    options.components.forEach(name => {
      // dynamic component import
      const component = require(`./components/${name}`).default

      // setting component custom options
      if (!component.computed) {
        component.computed = {}
      }

      // injecting component options in computed
      let componentOptions = options[name] || {}
      componentOptions = config[name] ? {...config[name], ...componentOptions} : componentOptions
      component.computed = component.computed || {}
      component.computed = {...component.computed, ...{
          _options () {
            return componentOptions
          }
        }}

      // registering component
      Vue.component(_componentName(name, options.nameCasing), component)

      // mixin using if exist
      try {
        Vue.mixin(require(`./mixins/${name}`).default)
      } catch (e) {}
    })
  }
}

export default CommonComponents
