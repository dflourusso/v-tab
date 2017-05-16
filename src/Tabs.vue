<template lang="pug">
.v-tab
  .v-tab-tabs-group
    .v-tab-tabs
      div.v-tab-tab(v-for='tab in tabs', @click='activate(tab)', :class="{active: activeTab === tab.name}")
        span {{ tab.label }}
  .v-tab-content
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
    }
  }
}
</script>
<style lang="stylus">
.v-tab
  display -webkit-flex
  display flex
  flex-direction column
  .v-tab-tabs
    display -webkit-flex
    display flex
    flex-direction row
    .v-tab-tab
      -webkit-flex 1
      flex 1
      cursor default
      padding 5px
      background-color #E6E6E6
      color #5295CF
      &.active
        color #E6E6E6
        background-color #5295CF
  &.v-tab-vertical
    flex-direction row
    .v-tab-tabs
      flex-direction column
      min-width 300px
    .v-tab-content
      -webkit-flex 1
      flex 1
</style>
