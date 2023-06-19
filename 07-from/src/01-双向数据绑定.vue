<script setup>
import { ref } from "vue";

let text = ref("默认值")

function submitHandler() {
  console.log(text.value);
}

</script>

<template>
  <h1>表单</h1>
  <hr>
  <form @submit.prevent="submitHandler">
    <div>
      <input type="text" @input="(event) => (text = event.target.value)" :value="text">
    </div>
    <div>
      <input type="text" @input="(event) => (text = event.target.value)" :value="text">
    </div>
    <button>提交</button>
  </form>
</template>

<style></style>