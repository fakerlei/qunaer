import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import City from '@/pages/city'
import GroupDetail from '@/pages/groupDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/GroupDetail :id',
      name: 'GroupDetail',
      component: GroupDetail
    }
  ]
})
