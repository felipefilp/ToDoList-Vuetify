// Utilities
import { defineStore } from "pinia";
import { useRules } from "vuetify/labs/rules";
import { useAlertStore } from '@/stores/alert'

export const useTaskStore = defineStore("task", {
    state: () => ({
        tasks: [],
        titleTaskCreating: "",
        showDialogDelete: false,
        indexTaskSelected: 0,
        showDialogTaskFields: false,
        rules: useRules()
    }),
    actions: {
        addTask() {
            const alertStore = useAlertStore();
            if (this.rules.minLength(5)) {
                this.tasks.push({
                    title: this.titleTaskCreating,
                    done: false
                });
                this.titleTaskCreating = "";
                this.saveLocalData();
                alertStore.notifyAlertCreated();
            }

        },
        toggleDelete(index) {
            this.showDialogDelete = !this.showDialogDelete;
            if (index != null) {
                this.indexTaskSelected = index;
            }
        },
        deleteTask() {
            const alertStore = useAlertStore();
            this.tasks.splice(this.indexTaskSelected, 1);
            this.toggleDelete();
            this.saveLocalData();
            alertStore.notifyAlertDeleted();
        },
        toggleEdit(index) {
            this.showDialogTaskFields = !this.showDialogTaskFields;
            if (index != null) {
                this.indexTaskSelected = index;
            }
        },
        saveLocalData() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        updateTask() {
            const alertStore = useAlertStore();
            this.saveLocalData();
            this.toggleEdit();
            alertStore.notifyAlertUpdated();
        },
        getTasks() {
            let items = localStorage.getItem('tasks')
            if (items)
                this.tasks = JSON.parse(items);
        },
        toggleDoneTask(index) {
            this.tasks[index].done = !this.tasks[index].done
            this.saveLocalData();
        }
    },
});
