<template lang="pug">
div.tabs-component
  .pure-g.tabs
    div(:class='gridClass(tab)', v-for='tab in tabs', @click='activate(tab)')
      div.tab(:class="{active: activeTab === tab.name}")
        i.fa.fa-2x(:class="tabIconClass(tab.icon)", v-if='tab.icon')
        span(v-else) {{ tab.label }}
  slot
</template>

<script>
export default {
  data () {
    return {
      activeTab: '',
      tabs: []
    }
  },
  methods: {
    activate (tab) {
      this.activeTab = tab.name
      this.$emit('activateTab', tab.name)
    },
    gridClass (tab) {
      let classes = { }
      classes[`pure-u-1-${this.tabs.length}`] = true
      return classes
    },
    tabIconClass (icon) {
      let tmp = {}
      tmp[icon] = true
      return tmp
    }
  }
}
</script>
<style lang="stylus">
.tabs-component
  .tabs
    text-align center
    position absolute
    bottom 0
    right 0
    left 0
    .tab
      padding 5px
      background-color #E6E6E6
      color #5295CF
      border-top 2px solid transparent
      &.active
        color #306B9F
        border-top 2px solid #306B9F
</style>
