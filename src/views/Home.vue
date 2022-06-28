<script setup>
import ButtonRepo from "@/components/ButtonRepo.vue";
import Model from "../components/Modal/index.vue";
import jkButton from "@/components/Button/index.vue";
import { ref } from "vue";

let num = ref(0);

let isVisible = ref(false);
const changeVisible = () => {
  isVisible.value = !isVisible.value;
  console.log(!isVisible.value);
};

// 切换modal
let isShow = ref(true);
const changeShow = () => {
  isShow.value = !isShow.value;
  console.log(!isShow);
};

const closeModal = () => {
  isShow.value = false;
};

let isShow1 = ref(false);

const onOk1 = () => {
  value1.value = "修正value1";
  isShow1.value = false;
};

let value1 = ref("初始value1");

const onCancel1 = () => {
  isShow1.value = false;
};

let isShow2 = ref(false);

const onOk2 = () => {
  value2.value = "修正value2";
  isShow2.value = false;
};

const onCancel2 = () => {
  isShow2.value = false;
};

let value2 = ref("初始value2");
</script>

<template>
  <div class="home-page">
    <!-- 控制区域 -->
    <h1>Modal切换区域</h1>
    <div class="control-area">
      <jk-button @click="isShow1 = true" size="lg" dark type="info"
        >切换modal1</jk-button
      >
      <jk-button @click="isShow2 = true" size="lg" dark type="info"
        >切换modal2</jk-button
      >
    </div>
    <hr />
    <!-- 显示区域 -->

    <div class="display-area">
      <Model :isShow="isShow1" :onOk="onOk1" :onCancel="onCancel1">
        <input type="text" v-model="value1" />
        <p></p>
      </Model>
      <Model :isShow="isShow2" :onOk="onOk2" :onCancel="onCancel2">
        <input type="text" v-model="value2" />
      </Model>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  padding: 5rem;
  background-color: #fff;
  h1 {
    color: #333;
  }
  .control-area {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5rem;
  }

  .display-area {
    padding: 5rem;
    .modal-area {
      z-index: 999;
      background: linear-gradient(135deg, #5b247a, #1bcedf);
      height: 300px;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
        rgba(0, 0, 0, 0.24) 0px 1px 2px;
      h1 {
        padding: 5rem;
        text-align: center;
      }
    }
  }
}
</style>
