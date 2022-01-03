import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/common/CallTable.vue'
import Test from '@/views/common/test.vue' 
import Dashboard from '@/views/common/Dashboard.vue'
import Table from '@/views/common/CallTable.vue'
import ChartDemo from '@/views/common/ChartDemo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/table',
    name: 'table',
    component: Table
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/chart',
    name: 'Chart',
    component: ChartDemo
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
