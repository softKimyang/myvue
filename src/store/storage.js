import { createStore } from 'vuex';

export default createStore({
    state: {
        counter: 2,
    },
    getters: {
        getTwoPowerCounter(state){
            console.log('getTwoPowerCounter', state.counter);
            return state.counter ** 2;
        }
    },
    mutations: {
        setCounter(state, value){
            state.counter = value;
        }
    }
})