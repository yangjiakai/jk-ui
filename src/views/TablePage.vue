<template>
  <h1>Table Page</h1>
  <div class="display-area">
    <jk-button
      size="lg"
      dark
      type="error"
      appendIcon="carbon:accessibility"
      preIcon="eos-icons:three-dots-loading"
      >按钮1</jk-button
    >
  </div>
  <hr />

  <div class="display-area">
    <jk-table></jk-table>
  </div>
</template>
<script setup>
import jkButton from "@/components/Button/index.vue";
import jkTable from "@/components/Table/index.vue";
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
