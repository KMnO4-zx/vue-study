<script setup>
import { ref } from "vue";

const emits = defineEmits(['addStudent'])

const props = defineProps(['newStu'])
const newStu = ref({
    name: '',
    age: 1,
    gender: '男',
    address: ''
})

const submitHandler = () => {
    emits("addStudent", { ...newStu.value })

    // newStu.value.name = ''
    // newStu.value.age = 1
    // newStu.value.address = ''
    // newStu.value.gender = '男'
}

</script>

<template>
    <form @submit.prevent="submitHandler">
        <div>姓名<input type="text" v-model="newStu.name"></div>
        <div>年龄<input type="number" min="1" v-model="newStu.age"></div>
        <div>性别
            <input v-model="newStu.gender" type="radio" name="gender" value="男"> 男
            <input v-model="newStu.gender" type="radio" name="gender" value="女"> 女
        </div>
        <div>地址<input type="text" v-model="newStu.address"></div>
        <div><button>添加</button></div>
    </form>
</template>