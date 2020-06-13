export const state = () => ({
  components: [
    {
      id: 'button',
      title: 'Button',
      properties: [
        {
          name: 'type',
          type: 'String',
          description: 'Button type for custom styles',
          default: 'default'
        },
        {
          name: 'size',
          type: 'String',
          description: 'Button size for custom styles',
          default: 'default'
        },
        {
          name: 'native',
          type: 'String',
          description: '"type" attribute value of button',
          values: ['button', 'reset', 'submit'],
          default: 'button'
        },
        {
          name: 'form',
          type: 'String',
          description: 'Form ID button belongs (for "button" tag only)',
          default: undefined
        },
        {
          name: 'href',
          type: 'String',
          description: '"href" attribute value (for "a" tag only)',
          default: undefined
        },
        {
          name: 'to',
          type: 'String',
          description: '"to" attribute value (for "nuxt-link" / "router-link" tag only)',
          default: undefined
        },
        {
          name: 'target',
          type: 'String',
          description: '"target" attribute value (for "a" tag only)',
          default: '_self'
        },
        {
          name: 'disabled',
          type: 'Boolean',
          description: 'Disabled state. No pointer events if disabled.',
          default: 'false'
        }
      ],
      events: ['click', 'focus', 'blur'],
      example: `<common-button
  type="default"
  size="default"
  native="submit"
  :disabled="false"
  @click="method"
>
  Button
</common-button>`
    },
    {
      id: 'input',
      title: 'Input',
      properties: [
        {
          name: 'id',
          type: 'String',
          description: 'ID for label and input tags',
          default: 'random seven-digit number'
        },
        {
          name: 'name',
          type: 'String',
          description: 'Input name value',
          default: ''
        },
        {
          name: 'native',
          type: 'String',
          description: 'Input type value',
          values: ['text', 'hidden', 'password', 'date', 'email', 'number', 'tel', 'url', 'etc.'],
          default: 'text'
        },
        {
          name: 'type',
          type: 'String',
          description: 'Input type for custom styles',
          default: 'default'
        },
        {
          name: 'size',
          type: 'String',
          description: 'Input size for custom styles',
          default: 'default'
        },
        {
          name: 'v-model',
          type: 'String, Number',
          description: 'Reactive input value',
          default: ''
        },
        {
          name: 'error',
          type: 'String, Boolean',
          description: 'Error message or state',
          default: 'false'
        },
        {
          name: 'placeholder',
          type: 'String',
          description: 'Input placeholder text',
          default: ''
        },
        {
          name: 'autofocus',
          type: 'Boolean',
          description: 'Autofocus state',
          default: 'false'
        },
        {
          name: 'readonly',
          type: 'Boolean',
          description: 'Readonly state',
          default: 'false'
        },
        {
          name: 'disabled',
          type: 'Boolean',
          description: 'Disabled state',
          default: 'false'
        }
      ],
      events: ['input', 'change', 'focus', 'blur', 'keyup', 'paste'],
      example: `<common-input
  type="email"
  v-model="value"
  placeholder="placeholder"
  @change="method"
  autofocus
>
  Label text here
</common-input>`
    }
  ]
})

export const getters = {
  ids: state => state.components.map(i => i.id)
}
