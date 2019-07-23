import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageIndex from '@/components/PageIndex'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'

import index from '../pages/index.vue'
import pageQuiButton from '../pages/pageQuiButton.vue'
import pageQuiList from '../pages/pageQuiList.vue'
import pageQuiNav from '../pages/pageQuiNav.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/PageIndex',
      name: 'PageIndex',
      // 文章首页
      component: PageIndex,
      children: [
        // 子页面
        {
          path: '/',
          component: Page1
        },
        {
          path: 'page2',
          component: Page2
        }
      ]
    }, {
      path: '/btn',
      name: 'btn',
      component: pageQuiButton
    }, {
      path: '/list',
      name: 'list',
      component: pageQuiList
    }, {
      path: '/nav',
      name: 'nav',
      component: pageQuiNav
    }
  ]
})
