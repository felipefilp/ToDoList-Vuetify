<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="taskStore.showDialogTaskFields"
      min-width="400"
      max-width="600"
      persistent
    >
      <v-card>
        <v-card-title> Edit Task </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="taskDuplicated.title"
            clearable
            label="Title"
          ></v-text-field>
          <v-text-field
            v-model="taskDuplicated.subtitle"
            clearable
            label="Subtitle"
          ></v-text-field>
        </v-card-text>
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn variant="outlined" color="red" @click="CancelarOnClick">
            Cancelar
          </v-btn>

          <v-btn
            color="primary-darken-1"
            variant="elevated"
            @click="SalvarOnClick"
          >
            Salvar
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();

const taskDuplicated = ref({
  title: "",
  subtitle: "",
});

const props = defineProps({
  task: Object,
});

watch((newVal) => {
  if (newVal) {
    taskDuplicated.value = {
      title: props.task?.title || "",
      subtitle: props.task?.subtitle || "",
    };
  }
});

const SalvarOnClick = () => {
  props.task.title = taskDuplicated.value.title;
  props.task.subtitle = taskDuplicated.value.subtitle;
  taskStore.updateTask();
};

const CancelarOnClick = () => {
  taskDuplicated.value = {
    title: "",
    subtitle: "",
  };
  taskStore.toggleEdit();
};
</script>
