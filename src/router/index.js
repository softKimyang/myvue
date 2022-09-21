import { createRouter,  createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import BoardList from '../pages/board/BoardList.vue'
import BoardDetail from '../pages/board/BoardDetail.vue'
import BoardWrite from '../pages/board/BoardWrite.vue'
import Onerooms from '../pages/Onerooms.vue'
import VuexTest from '../pages/VuexTest.vue'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/onerooms',
        component: Onerooms
    },
    {
        path: '/board/list',
        component: BoardList
    },
    {
        path: '/board/detail',
        component: BoardDetail
    },
    {
        path: '/board/write',
        component: BoardWrite
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