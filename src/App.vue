<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Default from "@/layouts/Default.vue";

const route = useRoute();

const layout = computed(() => route.meta.layout || Default);
</script>
