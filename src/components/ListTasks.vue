<template>
  <div>
    <v-list
      v-model:selected="taskSelection"
      lines="three"
      select-strategy="leaf"
    >
      <v-list-subheader>Tasks</v-list-subheader>
      <v-list-item
        v-for="(task, index) in taskStore.tasks"
        :key="index"
        :value="index"
        @click="taskStore.toggleDoneTask(index)"
      >
        <template v-slot:prepend="{}">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
          </v-list-item-action>
        </template>
        <v-list-item-tittle> {{ task.title }} </v-list-item-tittle>
        <v-list-item-subtitle> {{ task.subtitle }} </v-list-item-subtitle>
        <template v-slot:append>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                color="grey-lighten"
                icon="mdi-dots-vertical"
                variant="text"
                v-bind="props"
              ></v-btn>
            </template>
            <v-list>
              <v-list-item value="1" @click="taskStore.toggleEdit(index)">
                <v-list-item-title>Editar</v-list-item-title>
              </v-list-item>
              <v-list-item value="2" @click="taskStore.toggleDelete(index)">
                <v-list-item-title>Deletar</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>
    <Dialog :task="taskStore.tasks[taskStore.indexTaskSelected]" />
    <DialogDelete />
  </div>
</template>

<script setup>
import Dialog from "@/components/dialogs/DialogTaskFields.vue";
import DialogDelete from "@/components/dialogs/DialogDelete.vue";
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();
</script>
