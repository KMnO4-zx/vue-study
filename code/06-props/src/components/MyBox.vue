<script setup>

const props = defineProps(["count"])

console.log(props);
</script>


<template>
    <div>
        <h2>我是子组件 MyBox {{ props.count }}</h2>
        <button @click="props.count++">mb按钮</button>
        <hr>
    </div>
</template>

<style scoped>
div {
    color: tomato;
}
</style>