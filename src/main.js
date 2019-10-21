import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueSessionStorage from 'vue-sessionstorage'

Vue.use(VueSessionStorage)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
