import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'DefaultLayout',
      component: () => import(('@/layout/default.vue')),
      children: [
        {
          path: '',
          name: 'Deals',
          component: () => import(('@/pages/deals/index.vue'))
        },
        {
          path: 'announcements',
          name: 'Announcements',
          component: () => import(('@/pages/announcements/index.vue'))
        },
        {
          path: 'reviews',
          name: 'Reviews',
          component: () => import(('@/pages/reviews/index.vue'))
        },
        {
          path: 'user-update',
          name: 'UserUpdate',
          component: () => import(('@/pages/profile/update.vue'))
        },
      ]
    }
  ]
});

export default router;
