<script>
import MyButton from './components/MyButton.vue'
import { shallowReactive } from 'vue'

export default {
  data() {
    return {
      stu: {
        name: '不要葱姜蒜',
        age: 18,
        gender: '男'
      }
    }
  },

  methods: {
    getInfo() {
      return this.stu.age >= 18 ? '你是一个成年人.' : '你是一个未成年.'
    }
  },

  /* 
    computed 用来指定计算属性
    {
      属性名：getter
    }
    计算属性，只会在其依赖的数据发生变化时 才会重新执行
  */
  computed: {
    // info: function(){
    //   return '哈哈'
    // }
    info() {
      return this.stu.age >= 18 ? '你是一个成年人!!!' : '你是一个未成年!!!!'
    }
  }

}

</script>

<template>
  <h1>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h1>
  <h2>评语：{{ (stu.age >= 18 ? '你是一个成年人' : '你是一个未成年') }}</h2>
  <button @click="stu.age++">点我长大</button>
  <button @click="stu.age--">点我变小</button>
  <hr>
  <h3>{{ info }}</h3>
  <h3>{{ getInfo() }}</h3>
</template>