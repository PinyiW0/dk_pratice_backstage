import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { // 後台
      path: '/admin',
      component: () => import('../views/dashboard/BackstageLogin.vue'),
      children: [
        { // 後台登入頁
          path: 'login',
          name: 'login',
          component: () => import('../views/dashboard/BackstageLogin.vue'),
        },
        { // 車商基本資料
          path: 'carinfo',
          name: 'carinfo',
          component: () => import('../views/dashboard/BackstageView.vue'),
        },
      ],
    },
  ]
})

export default router