export const state = () => ({
  components: [
    {
      id: 'button',
      title: 'Button',
      properties: [
        {
          name: 'id',
          type: 'String, Number',
          description: 'Button "id" attribute value',
          default: 'random seven-digit number'
        },
        {
          name: 'name',
          type: 'String',
          description: 'Button "name" attribute value',
          default: ''
        },
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
      id: 'checkbox',
      title: 'Checkbox',
      properties: [
        {
          name: 'id',
          type: 'String',
          description: 'ID for input tag',
          default: ''
        },
        {
          name: 'name',
          type: 'String',
          description: 'Checkbox "name" attribute value',
          default: ''
        },
        {
          name: 'v-model',
          type: 'Boolean, Array',
          description: 'Reactive value. Can be boolean if It\'s a single checkbox, or an array of checked checkbox values.',
          default: ''
        },
        {
          name: 'value',
          type: 'String, Boolean, Number, Object, Array, Function',
          description: 'Value for each checkbox in group.',
          default: ''
        },
        {
          name: 'checked',
          type: 'Boolean',
          description: 'Forced value of "checked" state. If you provide this property, v-model and value will be ignored.',
          default: ''
        },
        {
          name: 'form',
          type: 'String',
          description: 'Form ID checkbox belongs',
          default: undefined
        },
        {
          name: 'required',
          type: 'Boolean',
          description: 'Required state',
          default: 'false'
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
      events: ['click', 'change', 'focus', 'blur'],
      options: [
        {
          name: 'icon',
          type: 'Vue component, HTML code',
          description: 'Custom checkbox icon',
          example: `// nuxt.config.js
commonComponents: {
  checkbox: {
    icon: () => import('@/components/icons/check')
  }
}`
        }
      ],
      example: `<common-checkbox v-model="checkedSingle">Single</common-checkbox>

<common-checkbox v-model="checkedArray" value="box1">Checkbox 1</common-checkbox>
<common-checkbox v-model="checkedArray" value="box2">Checkbox 2</common-checkbox>`,
      advanced: ''
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
          description: 'Input name attribute value',
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
          name: 'required',
          type: 'Boolean',
          description: 'Required state',
          default: 'false'
        },
        {
          name: 'autofocus',
          type: 'Boolean',
          description: 'Autofocus state',
          default: 'false'
        },
        {
          name: 'autocomplete',
          type: 'Boolean',
          description: 'Autocomplete state',
          default: 'true'
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
>
  Label text here
</common-input>`
    },
    {
      id: 'loader',
      title: 'Loader',
      properties: [
        {
          name: 'show',
          type: 'Boolean',
          description: 'Show state',
          default: 'false'
        }
      ],
      events: ['click', 'show', 'hide'],
      options: [
        {
          name: 'icon',
          type: 'Vue component, HTML code',
          description: 'Custom loading icon',
          example: `// nuxt.config.js
commonComponents: {
  loader: {
    icon: () => import('@/components/icons/loading')
  }
}`
        }
      ],
      example: '<common-loader :show="true" @show="onShow" @hide="onHide" />'
    },
    {
      id: 'modal',
      title: 'Modal',
      dependencies: ['vuex'],
      properties: [
        {
          name: 'id',
          type: 'String',
          description: 'Modal id for opening and closing',
          required: true
        },
        {
          name: 'size',
          type: 'String',
          description: 'Modal window size (for custom styles)',
          default: 'default'
        }
      ],
      events: ['open', 'close'],
      options: [
        {
          name: 'icon',
          type: 'Vue component, HTML code',
          description: 'Custom close icon',
          example: `// nuxt.config.js
commonComponents: {
  modal: {
    icon: () => import('@/components/icons/cross')
  }
}`
        }
      ],
      example: `<common-modal id="modal1">
  <div>Modal content</div>
</common-modal>

<a href="#" @click.prevent="openModal('modal1')">
  open modal1
</a>`,
      advanced: `<div>
  <div class="h3">Global methods:</div>
  <div class="labels">
    <div class="label blue">openModal(id)</div>
    <div class="label blue">closeModal(id)</div>
    <div class="label blue">closeLastModal()</div>
    <div class="label blue">closeAllModals()</div>
  </div>
</div>`
    },
    {
      id: 'notification',
      title: 'Notification',
      dependencies: ['vuex'],
      properties: [],
      events: [],
      rootEvents: ['notification-show', 'notification-hide'],
      options: [],
      example: `// using in any components
<a href="#" @click.prevent="showNotification('just text')">simple notification</a>
<a href="#" @click.prevent="showNotification({ type: 'error', content: \`<div>HTML code</div>\` })">error type + html code</a>
<a href="#" @click.prevent="showNotification({ type: 'warning', content: 'No timeout here', timeout: 0 })">warning type + no timeout</a>`,
      advanced: ''
    },
    {
      id: 'radio',
      title: 'Radio',
      dependencies: [],
      properties: [
        {
          name: 'id',
          type: 'String',
          description: 'ID for input tag',
          default: ''
        },
        {
          name: 'name',
          type: 'String',
          description: '"name" attribute value for radio groups. Must be the same for all radio buttons in group.',
          default: ''
        },
        {
          name: 'v-model',
          type: 'String, Boolean, Number, Object, Array, Function',
          description: 'Reactive value. Can be boolean if It\'s a single radio, or any type for a group.',
          default: ''
        },
        {
          name: 'value',
          type: 'String, Boolean, Number, Object, Array, Function',
          description: 'Value for each radio in group.',
          default: ''
        },
        {
          name: 'checked',
          type: 'Boolean',
          description: 'Forced value of "checked" state. If you provide this property, v-model and value will be ignored.',
          default: ''
        },
        {
          name: 'form',
          type: 'String',
          description: 'Form ID radio belongs',
          default: ''
        },
        {
          name: 'required',
          type: 'Boolean',
          description: 'Required state',
          default: 'false'
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
      events: ['click', 'change', 'focus', 'blur'],
      options: [
        {
          name: 'icon',
          type: 'Vue component, HTML code',
          description: 'Custom radio icon',
          example: `// nuxt.config.js
commonComponents: {
  radio: {
    icon: () => import('@/components/icons/check')
  }
}`
        }
      ],
      example: `<common-radio v-model="single">Square</common-radio>

<common-radio v-model="shape" name="shape" value="square">Square</common-radio>
<common-radio v-model="shape" name="shape" value="round">Round</common-radio>
<common-radio v-model="shape" name="shape" value="triangle">Triangle</common-radio>`,
      advanced: ''
    },
    {
      id: 'select',
      title: 'Select',
      dependencies: [],
      properties: [
        {
          name: 'v-model',
          type: 'String, Boolean, Number, Object, Array, Function',
          description: 'Reactive value. The select mode will be "multiple" if it\'s an array.',
          default: ''
        },
        {
          name: 'options',
          type: 'Array',
          description: 'An array of options. Can be simple [\'val1\', \'val2\'] or an array of objects [{ text: \'Value 1\', value \'val1\'}]',
          required: true
        },
        {
          name: 'empty-text',
          type: 'String',
          description: 'Text of an empty value.',
          default: '"Not selected"'
        },
        {
          name: 'empty-value',
          type: 'String, Boolean, Number, Object, Array, Function',
          description: 'Value of an empty value.',
          default: 'null'
        },
        {
          name: 'searchable',
          type: 'Boolean',
          description: 'If it\'s true, there is a search field will be in the select.',
          default: 'true'
        },
        {
          name: 'search-placeholder',
          type: 'String',
          description: 'Placeholder text for the search input. For searchable selects only.',
          default: '"Search..."'
        },
        {
          name: 'selected-text',
          type: 'String',
          description: '"Selected" text when many options are selected.',
          default: '"{n} selected"'
        },
        {
          name: 'selected-count',
          type: 'Number',
          description: 'Number of selected options to show the "Selected" text.',
          default: '3'
        },
        {
          name: 'required',
          type: 'Boolean',
          description: 'If it\'s true, the empty option will be disabled.',
          default: 'false'
        },
        {
          name: 'disabled',
          type: 'Boolean',
          description: 'Disabled state',
          default: 'false'
        }
      ],
      events: ['open', 'close', 'change', 'search'],
      example: `<template>
  <common-select v-model="simple" :options="options">Simple</common-select>
  <common-select v-model="multiple" :options="options" empty-text="Custom empty text">Multiple</common-select>
</template>

<script>
  export default {
    data () {
      return {
        simple: null,
        multiple: [],
        options: [
          {
            text: 'Value 1',
            value: 'val1'
          },
          {
            text: 'Value 2',
            value: 'val2',
            disabled: true
          },
          {
            text: 'Value 3',
            value: 'val3'
          },
          {
            text: 'Value 4',
            value: 'val4'
          }
        ]
      }
    }
  }
</script>
`,
      advanced: ''
    },
    {
      id: 'switch',
      title: 'Switch/Toggle',
      dependencies: [],
      properties: [
        {
          name: 'id',
          type: 'String',
          description: 'ID for input tag',
          default: ''
        },
        {
          name: 'v-model',
          type: 'String, Boolean, Number, Object, Array, Function',
          description: 'Reactive value. If there is a value, switch will be in active state.',
          default: ''
        },
        {
          name: 'checked',
          type: 'Boolean',
          description: 'Forced value of "checked" state. If it\'s true, switch will be in active state.',
          default: ''
        },
        {
          name: 'form',
          type: 'String',
          description: 'Form ID input belongs',
          default: ''
        },
        {
          name: 'required',
          type: 'Boolean',
          description: 'Required state',
          default: 'false'
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
      events: ['click', 'change', 'focus', 'blur'],
      example: `<common-switch v-model="isChecked" @change="onChange">
  Label text here
</common-switch>`,
      advanced: ''
    },
    {
      id: 'tabs',
      title: 'Tabs',
      dependencies: [],
      properties: [
        {
          name: 'tabs',
          type: 'Array',
          description: 'An array of tabs. Can be an array of objects or simple strings (with tab labels).',
          required: true
        },
        {
          name: 'disabled',
          type: 'Boolean',
          description: 'If it\'s true, all the tabs will be disabled.',
          default: 'false'
        }
      ],
      events: ['change'],
      example: `<template>
  <common-tabs :tabs="tabs" />

  <div data-common-tab="first">Content fo the first tab</div>
  <div data-common-tab="second">Content fo the second tab</div>
  <div data-common-tab="third">Content fo the third tab</div>
</template>

<script>
  export default {
    data () {
      return {
        tabs: [
          {
            id: 'first',
            label: 'The first tab'
          },
          {
            id: 'second',
            label: 'The second tab',
            active: true
          },
          {
            id: 'third',
            label: 'Disabled tab',
            disabled: true
          }
        ]
      }
    }
  }
</script>`,
      advanced: ''
    },
    {
      id: 'text',
      title: 'Text',
      dependencies: [],
      properties: [
        {
          name: 'tag',
          type: 'String',
          description: 'Tag name for the element.',
          default: '"div"'
        },
        {
          name: 'type',
          type: 'String',
          description: 'Type value for custom styles.',
          default: '"default"'
        },
        {
          name: 'size',
          type: 'String',
          description: 'Size value for custom styles.',
          default: '"default"'
        },
        {
          name: 'weight',
          type: 'String',
          description: 'Weight value for custom styles.',
          default: '"normal"'
        }
      ],
      events: ['click'],
      example: `<common-text type="warning" weight="bold">Warning and bold text.</common-text>
<common-text size="small">Small text.</common-text>
<common-text size="large" weight="light">Large and light text.</common-text>`,
      advanced: ''
    },
    {
      id: 'typing-text',
      title: 'Typing Text',
      dependencies: [],
      properties: [
        {
          name: 'tag',
          type: 'String',
          description: 'Tag name for the element.',
          default: '"div"'
        },
        {
          name: 'items',
          type: 'Array',
          description: 'An array of text items.',
          required: true
        },
        {
          name: 'item-delay',
          type: 'Number',
          description: 'Each item show duration (ms).',
          default: '3000'
        },
        {
          name: 'letter-delay',
          type: 'Number',
          description: 'Letter adding/removing delay (ms).',
          default: '100'
        }
      ],
      events: ['click', 'change', 'show', 'hide'],
      example: `<common-typing-text
  :items="['The first text', 'The second text', 'The third text']"
  :item-delay="3000"
  :letter-delay="100"
  @change="onItemChange" />`,
      advanced: ''
    },
    {
      id: 'textarea',
      title: 'Textarea',
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
          name: 'cols',
          type: 'Number',
          description: 'Number of columns',
          default: ''
        },
        {
          name: 'rows',
          type: 'Number',
          description: 'Number of rows',
          default: ''
        },
        {
          name: 'required',
          type: 'Boolean',
          description: 'Required state',
          default: 'false'
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
      example: `<common-textarea
  id="id"
  v-model="value"
  :rows="3"
  placeholder="placeholder"
/>`
    }
  ],
  inDev: ['context-menu', 'dropdown', 'file-input', 'tooltip']
})

export const getters = {
  ids: state => state.components.map(i => !i.hidden ? i.id : undefined)
}
