<script>
import MyButton from './components/MyButton.vue'
import { shallowReactive } from 'vue'

export default {
  data() {
    return {
      msg: '今天天气真不错'
    }
  },

  // methods 用来指定实例对象中的方法
  //    - 他是一个对象，可以在它里面你定义多个方法
  //    - 这些方法最终会被挂载到组件实例上
  //    - 可以直接在组件实例中调用这些方法
  methods: {
    test() {
      alert("123")
    },
    hello() {
      console.log('hahaha');
    },
    sum(a, b){
      return a + b
    },
    chageMsg(){
      this.msg = '新的消息！'
    }
  }
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ sum(3, 9) }}</h2>
  <button @click="chageMsg">哈啊哈哈</button>
</template>