import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './veux/storage.js'
import axios from 'axios'

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App)
app.config.globalProperties.$axios = axios;  //전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있음
app.config.globalProperties.$serverUrl = '//localhost:8081' //api server
app.use(store).use(router).mount('#app')
