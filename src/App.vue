<script setup>
import { ref } from "vue";
import CommonHeader from "@/components/CommonHeader.vue";

// let counter = ref(0);

// setInterval(() => {
//   counter.value++;
// }, 1000);
</script>

<template>
  <div class="app">
    <header class="bg-transparent shadow" v-if="$route.meta.title">
      <CommonHeader></CommonHeader>
    </header>
    <main class="main container mx-auto w-4/5 p-5">
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
