<template>
  <div class="alert-notification">
    <v-alert
      class="animate__animated animate__bounceInRight"
      :text="alertStore.text"
      closable
      :type="alertStore.type"
    ></v-alert>
  </div>
</template>

<script setup>
import "animate.css";
import { useAlertStore } from "@/stores/alert";
const alertStore = useAlertStore();
</script>

<style scoped>
.alert-notification {
  position: fixed;
  z-index: 1;
  bottom: 20px;
  right: 5px;
  width: 100%;
  padding: 0 0% 0 70%;
}
</style>
