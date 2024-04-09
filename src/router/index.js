import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // linkActiveClass: 'active',
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
          path: 'carbasicinfo',
          name: 'carbasicinfo',
          component: () => import('../views/dashboard/BackStage.vue'),
        },
      ],
    },
  ]
})

export default router