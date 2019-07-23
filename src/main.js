// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue文件
import Vue from 'vue'
// 引入App.vue文件
import App from './App'
// 引入路由配置
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// 实例化Vue实例
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
