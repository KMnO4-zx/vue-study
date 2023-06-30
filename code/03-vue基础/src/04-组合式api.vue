<script>
import { reactive} from 'vue'
export default {
  // 走子函数 可以用过setup函数向外暴露组件的配置
  setup() {
    // 定义变量
    let msg = '今天天气真不错'
    let count = 0
    // reactive 可以变成响应式对象
    const stu = reactive({
      name:'name',
      age:19,
      gender:'man'
    })

    function chageAge(){
      stu.age = 66
    }

    // 在的setup中可以通过return来指定哪些内容要暴露给外部
    return {
      msg, count, stu, chageAge
    }
  }
}

</script>

<template>
  <h1>组合式API</h1>
  <h2>{{ msg }}</h2>
  <h2>{{ count }}</h2>
  <hr>
  <h3>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h3>
  <button @click="chageAge">click</button>
</template>