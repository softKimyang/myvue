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
export default {
    data(){
        return{
            user_id: '',
            user_passwd: ''
        }
    },
    methods: {

        async fnLogin(){
            if(this.user_id === ''){
                alert('ID를 입력하세요')
                return
            }
            if(this.user_passwd === ''){
                alert('비밀번호를 입력하세요')
                return
            }
           alert(this.user_id + '님 안녕하세요' )

           
        }
    },
    computed:{
       

    }
}
</script>
<style scoped>
#loginForm{
    width: 500px;
    margin: auto;
}
</style>
