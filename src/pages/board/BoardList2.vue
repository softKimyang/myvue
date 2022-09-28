<template lang="">
    <div class="board-list">
        <div class="common-buttons">
            <button class="w3-button w3-round w3-blue-gray" @click="fnWrite">등록</button>
        </div>
        <table class="w3-table-all">
            <thead>
                <tr>
                    <th>No</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>등록일시</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody v-for="(row, idx) in list" :key="idx">
                <tr >
                    <td >{{row.idx}}</td>
                    <td ><a v-on:click="fnView(`${idx}`)">{{row.title}}</a></td>
                    <td>{{row.author}}</td>
                    <td>{{row.created_at}}</td>
                    <td>
                        <button @click="fnUpdate(`${row.idx}`)">수정</button>
                        <button @click="fnDelete(`${row.idx}`)">삭제</button>
                    </td>
                </tr>
                <tr ref="detail"  :style="{display:'none'}">
                    <td colspan="4"> {{row.contents}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            requestBody: this.$route.query, //리스트 페이지 전송
            list: {},
            no: '',
            page: 0,
            size: 0,
        }
    },
    mounted(){
        this.fnGetList()
    },
    components:{
    },
    methods: {
        fnGetList(){
            console.log('fnGetList 리스트', this.$route);
            this.$axios.get(this.$serverUrl + '/board/list', {
                params: {},
                headers: {}
            }).then((res) => {
                this.list = res.data               
            }).catch((err) => {
                if(err.message.indexOf('Network Error') > -1){
                    alert('네트워크가 원활하기 않습니다.\n잠시후 다시 시도해주세요')
                }else{
                    console.log(err.message);
                }
            })
        },
        fnView(i){
            console.log('before /////  ', this.$refs.detail[i].getAttribute('style') );
            if(this.$refs.detail[i].getAttribute('style') === 'display: block;'){
                console.log(this.$refs.detail[i].getAttribute('showDetail'), ', ',  i)
                
                this.$refs.detail[i].setAttribute('style', 'display: none;');
            }
            else{
                console.log(this.$refs.detail[i].getAttribute('showDetail'), ' >>> ',  i)
                this.$refs.detail[i].setAttribute('style', 'display: block;');
            }
            
            console.log('/////  ', this.$refs.detail[i].getAttribute('style') );
            
             //this.requestBody.idx = idx
            // this.$router.push({
            //     path: './detail',
            //     query: this.requestBody
            // })
        },
        fnWrite(){
            console.log('fnWrite 등록');
            this.$router.push({
                path: './write',                
            })
        },
        fnDelete(idx){
            if(!confirm('삭제하시겠습니까?')) return;
            const url = this.$serverUrl + '/board/' + idx
            console.log('url ' + url);
            // this.$axios.delete(this.$serverUrl + '/board/' + this.idx, {})
            this.$axios.delete(url, {})
            .then(() => {
                alert('삭제되었습니다.');
                this.fnGetList();
            }).catch((err) => {
                console.log(err);
            })
        },
        fnUpdate(idx) {
            this.requestBody.idx = idx
        this.$router.push({
          path: './write',
          query: this.requestBody
        })
      },
        
    }
}
</script>
<style lang="">
    
</style>