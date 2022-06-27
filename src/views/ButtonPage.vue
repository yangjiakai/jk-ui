<template>
  <h1>Button Page</h1>
  <div class="display-area">
    <jk-button
      size="lg"
      dark
      type="error"
      appendIcon="carbon:accessibility"
      preIcon="eos-icons:three-dots-loading"
      >按钮1</jk-button
    >
    <jk-button color="#0091ea" size="lg" dark text>按钮2</jk-button>
    <jk-button rounded type="info" dark>
      <Icon icon="eos-icons:bubble-loading"
    /></jk-button>
    <jk-button dark type="info" :loading="isLoading" @click="download"
      >加载按钮</jk-button
    >
  </div>
</template>
<script setup>
import jkButton from "@/components/Button/index.vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

let isLoading = ref(false);
const download = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
};
</script>
