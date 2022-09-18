import { createRouter,  createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Onerooms from '../pages/Onerooms.vue'
import VuexTest from '../pages/VuexTest.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/onerooms',
        component: Onerooms
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/vuexTest',
        component: VuexTest
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router