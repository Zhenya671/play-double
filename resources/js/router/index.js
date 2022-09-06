import {createRouter, createWebHashHistory} from "vue-router";
import Login from "../view/Login.vue";
import MainPaige from "../view/MainPaige.vue";

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/',
        name: 'main-paige',
        component: MainPaige,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
