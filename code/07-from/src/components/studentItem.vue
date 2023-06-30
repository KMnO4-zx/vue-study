<script setup>
const props = defineProps(['students'])


</script>

<template>
    <tbody>
        <tr v-for="stu, index in props.students">
            <td>{{ stu.id }}</td>
            <td>{{ stu.name }}</td>
            <td>{{ stu.age }}</td>
            <td>{{ stu.gender }}</td>
            <td>{{ stu.address }}</td>
            <td>
                <a href="#" @click.prevent="delStuHandler(index)">删除</a>
            </td>
        </tr>
    </tbody>
</template>

<style scoped>
th,
td {
    border: 1px solid black;
    font-size: 24px;
}
</style>