<template lang="pug">
  .page.docs
    section.section(v-for="component in components" :id="component.id" :key="component.id")
      .wrapper.flex
        div
          .h2 {{ component.title }} component

          .property.flex.column.a-start(v-for="(property, i) in component.properties" :key="i")
            .label {{ property.name }}
            small Description: {{ property.description }}
            small Type: {{ property.type }}
            small(v-if="property.values") Values: {{ property.values.join(', ') }}
            small Default: {{ property.default || '-' }}

          .label-section.flex.a-start.wrap
            .title Events:
            .labels(v-if="component.events && component.events.length")
              .label.green(v-for="(event, i) in component.events" :key="i") @{{ event }}
            .title(v-else) &nbsp; -

        div
          .sticky
            vCode.example(:data="component.example")

            div Live example:
            .live
              component(
                :is="`common${component.title}`"
                v-bind="propList(component.example)"
                v-on="eventList(component.example)")
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
  computed: {
    ...mapState({
      components: state => state.components
    })
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
      .title {
        margin-top: 3px;
      }
    }
    .labels {
      margin-top: 1px;
      margin-left: 10px;
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
