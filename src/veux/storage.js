import { createStore } from 'vuex';
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions'

export default createStore({
    state: {
        user: null,
        isLogin: false,
        counter: 2,
    },
    getters,
    mutations,
    actions
})