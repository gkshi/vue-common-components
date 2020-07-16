<template lang="pug">
  .page.docs
    section.section(v-for="component in components" v-if="!component.hidden" :id="component.id" :key="component.id")
      .wrapper.flex
        div
          .h2
            span {{ component.title }} component
            template(v-if="component.dependencies && component.dependencies.length")
              span &nbsp;
              span ({{ component.dependencies.join(', ') }})

          .property.flex.column.a-start(v-for="(property, i) in component.properties" :key="i")
            .label {{ property.name }}
            small Description: {{ property.description }}
            small Type: {{ property.type }}
            small(v-if="property.values") Values: {{ property.values.join(', ') }}

            small(v-if="!property.required") Default: {{ property.default || '-' }}
            small(v-else) Required property.

          .label-section
            .h3 Events:
            .labels(v-if="component.events && component.events.length")
              .label.green(v-for="(event, i) in component.events" :key="i") @{{ event }}
            div(v-else) &nbsp;-

          .advanced-section(v-if="component.advanced" v-html="component.advanced")

          .options-section(v-if="component.options && component.options.length")
            .h3 Options:
            .property.flex.column.a-start(v-for="option in component.options" :key="option.name")
              .label {{ option.name }}
              small Type: {{ option.type }}
              small Description: {{ option.description }}
              vCode(v-if="option.example" :data="option.example")

          template(v-if="component.id === 'select'")
            .advanced-section
              .h3 Option data:
              vCode(:data="`{\n  text: String,\n  value: String, Boolean, Number, Object, Array, Function,\n  disabled: Boolean\n}`")
            .advanced-section
              .h3 Init options:
              vCode(:data="selectOptions")

        div
          .sticky
            vCode.example(:data="component.example")

            div Live example:
            .live

              // custom example for modal component
              template(v-if="component.id === 'modal'")
                a(href="#" @click.prevent="openModal('modal1')") open modal1

              // custom example for loader component
              template(v-else-if="component.id === 'loader'")
                common-switch(v-model="showLoader") show/hide
                common-loader(:show="showLoader" @click="onClick" @show="onShow" @hide="onHide")

              // custom example for checkbox component
              template(v-else-if="component.id === 'checkbox'")
                commonCheckbox(v-model="checkbox.single") Single checkbox
                div(style="margin-top: 20px;")
                  commonCheckbox(v-model="checkbox.multiple" value="box1") Checkbox 1 (box1)
                  commonCheckbox(v-model="checkbox.multiple" value="box2") Checkbox 2 (box2)
                div
                  vCode(:data="checkboxCode")

              // custom example for radio component
              template(v-else-if="component.id === 'radio'")
                div
                  commonRadio(v-model="radio.single" name="single") Single
                div(style="margin-top: 20px;")
                  commonRadio(v-model="radio.group" name="shape" value="square") Square
                  commonRadio(v-model="radio.group" name="shape" value="round") Round
                  commonRadio(v-model="radio.group" name="shape" value="triangle") Triangle
                div
                  vCode(:data="radioCode")

              // custom example for select component
              template(v-else-if="component.id === 'select'")
                div
                  commonSelect(
                    v-model="select.single"
                    :options="select.options"
                    :empty-value="null") Single
                div(style="margin-top: 10px;")
                  commonSelect(
                    v-model="select.multiple"
                    :options="select.options"
                    empty-text="Custom empty text"
                    :empty-value="null") Multiple
                div
                  vCode(:data="selectCode")

              // custom example for text component
              template(v-else-if="component.id === 'text'")
                div
                  commonText(type="warning" weight="bold") Warning and bold text.
                  commonText(size="small") Small text.
                  commonText(size="large" weight="light") Large and light text.

              // custom example for typing-text component
              template(v-else-if="component.id === 'typing-text'")
                div
                  commonTypingText(
                    :items="['The first text', 'The second text', 'The third text']"
                    :letter-delay="100")

              // custom example for typing-text component
              template(v-else-if="component.id === 'switch'")
                div
                  commonSwitch(v-model="switchValue" name="asd" @change="onChange") Simple switch
                div
                  vCode(:data="switchCode")

              // custom example for notification component
              template(v-else-if="component.id === 'notification'")
                div
                  div
                    span 1. &nbsp;
                    a(href="#" @click.prevent="showNotification('just text')") simple notification
                  div
                    span 2. &nbsp;
                    a(href="#" @click.prevent="showNotification({ type: 'error', content: `<div>HTML code</div>` })") error type + html code
                  div
                    span 3. &nbsp;
                    a(href="#" @click.prevent="showNotification({ type: 'warning', content: 'No autohide here', timeout: 0 })") warning type + no timeout

              component(
                v-else
                :is="componentName(component.id)"
                v-bind="propList(component.example)"
                v-on="eventList(component.example)")

    // custom example for modal component
    commonModal(id="modal1")
      div(slot="head") heading
      div The first modal, default size.
      .buttons(slot="buttons")
        commonButton(@click="openModal('modal2')") open modal2
        commonButton(@click="closeModal('modal1')") close
    commonModal(id="modal2" size="narrow")
      div The second modal, "narrow" size.
      template(slot="buttons")
        commonButton(@click="closeModal('modal2')") close
</template>

<script>
// import Vue from 'vue'
import { mapState } from 'vuex'
import vCode from '@/components/code'

function _getArrtibuteArray (code) {
  try {
    let el = document.createElement('div')
    el.innerHTML = code
    el = el.children[0]
    return Array.from(el.attributes)
  } catch (e) {
    return []
  }
}

export default {
  components: {
    vCode
  },
  data () {
    return {
      checkbox: {
        single: false,
        multiple: ['box2']
      },
      radio: {
        single: false,
        group: null
      },
      select: {
        single: null,
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
      },
      switchValue: true,
      showLoader: true
    }
  },
  computed: {
    ...mapState({
      components: state => state.components
    }),
    componentName () {
      return name => {
        const cleanName = name.replace(/-/g, ' ')
        const arr = cleanName.includes(' ')
          ? cleanName.split(' ').map(i => `${i.slice(0, 1).toUpperCase()}${i.slice(1).toLowerCase()}`)
          : [`${cleanName.slice(0, 1).toUpperCase()}${cleanName.slice(1).toLowerCase()}`]
        return `common${arr.join('')}`
      }
    },
    checkboxCode () {
      return `checkedSingle: ${this.checkbox.single}
checkedArray: [${this.checkbox.multiple}]`
    },
    radioCode () {
      return `single: ${this.radio.single}
shape: ${this.radio.group}`
    },
    selectCode () {
      return `single: ${this.select.single}
multiple: [${this.select.multiple}]`
    },
    selectOptions () {
      return `// nuxt.config.js
commonComponents: {
  select: {
    icons: {
      clear: () => import('@/components/icons/cross'),
      angle: () => import('@/components/icons/angle'),
      selected: () => import('@/components/icons/check')
    }
  }
}`
    },
    switchCode () {
      return `v-model: ${this.switchValue}`
    }
  },
  mounted () {
    this.checkQuery()
  },
  methods: {
    checkQuery () {
      if (this.$route.query.component) {
        this.$nextTick(() => {
          setTimeout(() => {
            window.scroll({
              top: document.getElementById(this.$route.query.component).offsetTop - 60,
              left: 0,
              behavior: 'smooth'
            })
          }, 500)
        })
      }
    },
    propList (code) {
      const arr = _getArrtibuteArray(code)
      const res = {}
      arr.forEach(i => {
        if (i.name.includes('@')) {
          return
        }
        if (i.name.includes(':')) {
          const name = i.name.replace(/:/g, '')
          // eslint-disable-next-line no-eval
          res[name] = eval(i.value)
        }
        res[i.name] = i.value
      })
      return res
    },
    eventList (code) {
      const arr = _getArrtibuteArray(code)
      const res = {}
      arr.forEach(i => {
        if (!i.name.includes('@')) {
          return
        }
        const name = i.name.replace(/@/g, '')
        res[name] = () => {
          // eslint-disable-next-line no-console
          console.log(i.name)
        }
      })
      return res
    },
    onChange (e) {
      console.log('onChange', e)
    },
    onClick (e) {
      console.log('onClick', e)
    },
    onShow (e) {
      console.log('onShow', e)
    },
    onHide (e) {
      console.log('onHide', e)
    }
  }
}
</script>

<style lang="scss" scoped>
  .page.docs {
    .section {
      position: relative;
      z-index: 1;
      padding: 100px 0;
      .wrapper {
        position: relative;
        z-index: 1;
        & > * {
          width: 50%;
          &:first-child {
            padding-right: 40px;
            .h2 {
              position: sticky;
              top: 60px;
              margin-top: -30px;
              padding-top: 30px;
              padding-bottom: 20px;
              background: $color-light;
            }
            ::v-deep code {
              background: $color-bg;
            }
          }
          &:last-child {
            padding-left: 40px;
          }
        }
      }
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 50%;
        height: 100%;
        background: $color-light;
      }
    }

    .sticky {
      position: sticky;
      top: #{$header-height-value + 30}px;
    }

    .example {
      margin-bottom: 30px;
      ::v-deep code {
        margin-top: 0;
      }
    }
    .label-section {
      margin-top: 50px;
    }
    .options-section {
      margin-top: 40px;
    }
    .advanced-section {
      margin-top: 40px;
    }
    .property {
      margin-bottom: 20px;
      .label {
        margin-bottom: 8px;
      }
    }
    .live {
      margin-top: 10px;
    }
  }
</style>
