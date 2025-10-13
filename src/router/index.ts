import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login.vue'),
      name: 'Login'
    },
    {
      path: '/home',
      component: () => import('@/views/layout/Main.vue'),
      name: 'Home'
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

export default router
