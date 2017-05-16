// need to use require instead of import (changes from babel 5 to 6)
const Tabs = require('./Tabs.vue')
const Tab = require('./Tab.vue')
const VTab = {
  version: proccess.env.VERSION,
  install: (vue, options = {}) => {
    vue.component(options.tabsName || 'tabs', Tabs)
    vue.component(options.tabName || 'tab', Tab)
  }
}

module.exports = VTab
