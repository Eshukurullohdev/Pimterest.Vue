import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppDetail from '@/views/AppDetail.vue'
import Search from '@/views/Search.vue'
import Accaunt from '@/views/Accaunt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/photos/:id',
      name: 'detail',
      component: AppDetail,
      props: true,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/accaunt',
      name: 'accaunt',
      component: Accaunt,
    }
  ],
})

export default router
