import Vue from 'vue'
import Vuex from 'vuex'
import { moduleMembers } from './moduleMembers.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {
        axiosError(thisStore, error) {
            console.error(error.response || error.message || error)
        }
    },
    modules: {
        $$members: moduleMembers
    }
})