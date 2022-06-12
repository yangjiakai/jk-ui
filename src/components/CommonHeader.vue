<script setup>
import { reactive, toRefs } from "vue";

const data = reactive({
  navList: [
    {
      link: "/home",
      name: "home",
    },
    {
      link: "/about",
      name: "about",
    },
    {
      link: "/buttonPage",
      name: "buttonPage",
    },
  ],
});

const { navList } = toRefs(data);
</script>

<template>
  <div class="mx-auto flex h-40 w-4/5 flex-row">
    <router-link
      to="/"
      class="inline-flex basis-1/6 items-center justify-center rounded-md border border-transparent px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
    >
      <img
        src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg"
        alt=""
      />
    </router-link>
    <div class="inline-flex basis-4/6 items-center justify-around">
      <router-link
        v-for="(item, idx) in navList"
        :key="idx"
        :to="item.link"
        class="m-1 inline-flex items-center justify-center border border-transparent p-1 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:text-blue-400 focus:outline-none"
        >{{ item.name }}</router-link
      >
    </div>
    <div
      class="inline-flex basis-1/6 items-center justify-center text-slate-50"
    >
      <button class="border-2 border-red-400 py-2 px-4">试用</button>
    </div>
  </div>
  <!-- <div class="header flex flex-row">
    <div class="logo-area basis-1/4"></div>
    <ul class="nav">
      <li class=""></li>
    </ul>
  </div> -->
</template>

<style scoped></style>
