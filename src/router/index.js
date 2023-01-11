import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about', 
  //   name: 'about',
  //   component: AboutView
  // },
  // {
  //   path: '/resume', 
  //   name: 'resume',
  //   component: ResumeView
  // },
  // {
  //   path: '/projects', 
  //   name: 'projects',
  //   component: ProjectsView 
  // },
  // {
  //   path: '/testimonials', 
  //   name: 'testimonials',
  //   component: TestimonialsView
  // },
  // {
  //   path: '/contact', 
  //   name: 'contact',
  //   component: ContactView
  // }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
