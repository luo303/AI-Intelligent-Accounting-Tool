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
      path: '/',
      component: () => import('@/views/layout/index.vue'),
      redirect: '/login',
      children: [
        {
          path: 'home',
          component: () => import('@/views/layout/home.vue'),
          name: 'Home'
        },
        {
          path: 'echarts',
          component: () => import('@/views/layout/echarts.vue'),
          name: 'Echarts'
        },
        {
          path: 'friends',
          component: () => import('@/views/layout/friends.vue'),
          name: 'Friends'
        },
        {
          path: 'mydetail',
          component: () => import('@/views/layout/mydetail.vue'),
          name: 'Mydetail'
        },
        {
          path: 'add',
          component: () => import('@/views/layout/add.vue'),
          name: 'Add'
        }
      ]
    }
  ]
})

export default router
