import Vue from 'vue'
import Vuetify from 'vuetify'
import App2 from './App2'
import router from './router'
import store from './store/store'

Vue.use(Vuetify)
Vue.config.productionTip = false

import('../node_modules/vuetify/dist/vuetify.min.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App2)
})
