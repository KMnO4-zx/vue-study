<script setup>
import { ref } from 'vue';
import { useMealsStore } from '../../store/meals';

const count = ref(0)

const meals = useMealsStore()
const props = defineProps(["meals"])

</script>

<template>
    <div class="counter">
        <template v-if="props.meals.count > 0">
            <button class="sub" @click="meals.subMealFormCart(props.meals)"><i class="ri-subtract-line"></i></button>
            <span class="count">{{ props.meals.count }}</span>
        </template>

        <button class="add" @click="meals.addMealToCart(props.meals)"><i class="ri-add-line"></i></button>
    </div>
</template>

<style scoped>
.counter {
    display: flex;
    align-items: center;
}

.sub,
.add {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34rem;
    height: 34rem;
    background-color: #F5BC00ed;
    border: none;
    border-radius: 50%;
    font-size: 34rem;
    /* font-weight: bold; */
}

.sub {
    background-color: #fff;
    border: 1px solid #000;
}

.count {
    font-size: 30rem;
    margin: 0 10rem;
}
</style>