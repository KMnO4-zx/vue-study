<script setup>
import { ref } from "vue";
import A from './components/A.vue'
import B from './components/B.vue'

const isShow = ref(true)

</script>

<template>
  <button @click="isShow = !isShow">isShow</button>
  <!-- component 动态组件 -->
  <component :is="isShow ? A : B">components</component>
</template>