import {createRouter, createWebHashHistory} from "vue-router";
import Login from "../view/Login";
import MainPaige from "../view/MainPaige";

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/main',
        name: 'main-paige',
        component: 'MainPaige',
        props: true
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
