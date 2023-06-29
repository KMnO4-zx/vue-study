<script setup>

import Meal from './Meal.vue'


const props = defineProps(['meals'])


</script>

<template>
    <!-- 所有的汉堡容器 -->
    <div class="meals">
        <Meal :desc="$attrs.desc" v-for="item in props.meals" :meal="item"></Meal>
        <template v-if="!props.meals || props.meals.length == 0">
            <h2>没有找到相关商品</h2>
        </template>
    </div>
</template>

<style scoped>
.meals {
    height: calc(100vh - 120rem);
    /* padding: 120rem 0; */
    /* background-color: #bfa; */
    padding-bottom: 160rem;
    overflow: auto;
}
</style>