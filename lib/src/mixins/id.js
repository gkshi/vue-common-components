export default {
  props: {
    // ID for field and label
    id: [String, Number]
  },
  data () {
    return {
      localId: this.id
    }
  },
  mounted () {
    // Random ID generating if no ID as prop
    this.localId = this.localId || Math.random().toFixed(7).slice(2)
  }
}
