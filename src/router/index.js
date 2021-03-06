import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:"/register",
    name:"register",
    component:Register
  },
  {
    path:"/login",
    name:"login",
    component:Register
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // } no need 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
