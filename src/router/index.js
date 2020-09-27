import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: () => import("../views/Home.vue"),
    children: [{
      path: '', component: () => import('@/views/Page/Home.vue'),
    }]
  }, { path: '/login', component: () => import('@/views/Page/Login_Register.vue') },
  { path: '/settings', component: () => import('@/views/Page/Settings.vue') },
  { path: '/create', component: () => import('@/views/Page/CreateArticle.vue') },
  { path: '/articles/:slug', component: () => import('@/views/Page/Article.vue') },
]

const router = new VueRouter({
  routes
})

export default router
