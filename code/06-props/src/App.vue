<script setup>
import { ref } from "vue";
import A from './components/A.vue'
import C from './components/C.vue'

const isShow = ref(true)

</script>

<template>
  <h1>属性的透传</h1>
  <h2 class="box1">我是h2</h2>
  <C class="box2"></C>
</template>