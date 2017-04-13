import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'

export default {
  install (Vue, options = {}) {
    Vue.component(Tabs)
    Vue.component(Tab)
  }
}

export {
  Tabs,
  Tab
}
