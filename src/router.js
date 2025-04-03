import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Plat from './components/Plat.vue'

const routes = [
{
path: '/',
name: 'Home',
component: Home
},
{
path: '/plat',
name: 'Plat',
component: Plat
}
]

const router = createRouter({
history: createWebHistory(),
routes
})

export default router