<script setup>
import { useMealsStore } from '@/store/meals';
import Meal from './Meal.vue'

// 加载sotre中的数据
const meals = useMealsStore()

</script>

<template>
    <!-- 所有的汉堡容器 -->
    <div class="meals">
        <Meal v-for="item in  meals.filterMeals" :meal="item"></Meal>
        <template v-if="meals.filterMeals.length == 0">
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