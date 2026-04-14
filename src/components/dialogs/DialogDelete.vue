<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="taskStore.showDialogDelete"
      min-width="400"
      max-width="600"
      persistent
    >
      <v-card>
        <v-card-title>
          Are you sure you want to delete this task?
        </v-card-title>
        <v-card-text> This action can't be reverted... </v-card-text>
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn
            variant="elevated"
            color="red"
            @click="taskStore.toggleDelete()"
          >
            No
          </v-btn>

          <v-btn
            variant="outlined"
            color="green"
            @click="taskStore.deleteTask()"
          >
            Yes
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();
</script>
