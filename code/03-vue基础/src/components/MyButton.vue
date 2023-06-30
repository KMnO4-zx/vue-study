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
    <button @click="count++">点我+1，一共点了{{ count }}次</button>

</template>