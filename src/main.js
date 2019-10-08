import Vue from 'vue'
import App from './App.vue'

import router from './router'

import Header from './components/Header/Header.vue'

Vue.component('Header', Header)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
