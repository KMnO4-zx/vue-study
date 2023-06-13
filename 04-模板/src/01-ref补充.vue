<script setup>
import { ref, computed } from "vue";

const msg = ref('hello vue')



</script>

<template>
  <h1 @click="msg='hahaha'">{{ msg }}</h1>
</template>

