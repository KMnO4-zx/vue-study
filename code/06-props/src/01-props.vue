<script setup>
import { ref } from "vue";
import MyBox from './components/MyBox.vue';

const count = ref(0)

</script>

<template>
  <h1>爷是根组件 App</h1>
  <MyBox :count="count"></MyBox>
  <button @click="count++">点我一下</button>
</template>