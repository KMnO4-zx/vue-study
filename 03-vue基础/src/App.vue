<script setup>
import { reactive, ref } from 'vue';


const stu = reactive({
  name:'sunwukong'
})

const count = ref(0)  // 生成一个响应式代理

// vue 提供了一个语法糖 使得ref对象在scrip标签中也可以自动解包
// $ 是一个实验性的
function fn(){
  count.value ++
}

</script>

<template>
  <h1>组合式API</h1>
  <h2 @click="fn">{{ count }}</h2>
</template>