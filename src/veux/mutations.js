import * as types from './mutation_types'

export default{
    [types.USER_ID] (state, userId){
        state.userId = userId
    },
    [types.ERROR_STATE] (state, errorState){
        state.errorState = errorState
    },
    [types.IS_AUTH] (state, isAuth){
        state.isAuth = isAuth
    },
    // [types.COUNTER] (state, counter){
    //     state.counter = counter
    // },
    setCounter(state, value){
        state.counter = value
    }
}