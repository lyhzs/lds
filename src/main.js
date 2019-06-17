// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import store from './store'

import citySelector from 'vue2-city-selector'
Vue.use(citySelector)



router.beforeEach((to, from, next) => {

  if (localStorage.getItem('isLogin')) {//登录状态
    next()//直接进入当前路由操作页面
  } else {//未登录状态
    if (to.path == '/login' || to.path == '/register' || to.path == "/") {
      next()
    } else {
      if (confirm('您登陆了么？请先登录')) {
        next('/login')
      } else {
        next(false)
      }
    }
  }


})




Vue.config.productionTip = false
axios.defaults.baseURL = 'https://wd0433588559ipqpdn.wilddogio.com/'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
