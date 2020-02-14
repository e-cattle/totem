import Vue from 'vue'
import Router from 'vue-router'
import Screensaver from './views/Screensaver.vue'
import Dashboard from './views/Dashboard.vue'
import Device from './views/Device.vue'
import Application from './views/Application.vue'
import Synchronize from './views/Synchronize.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'screensaver',
      component: Screensaver
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/device',
      name: 'device',
      component: Device
    },
    {
      path: '/application',
      name: 'application',
      component: Application
    },
    {
      path: '/synchronize',
      name: 'synchronize',
      component: Synchronize
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
