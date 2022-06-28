<script setup>
import jkNavbar from "@/components/Navbar/index.vue";
import logoUrl from "@/assets/images/common/logoCt.svg";
import { navList } from "@/utils/data";
</script>

<template>
  <jk-navbar sticky :navList="navList" :logoUrl="logoUrl"> </jk-navbar>
</template>

<style lang="scss" scoped></style>
