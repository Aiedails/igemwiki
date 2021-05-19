import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { MotionPlugin } from '@vueuse/motion' 
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
Vue.use(MotionPlugin)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
