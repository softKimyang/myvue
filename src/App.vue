<template>
  <div class="menu">
    <router-link to="/">Home</router-link>
    <router-link to="/onerooms">Onerooms</router-link>
    <router-link to="/vuexTest">Vuex Test</router-link>
    <router-link to="/about">About</router-link>
    <!-- <router-link to="/notFound">NotFound</router-link> -->
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  },
  components: {
},
  methods:{
  }
}
</script>

<style>
  body{
    margin: 0;
    width: 512px;
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
</style>
