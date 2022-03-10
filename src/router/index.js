import Vue from 'vue'
import VueRouter from 'vue-router'
import Members from '../components/contents/members-component.vue'
import Search from '../components/contents/search-component.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/members' },
    {
        path: '/members',
        name: 'Members',
        component: Members
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router