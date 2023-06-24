<script setup>
import { useMealsStore } from './store/meals';
import Meals from './components/Meals/Meals.vue';
import MealsFilter from './components/MealsFilter/MealsFilter.vue';
import CartBar from './components/Cart/cartBar.vue';




const meals = useMealsStore()
console.log(meals.data);

</script>

<template>
  <MealsFilter></MealsFilter>
  <Meals></Meals>
  <CartBar></CartBar>
</template>
  
<style scoped></style>
