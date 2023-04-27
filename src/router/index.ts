import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/authority',
      name: 'authority',
      component: () => import('../views/authority/AuthorityView.vue')
    },
    {
      path: '/normal',
      name: 'normal',
      component: () => import('../views/authority/NormalView.vue')
    },
    {
      path: '/manage',
      name: 'manage',
      component: () => import('../views/authority/ManageView.vue')
    },
    {
      path: '/super',
      name: 'super',
      component: () => import('../views/authority/SuperView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/test/TestView.vue')
    }
  ]
});

export default router;
