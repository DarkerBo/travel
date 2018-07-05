import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'CIty',
      component: City
    }
  ]
})
