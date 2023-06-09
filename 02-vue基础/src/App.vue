<script>
  export default {
    // data是一个函数（方法）
    // 在data中，this就是组件实例，和main.js中的vm是一回事
    // 使用vue的时候减少箭头函数
    data(){
      // console.log(this)
      this.name = "孙悟空"

      return {
        msg:'我爱vue'
      }
    }
  }

</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ name }}</h2>
</template>