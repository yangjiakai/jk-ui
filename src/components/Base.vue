<script setup>
import { reactive, toRefs } from "vue";

const data = reactive({
  reactiveValue: "A",
});

// const refValue = ref(0);
// const { reactiveValue } = toRefs(data);
</script>

<template>
  <div class="jk-component"></div>
</template>

<style scoped></style>
