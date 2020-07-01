<template lang="pug">
  .page.docs
    section.section(v-for="component in components" :id="component.id" :key="component.id")
      .wrapper.flex
        div
          .h2
            span {{ component.title }} component
            template(v-if="component.dependencies")
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

        div
          .sticky
            vCode.example(:data="component.example")

            div Live example:
            .live

              // custom example for modal component
              template(v-if="component.id === 'modal'")
                a(href="#" @click.prevent="openModal('modal1')") open modal1

              // custom example for checkbox component
              template(v-else-if="component.id === 'checkbox'")
                commonCheckbox(v-model="checkbox.single") Single checkbox
                div(style="margin-top: 20px;")
                  commonCheckbox(v-model="checkbox.multiple" value="box1") Checkbox 1 (box1)
                  commonCheckbox(v-model="checkbox.multiple" value="box2") Checkbox 2 (box2)
                div()
                  vCode(:data="checkboxCode")

              component(
                v-else
                :is="`common${component.title}`"
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
      }
    }
  },
  computed: {
    ...mapState({
      components: state => state.components
    }),
    checkboxCode () {
      return `checkedSingle: ${this.checkbox.single}
checkedArray: [${this.checkbox.multiple}]`
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
