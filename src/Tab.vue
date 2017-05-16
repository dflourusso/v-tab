<template>
  <div v-if="visible">
      <slot></slot>
  </div>
</template>
<script>
export default{
  props: {
    'label': { type: String },
    'selected': {type: Boolean}
  },
  data () {
    return {
      visible: false
    }
  },
  computed: {
    name () {
      return `v-tab-${this._uid}`
    }
  },
  created () {

    let self = this
    let tab = {name: this.name, label: this.label}

    if (this.selected === true) {
      this.$parent.$data.activeTab = tab.name
      this.visible = true
    }

    this.$parent.$data.tabs.push(tab)

    this.$parent.$on('activateTab', (tabName) => {
      if (self.name === tabName) {
        self.visible = true
      } else {
        self.visible = false
      }
    })
  },
  watch: {
    label () {
      this.$parent.$data.tabs.find(p => p.name == this.name).label = this.label
    }
  }
}
</script>

<style lang="stylus">
</style>
