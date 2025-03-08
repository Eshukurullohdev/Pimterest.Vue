import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppDetail from '@/views/AppDetail.vue'
import Search from '@/views/AppSearch.vue'
import AppSearch from '@/views/AppSearch.vue'
import MyAccaunt from '@/views/MyAccaunt.vue'
import MyProfile from '@/views/MyProfile.vue'

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
      component: AppSearch,
    },
    {
      path: '/account',
      name: 'account',
      component: MyAccaunt,
    },
    {
      path: '/profile',
      name: 'profile',
      component: MyProfile,
    },
  ],
})

export default router
