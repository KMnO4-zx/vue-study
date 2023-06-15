<script setup>
import { computed } from "vue";

const props = defineProps(["src", "alt", "rate"])



/**
    第一名颜色：#FD2C4A
    第二名颜色：#F46506
    第三名颜色：#F5AA00
 */

const color = computed(() => {
    if (props.rate == 1){
        return '#FD2C4A'
    }else if (props.rate == 2){
        return '#F46506'
    }else{
        return '#F5AA00'
    }
})

</script>

<template>
    <div class="photo">
        <img :src="props.src" :alt="props.alt">
        <span>{{ props.rate }}</span>
    </div>
</template>

<style scoped>
.photo {
    width: 150px;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border-radius: 20px;
}

.photo img {
    width: 100%;
    vertical-align: bottom;
}

.photo span {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    background-color: v-bind(color);
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 20px;
}
</style>