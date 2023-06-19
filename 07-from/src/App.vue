<script setup>
import { ref } from "vue";

let text = ref("默认值")
let bool = ref(false)

function submitHandler() {
  console.log(text.value);
}

</script>

<template>
  <h1>表单</h1>
  <hr>
  <form @submit.prevent="submitHandler">
    <div>信息<input type="text" v-model="text"></div>
    <div>是否<input type="checkbox" v-model="bool"></div>
    <div>
      爱好：
      <input type="checkbox" name="hobby" value="足球">
      <input type="checkbox" name="hobby" value="篮球">
      <input type="checkbox" name="hobby" value="羽毛球">
    </div>
    <button>提交</button>
  </form>
</template>

<style></style>