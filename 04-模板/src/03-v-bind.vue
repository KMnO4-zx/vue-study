<script setup>
import { ref } from 'vue';

const imgPath = ref("/images/messi.png")
const chageImg = () => {
  imgPath.value = "/images/neymar.png"
}
const attrs = {
  id: 'box1',
  class: 'hello'
}
const isDisabled = false
</script>

<template>
  <!-- 
        当我们需要为标签动态的设置属性时，需要使用v-bind指令 
          v-bind 可以简写为:
       -->


  <button @click="chageImg">切换图片</button>
  <img :src="imgPath" alt="梅西">
  <div :="attrs"></div>
  <input type="text" :disabled="isDisabled">
</template>

