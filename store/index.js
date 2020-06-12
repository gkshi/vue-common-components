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
    }
  ]
})

export const getters = {
  ids: state => state.components.map(i => i.id)
}
