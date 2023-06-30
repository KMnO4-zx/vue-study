<script>
    export default {
        data(){
            return {
                count:0
            }
        }
    }
</script>

<template>
    <button @click="count++">点我+1</button>   
    <span>一共点了{{ count }}次</span>
</template>