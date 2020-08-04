export default {
  // active component list (all of them by default)
  components: [
    'button',
    'checkbox',
    'input',
    'loader',
    'modal',
    'notification',
    'radio',
    'select',
    'switch',
    'tabs',
    'text',
    'textarea',
    'typing-text'
  ],

  // name casing
  nameCasing: 'camelCase', // camelCase, PascalCase, kebab-case, snake_case

  // checkbox options
  checkbox: {
    icon: null
  },

  // loader options
  loader: {
    icon: null
  },

  // modal options
  modal: {
    icon: null
  },

  // notification options
  notification: {
    icon: null,
    timeout: 5000,
    showTitle: true,
    titles: {
      default: '',
      warning: 'Warning',
      error: 'Error',
      success: 'Success'
    }
  },

  // radio options
  radio: {
    icon: null
  },

  // select options
  select: {
    icons: {
      clear: null,
      angle: null,
      selected: null
    }
  }
}
