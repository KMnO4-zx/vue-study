<script setup>
import { ref } from "vue";

const isShow = ref(true)

</script>

<template>
  <h1>爷是根组件 App</h1>
  <button @click="isShow = !isShow">切换</button>
  <div v-show="isShow">
    <h2>你猜我会显示不</h2>
  </div>
</template>