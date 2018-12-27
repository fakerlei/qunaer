import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Home from '@/components/pages/home'
=======
import Home from '@/pages/home'
>>>>>>> origin/20181226-index-caolei

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
