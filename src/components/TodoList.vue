<template>
  <v-text-field
    clearable
    label="Add Task"
    variant="underlined"
    :rules="[
      taskStore.rules.minLength(
        5,
        'You must enter Task title with more then 5 characters.',
      ),
    ]"
    v-model="taskStore.titleTaskCreating"
    @keyup.enter="taskStore.addTask"
  ></v-text-field>
  <ListTasks />
</template>

<script setup>
import { onMounted } from "vue";
import ListTasks from "./ListTasks.vue";
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();
onMounted(() => {
  taskStore.getTasks();
});
</script>
