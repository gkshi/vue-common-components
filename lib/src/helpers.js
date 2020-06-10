import config from '../config'

/**
 * Normalize init options
 * @param options {array, object}
 * @returns {object}
 * @private
 */
export function _normalizeOptions (options) {
  if (Array.isArray(options)) {
    const components = options
    options = { ...config }
    options.components = components
  } else {
    options = { ...config, ...options }
  }
  return options
}

/**
 * Component name generator
 * @param name {string}
 * @param nameCasing {string}
 * @returns {string}
 * @private
 */
export function _componentName (name, nameCasing) {
  switch (nameCasing) {
  case 'kebab-case':
    return `common-${name}`

  case 'snake_case':
    name = name.replace(/-/g, '_')
    return `common_${name}`

  case 'PascalCase':
    name = name.split('-').map(name => {
      name = name.split('').map((i, j) => {
        return j < 1 ? i.toUpperCase() : i.toLowerCase()
      }).join('')
      return name
    }).join('')
    return `Common${name}`

  default:
    name = name.split('-').map(name => {
      name = name.split('').map((i, j) => {
        return j < 1 ? i.toUpperCase() : i.toLowerCase()
      }).join('')
      return name
    }).join('')
    return `common${name}`
  }
}
