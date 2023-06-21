import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',

      // -- 延遲加載 --
      component:()=> import('../views/Main.vue')
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
