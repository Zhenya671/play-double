import {createRouter, createWebHashHistory} from "vue-router";
import SignIn from "../view/auth/SignIn.vue";
import MainPaige from "../view/MainPaige.vue";
import SignUp from "../view/auth/SignUp.vue";

const routes = [
    {
        path: '/signin',
        name: 'signin',
        component: SignIn,
    },
    {
        path: '/',
        name: 'main-paige',
        component: MainPaige,
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
