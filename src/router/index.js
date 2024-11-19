import { createRouter, createWebHashHistory } from 'vue-router'
import Features from '@/components/view/Features.vue';
import TechSpecs from '@/components/view/TechSpecs.vue';
const routes = [
  {
    path: '/',
    component: () => import('@/components/MyMain.vue'),
    children: [
      {
        path: '',
        redirect: 'features',
      },
      {
        path: 'features',
        component: Features,
      },
      {
        path: 'tech-specs',
        component: TechSpecs,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
