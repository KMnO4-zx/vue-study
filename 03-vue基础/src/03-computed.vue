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
      },
      firstName: '武康',
      lastName: '张'
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
    },
    // 只有 getter 的时候可以简写 name(){}
    // name(){
    //   return this.lastName + this.firstName
    // }
    name: {
      get(){
        return this.lastName + this.firstName
      },
      // set() 在计算属性被修改 时调用
      set(value){
        // console.log(value);
        this.lastName = value[0]
        this.firstName = value.slice(1)
      }
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
  <hr>
  <h3>{{ name }}</h3>
</template>