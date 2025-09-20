import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import UpdateLogView from '@/views/UpdateLogView.vue'
import ReportView from '@/views/ReportView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/update_log',
      name: 'update_log',
      component: UpdateLogView
    },
    {
      path: '/report',
      name: 'report',
      component: ReportView
    }
  ]
})

export default router