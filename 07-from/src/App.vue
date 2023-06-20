<script setup>
import StudentList from './components/StudentList.vue';
import studensForm from './components/studensForm.vue';
import { ref } from "vue";

const STU_ARY = ref([
  {
    id: 1,
    name: "孙悟空",
    age: 18,
    gender: "男",
    address: "花果山"
  },
  {
    id: 2,
    name: "猪八戒",
    age: 18,
    gender: "男",
    address: "高老庄"
  },
  {
    id: 3,
    name: "沙和尚",
    age: 18,
    gender: "男",
    address: "流沙河"
  },
  {
    id: 4,
    name: "唐僧",
    age: 16,
    gender: "男",
    address: "女儿国"
  }
])

const delStudentByIndex = (index) => {
  if (confirm("请确认删除！")) {
    STU_ARY.value.splice(index, 1)
  }
}

const addNewStudent = (student) => {
  const lastId = STU_ARY.value.at(-1)?.id
  const newId = typeof lastId === 'number' ? lastId + 1 : 1
  student.id = newId
  STU_ARY.value.push(student)
}

</script>

<template>
  <StudentList :students="STU_ARY" @delStu="delStudentByIndex"></StudentList>
  <hr>
  <studensForm @addStudent="addNewStudent"></studensForm>
</template>

<style scoped></style>