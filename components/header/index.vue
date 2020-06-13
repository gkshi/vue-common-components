<template lang="pug">
  header.header-component.flex.a-center
    .wrapper.flex.a-center.j-between
      div
        nuxt-link(to="/")
          iconLogo
      nav.flex.a-center
        div
          a(:class="{ active: $route.path === '/' }" href="/" @click.prevent="goToGetStarted") Get Started
        div
          nuxt-link(to="/docs") Docs
        div
          a(:href="repository" target="_blank") GitHub
</template>

<script>
import app from '@/package.json'
import iconLogo from '@/components/icons/logo'

export default {
  name: 'header-component',
  components: {
    iconLogo
  },
  data () {
    return {
      repository: app.repository.url
    }
  },
  methods: {
    goToGetStarted () {
      if (this.$route.path === '/') {
        try {
          window.scroll({
            top: document.getElementById('get_started').offsetTop - 90,
            left: 0,
            behavior: 'smooth'
          })
        } catch (e) {}
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-component {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: $header-height;
    padding: 10px 0;
    background: $color-dark;
    color: $color-text-white;
    a {
      color: inherit;
      text-decoration: none;
    }
    nav {
      & > * {
        &:not(:last-child) {
          margin-right: 40px;
        }
      }
      a {
        &.nuxt-link-active,
        &.active {
          position: relative;
          &:after {
            content: '';
            display: block;
            width: 100%;
            height: 3px;
            background: $color-primary;
            position: absolute;
            bottom: -6px;
            left: 0;
          }
        }
      }
    }
  }
</style>
