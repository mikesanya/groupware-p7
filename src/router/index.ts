import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Forumpostview from '../views/Forum-post-view.vue'
import Profileaccountsetting from '../views/Profile-account-setting.vue'






const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      hideNavbar: true,
    }
  },
  {
    path: '/forum-post-view',
    name: 'Forum-post-view',
    component: Forumpostview
  },
  {
    path: '/profile-account-setting',
    name: 'Profile-account-setting',
    component: Profileaccountsetting
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
