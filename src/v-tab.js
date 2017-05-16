// need to use require instead of import (changes from babel 5 to 6)
const Tabs = require('./Tabs.vue')
const Tab = require('./Tab.vue')
const VTab = {
  version: proccess.env.VERSION,
  install: (vue) => {
    vue.component('v-tabs', Tabs)
    vue.component('v-tab', Tab)
  }
}

module.exports = VTab
