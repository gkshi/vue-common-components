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
            .labels
              .label.green(v-for="(event, i) in component.events" :key="i") @{{ event }}

        div
          .sticky
            vCode.example(:data="component.example")

            div Live example:
            .live
              component(:is="`common${component.title}`")
</template>

<script>
import { mapState } from 'vuex'
import vCode from '@/components/code'

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
    }
  }
}
</script>

<style lang="scss" scoped>
  .page.docs {
    .section {
      position: relative;
      z-index: 1;
      padding: 80px 0;
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
