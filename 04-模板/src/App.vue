<script setup>
import { ref, computed } from "vue";

const msg = 'hello vue 111'



</script>

<template>

<!-- 
    在模板中，可以直接访问到组件中声明的变量
 -->
  <h1>{{ msg }}</h1>
  <h1>{{ hello }}</h1>
</template>

