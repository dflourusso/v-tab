import Tab from './components/Tab.vue'
import Tabs from './components/Tabs.vue'

export default {
  install (Vue, options = {}) {
    Vue.use(Tab)
    Vue.use(Tabs)
  }
}
