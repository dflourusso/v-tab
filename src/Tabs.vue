<template lang="pug">
.v-tab
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
  .v-tab-tabs
    display -webkit-flex /* Safari */
    display flex
    width 100%
    .v-tab-tab
      -webkit-flex 1  /* Safari 6.1+ */
      -ms-flex 1  /* IE 10 */
      flex 1
      cursor default
      padding 5px
      background-color #E6E6E6
      color #5295CF
      &.active
        color #E6E6E6
        background-color #5295CF
  &.v-tab-vertical
    .v-tab-tabs
      flex-direction column
      max-width 300px
      float left
    .v-tab-content
      margin-left 300px
</style>
