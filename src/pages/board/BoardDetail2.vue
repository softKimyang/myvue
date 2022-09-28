<template lang="">
    <div class="board-detail">
        <div class="board-contents">
            <h3>제목 : {{title}}</h3>
            <div v-bind:style="{textAlign: 'right'}">
                <strong class="w3-large">{{author}}</strong>
                <span v-bind:style="{margin: '10px'}">( {{created_at}} )</span>
            </div>
        </div>
        <div class="board-contents">
            <span>내용 : {{contents}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        showDetail: Boolean
    },
    data(){
        return{
            reqestBody: this.$route.query,
            idx: this.$route.query.idx,
            

            title: '',
            author: '',
            created_at: '',
            contents: ''
        }
    },
    mounted(){
        this.fnGetView()
    },
    methods:{
        fnGetView(){
            // axios.get /board/idx
            // set data
            // catch error
            this.$axios.get(this.$serverUrl + '/board/' + this.idx, {
                params: this.requestBody
            }).then((res) =>{
                console.log(res.data)
                this.title = res.data.title
                this.author = res.data.author
                this.contents = res.data.contents
                this.created_at = res.data.created_at
            }).catch((err) => {
                if(err.message.indexOf('Network Error') > -1){
                    alert('네트워크 에러')
                }else{
                    console.log(err.message);
                }
            })
        },
    }
}
</script>
<style lang="">
</style>