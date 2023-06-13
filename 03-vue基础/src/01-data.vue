<script>
import MyButton from './components/MyButton.vue'
import {shallowReactive} from 'vue'

export default {
  data() {
    // data 返回的对象 最终会被 vue 代理
    // return {
    //   msg: "今天天气不错",
    //   stu: {
    //     name:"不要葱姜蒜",
    //     age:"18",
    //     gender:'man'
    //   }
    // }

    return shallowReactive({
      msg: "今天天气不错",
      stu: {
        name:"不要葱姜蒜",
        age:"1",
        gender:'man'
      }
    })
  },
  
  components: {
    MyButton: MyButton
  }
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h2>
  <hr>
  <MyButton></MyButton>

</template>