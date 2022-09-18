<template>
    <div class="black-bg" @close.self="$emit('close')">
        <div class="white-bg">
            <h4>상세페이지 {{clicked}}</h4>
            <p>제목: {{onerooms[clicked].title}}</p>
            <p>내용: {{onerooms[clicked].content}}</p>
            <button @click="$emit('close')">닫기</button> 
        </div>
    </div>
</template>
<script>
export default{
    name: 'ModalView',
    props: {
        onerooms: Array,
        clicked: Number,
        modal: Boolean
    }
}
</script>

<style>
div{
  box-sizing: border-box;
}
.black-bg{
  width: 512px; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed; padding: 20px;
}
.white-bg{
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>