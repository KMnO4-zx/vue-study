<script setup>
import { ref } from 'vue'

const count = ref(0)
const increment = () => {
    count.value++
}


</script>


<template>
    <h3>componentA -- {{ count }} --
        <button @click="increment">点我一下</button>
    </h3>
</template>