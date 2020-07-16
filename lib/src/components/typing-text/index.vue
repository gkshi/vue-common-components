<template>
  <component :is="tag" :class="classList" @click="$emit('click', $event)">
    {{ displayWord || '&nbsp;' }}
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    items: {
      type: Array,
      required: true
    },
    itemDelay: {
      type: Number,
      default: 3000
    },
    letterDelay: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      direction: 'left',
      wordIndex: 0,
      letterIndex: 0,
      interval: null
    }
  },
  computed: {
    classList () {
      let str = 'common-typing-text-component'
      if (this.isWordEmpty) {
        str += ' common-typing-text-empty'
      }
      return str
    },
    isWordFull () {
      return this.letterIndex === this.activeWord.length
    },
    isWordEmpty () {
      return this.letterIndex === 0
    },
    activeWord () {
      return this.items[this.wordIndex]
    },
    slice () {
      return [0, this.letterIndex]
    },
    displayWord () {
      return this.activeWord.slice(this.slice[0], this.slice[1])
    }
  },
  watch: {
    isWordFull () {
      if (this.isWordFull) {
        this.$emit('show', this.activeWord)
      }
    }
  },
  beforeMount () {
    this.letterIndex = this.activeWord.length
  },
  mounted () {
    this.$on('letter-add', this.onLetterAdd)
    this.$on('letter-remove', this.onLetterRemove)
    this.$on('word-change', this.onWordChange)
    this.init()
  },
  beforeDestroy () {
    this.$off('letter-add')
    this.$off('letter-remove')
    this.$off('word-change')
  },
  methods: {
    init () {
      if (this.isWordEmpty) {
        // Если слово пустое, меняем на следующее
        this.changeWord()
      } else if (this.isWordFull) {
        // Если слово полное, начинаем удалять буквы после задержки
        setTimeout(() => {
          this.removeLetter()
        }, this.itemDelay)
      } else {
        this.direction === 'left'
          ? this.removeLetter()
          : this.addLetter()
      }
    },
    changeWord () {
      this.wordIndex = this.wordIndex + 1 === this.items.length ? 0 : this.wordIndex + 1
      this.$emit('word-change')
      this.$emit('change', this.activeWord)
    },
    addLetter () {
      setTimeout(() => {
        this.letterIndex++
        this.$emit('letter-add')
      }, this.letterDelay)
    },
    removeLetter () {
      setTimeout(() => {
        this.letterIndex--
        this.$emit('letter-remove')
      }, this.letterDelay)
    },
    onLetterAdd () {
      if (this.isWordFull) {
        // Если слово заполнилось, начинаем удалять буквы после задержки
        setTimeout(() => {
          this.direction = 'left'
          this.removeLetter()
        }, this.itemDelay)
      } else {
        this.addLetter()
      }
    },
    onLetterRemove () {
      // Если слово закончилось, меняем слово
      // или продолжаем удалять буквы
      if (this.isWordEmpty) {
        this.$emit('hide', this.activeWord)
        this.changeWord()
      } else {
        this.removeLetter()
      }
    },
    onWordChange () {
      // По смене слова меняем направление и добавляем букву
      this.direction = 'right'
      this.addLetter()
    }
  }
}
</script>

<style lang="scss">
  .common-typing-text-component {
    position: relative;
    display: inline-flex;
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: -2px;
      display: block;
      width: 1px;
      height: 1.2em;
      background: #222;
      transform: translate(0, -50%);
      animation: common-typing-text-toggle 1.3s linear infinite;
    }

    &.common-typing-text-empty {
      //
    }

    @keyframes common-typing-text-toggle {
      49% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      99% {
        opacity: 0;
      }
    }
  }
</style>
