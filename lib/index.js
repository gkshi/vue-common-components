import Vue from 'vue'
import VueCommonComponents from './src'

// Nuxt.js detection
try {
  const config = require('@/nuxt.config')
  const options = config.commonComponents || config.default.commonComponents || {}
  // automatic plugin init if it's Nuxt
  Vue.use(VueCommonComponents, options)
} catch (e) {
  // eslint-disable-next-line no-empty
}

export default VueCommonComponents
