import { createRouter, createWebHistory } from 'vue-router'
import main from '../views/Main.Vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',

      // -- 延遲加載 --
      component:main,
    },
    {
      path: '/project',
      name: 'project',

      // -- 延遲加載 --
      component: () => import('../views/Project.vue')
    },
    {
      path: '/contact',
      name: 'contact',

      // -- 延遲加載 --
      component: () => import('../views/Contact.vue')
    },
  ]
})

export default router
