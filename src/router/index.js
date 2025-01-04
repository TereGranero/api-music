import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import AddProductView from '@/views/AddProductView.vue'
import EditProductView from '@/views/EditProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/new-product',
    name: 'AddProduct',
    component: AddProductView
  },
  {
    path: '/edit-product/:id',
    name: 'EditProduct',
    component: EditProductView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
