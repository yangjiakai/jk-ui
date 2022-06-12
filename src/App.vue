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
    <main class="main mx-auto h-full w-4/5 p-5">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app {
  color: aliceblue;
  height: 100vh;
  background-image: linear-gradient(252.99deg, #4e6092 2.59%, #1e2338 98.72%);
}
</style>
