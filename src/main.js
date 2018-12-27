// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import '@/assets/border.css'
import '@/assets/font/iconfont.css'
import '@/assets/reset.css'
=======
import '@/assets/reset.css'
import '@/assets/border.css'
import '@/assets/font/iconfont.css'
import store from '@/store'
>>>>>>> origin/20181226-index-caolei
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
