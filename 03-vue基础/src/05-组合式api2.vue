<script setup>
import { reactive } from 'vue';
const msg = '我爱vue'
const count = 0

const stu = reactive({
  name:'sunwukong'
})

function fn() {
  alert("happy hahahaahah")
}
</script>

<template>
  <h1 @click="fn">组合式API</h1>
  <h2>{{ msg }} -- {{ count }}</h2>
  <h2>{{ stu.name }}</h2>
</template>