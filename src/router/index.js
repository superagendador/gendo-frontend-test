import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Starred from '../views/Starred.vue'
import Repos from '../views/Repos.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'starred',
        component: Starred
      },
      {
        path: 'repos',
        component: Repos
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
