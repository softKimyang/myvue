export default{
    getUserId: state => state.userId,
    getErrorState: state => state.errorState,
    getIsAuth: state => state.isAuth,
    loggedIn(state){
        return !!state.user
    },
    getCounter: state => state.counter,
    getTwoPowerCounter(state){
        console.log('getTwoPowerCounter', state.counter);
        return state.counter ** 2;
    }
}