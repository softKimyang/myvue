<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
export default {
  name: 'App',
  data(){
    return{
    }
  },
  components: {
    Header,
    Footer
},
  methods:{
  }
}
</script>

<style>
  body{
    margin: 0;
    width: 600px;
  }
  
  .menu{
    background-color: darkslateblue;
    padding: 15px;
    border-radius: 6px;
    margin-bottom: 20px;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .menu a{
    color: white;
    font-size: 1.5em;
    padding: 10px;
  }
  #nav a.router-link-exact-active {
  color: #42b983;
}
</style>
