import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/pages/index.vue'
import login from '@/views/pages/login.vue'
import article from '@/views/pages/article/index'
/* 用户个人信息组件 */
import user from '@/views/pages/user.vue'
import profile from '@/components/user/profile/index'
import account from '@/components/user/account/index'
import collection from '@/components/user/collection/index'

/* 测试链接 */
import test from '@/views/test/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    name: 'user',
    component: user,
    children: [
      { path: 'profile', name: 'profile', component: profile },
      { path: 'account', name: 'account', component: account },
      { path: 'collection', name: 'collection', component: collection }
    ]
  }, {
    path: '/article',
    name: 'article',
    component: article
  }, {
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/test',
    name: 'test',
    component: test
  }, {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
