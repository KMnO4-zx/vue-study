<script setup>
import { computed } from "vue";

const props = defineProps(["hot", "maxHot"])

const width = computed(() => {
    if (props.hot / props.maxHot * 100 <= 100) {
        return props.hot / props.maxHot * 100 + "%"
    }else{
        return "100%"
    }

})

</script>


<template>
    <div class="hot-bar">
        <div class="inner">{{ props.hot }}热度</div>
    </div>
</template>

<style scoped>
.hot-bar {
    background-color: #032666;
    border-radius: 20px;
    text-indent: 0.5em;
}

.inner {
    border-radius: 20px;
    background-image: linear-gradient(90deg, #B90334 50%, #4D0211);
    white-space: nowrap;
    width: v-bind(width);
}
</style>