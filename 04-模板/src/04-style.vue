<script setup>
  import MyBox from './components/MyBox.vue'
</script>

<template>
  <h1>今天天气真不错~~</h1>
  <div class="box1">app中的box</div>
  <MyBox></MyBox>
</template>

<!-- 
  可以直接在style标签写样式
  通过style写样式 是全局样式
-->
<style scoped>
  h1 {
    background-color: #bfa;
  }
  .box1 {
    width: 200px;
    height: 200px;
    background-color: yellowgreen;
    margin: 10px
  }
</style>
