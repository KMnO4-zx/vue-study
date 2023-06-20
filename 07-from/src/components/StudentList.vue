<script setup>
import studentItem from './studentItem.vue';

const props = defineProps(['students'])
const emits = defineEmits(["delStu"])


const delStuHandler = (index) => {
    if (confirm("该操作不可恢复！")) {
        // props.students.splice(index, 1)
        emits('delStu', index)
    }
}


</script>

<template>
    <table>
        <caption>学生列表</caption>
        <thead>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
                <th>住址</th>
                <th>删除</th>
            </tr>
        </thead>
        <studentItem :students="props.students"></studentItem>
    </table>
</template>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
}

caption {
    font-size: 30px;
    font-weight: bold;
}
</style>