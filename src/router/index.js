import { createRouter, createWebHistory } from 'vue-router'
import main from '../views/Main.Vue'
import ProjectVue from '../views/Project.vue'
import ContactVue from '../views/Contact.vue'

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

      // -- 延遲加載 --  component: () => import('../views/Project.vue')
      component:ProjectVue
    },
    {
      path: '/contact',
      name: 'contact',

      // -- 延遲加載 --  component: () => import('../views/Contact.vue')
      component:ContactVue
    },
  ]
})

export default router
