<script>

import MyButton from './conponents/MyButton.vue'

    // 可以编写组件的代码
    export default {
        data(){
            return {
                msg: "我超级爱 Vue~"
            }
        },

        components: {
            MyButton
        }
    }
</script>

<template>
    <h1>{{ msg }}</h1>
    <MyButton></MyButton>
</template>