import Vue from 'vue'
import Router from 'vue-router'
import Top from './views/Top.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    }
  ]
})
