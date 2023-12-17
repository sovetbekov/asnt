import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthorizationView from '@/modules/authorization/views/AuthorizationView.vue'
import CandidateForm from '@/modules/candidate/views/CandidateForm.vue'
import CandidateList from '@/modules/candidate/views/CandidateList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: AuthorizationView,
    },

    {
      path: '/candidate-form',
      name: 'candidateForm',
      component: CandidateForm,
    },
    {
      path: '/candidate-list',
      name: 'candidateList',
      component: CandidateList,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
