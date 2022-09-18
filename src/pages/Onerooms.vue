<template>
    <ModalView v-if="modal" @close="closeModal" :onerooms="onerooms" :clicked="clicked"/>
    <!-- <div class="menu">
      <a v-for="menu in menus" :key="menu">{{menu}}</a>
    </div> -->
    <div v-for="(product, i ) in onerooms" :key="i">
      <img class="room-image" :src="product.image" />
      <h4 @click="openModal(i)">{{product.title}}</h4>
      <p>{{product.price}} 원</p>
      <button @click="onIncrease(i)">허위매물신고</button> <span>신고수: {{product.counter}}</span>
    </div>
  </template>
  
  <script>
    import data from '../assets/onerooms.js';
    import ModalView from './ModalView.vue';
  export default {
    name: 'App',
    data(){
      return{
        // menus: [ 'Home', 'Products', 'About'],
        modal: false,
        onerooms: data,
        clicked: 0
      }
    },
    components: {
      ModalView
  },
    methods:{
      onIncrease(i){
        this.onerooms[i].counter++;
      },
      openModal(i){
        this.modal = true;
        this.clicked = i;
        console.log(this.clicked , ' clicked..');
      },
      closeModal(){
        this.modal = false;
        this.clicked = 0;
      }
    }
  }
  </script>
  
  <style>
  
  .room-image{
    width: 100%;
    margin-top: 40px;
  }
  </style>
  