<template>
    <div>
        <h3>로그인</h3>
        <div id="loginForm">
            <form @submit.prevent="fnLogin">
                <p>
                    <input type="text" class="w3-input" name="uid" placeholder="Enter your ID" v-model="user_id"><br>
                </p>
                <p>
                    <input type="password" class="w3-input" name="password" placeholder="Enter your Password" v-model="user_passwd">
                </p>
                <p>
                    <button type="submit" class="w3-button w3-green w3-round">Login</button>
                </p>
            </form>

        </div>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
export default {
    data(){
        return{
            user_id: '',
            user_passwd: ''
        }
    },
    methods: {
        ...mapActions(['login']),

        async fnLogin(){
            if(this.user_id === ''){
                alert('ID를 입력하세요')
                return
            }
            if(this.user_passwd === ''){
                alert('비밀번호를 입력하세요')
                return
            }

            try {
                let loginResult = await this.login({user_id: this.user_id, user_pw: this.user_passwd})
                if(loginResult) alert(this.user_id + '님 안녕하세요' )
            } catch (err) {
                if( err.message.indexOf('Network Error') > -1){
                    alert('서버에 접속할 수 없습니다. 상태를 확인해 주세요.')
                }else{
                    alert('로그인 정보를 확인 할 수 없습니다.')
                }
            }
        }
    },
    computed:{
        ...mapGetters({
            errorState: 'getErrorState'
        })

    }
}
</script>
<style scoped>
#loginForm{
    width: 500px;
    margin: auto;
}
</style>
