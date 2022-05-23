import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView'


const routes = [
    {
        path:'/',
        name:'HomeView',
        component: HomeView
    }
]

const Router = createRouter({
    history: createWebHistory(),
    routes,
})


export default Router