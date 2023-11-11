import { createWebHistory, RouterOptions } from 'vue-router'
import Main from '../../presentation/pages/Main.vue'
import { dashboardConfig } from './dashboard.config'
import { ClientConfig } from './client.config'
const config: RouterOptions = {
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: '/dashboard',
      children: [dashboardConfig, ClientConfig],
    },
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
}
export default config
