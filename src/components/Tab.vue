<template>
  <div v-show="visible">
      <slot></slot>
  </div>
</template>
<script>
export default{
  props: {
    'name': { required: true },
    'label': { type: String },
    'selected': {type: Boolean},
    'icon': {type: String}
  },
  data () {
    return {
      visible: false
    }
  },
  created () {
    let self = this
    let tab = {name: this.name, label: this.label, icon: this.icon}

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
  }
}
</script>

<style lang="stylus">
</style>
