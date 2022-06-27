<script setup>
import { defineProps, computed, watch } from "vue";
import { Icon } from "@iconify/vue";

// 计算属性 --------
const isDisable = computed(() => props.disabled);

const className = computed(() => {
  return [
    {
      "is-outlined": props.outlined,
      "is-plain": props.plain,
      "is-round": props.rounded,
      "is-dark": props.dark,
      "is-tile": props.tile,
      "is-depressed": props.depressed,
      "is-text": props.text,
      "is-block": props.block,
    },
    props.size && `jk-button-${props.size}`,
    props.type && `jk-button-${props.type}`,
  ];
});

// 组件传值属性--------
const props = defineProps({
  // 主题色
  color: {
    type: String,
    default: "",
  },
  // 尺寸
  size: {
    type: String,
    default: "md",
    validator: (value) => ["lg", "md", "sm"].includes(value),
  },
  // 类型
  type: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["error", "success", "warning", "info", "primary"].includes(value),
  },

  // 不可点击
  disabled: Boolean,
  // 镂空 outlined：显示边框，不显示背景色
  outlined: Boolean,
  // 平铺 tile：不显示圆角
  tile: Boolean,
  // 低陷 depressed：不显示海拔（无阴影）
  depressed: Boolean,
  // 圆角 rounded：圆角 50
  rounded: Boolean,
  // 色彩 dark：字体为白色
  dark: Boolean,
  // 文本 text：默认不显示背景色和边框
  text: Boolean,
  // 图标 icon：
  icon: String,
  // 块级 block：
  block: Boolean,
  // 加载中状态
  loading: Boolean,
  preIcon: String,
  appendIcon: String,
});

watch(
  () => props.outlined,
  (newVal) => {
    alert(newVal);
  }
);
</script>

<template>
  <button v-if="loading" class="jk-button" :class="className" disabled>
    Loading
    <Icon class="ml-2" icon="eos-icons:bubble-loading" />
  </button>
  <button v-else class="jk-button" :class="className" :disabled="isDisable">
    <Icon v-if="preIcon" class="pre-icon mr-2" :icon="preIcon" />
    <slot></slot>
    <Icon v-if="appendIcon" class="append-icon ml-2" :icon="appendIcon" />
  </button>
</template>

<style lang="scss" scoped>
$color: v-bind(color);
$error: #ef476f;
$info: #2196f3;
$success: #06d6a0;
$primary: #3271ae;
$warning: #ffd166;
.jk-button {
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  background-color: $color;
  padding: 7px 15px;
  border-radius: 2px;
  font-size: 12px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  transition-duration: 0.3s;
  &:active {
    opacity: 0.8;
    transition-duration: 0.3s;
  }

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  // type

  &.jk-button-primary {
    background-color: $primary;
  }

  &.jk-button-info {
    background-color: $info;
  }

  &.jk-button-success {
    background-color: $success;
  }

  &.jk-button-error {
    background-color: $error;
  }

  &.jk-button-waring {
    background-color: $warning;
  }

  // 尺寸
  &.jk-button-md {
    padding: 7px 15px;
  }

  &.jk-button-lg {
    padding: 8px 33px;
    font-size: 14px;
  }

  &.jk-button-sm {
    padding: 3px 10px;
    font-size: 12px;
  }

  // 不可点击 Disabled
  &:disabled {
    box-shadow: none;
    opacity: 0.5;
    cursor: not-allowed;

    &:hover,
    &:focus,
    &:active {
      transform: none;
      box-shadow: none;
      opacity: 0.5;
    }
  }

  // 镂空 outlined：显示边框，不显示背景色

  &.is-outlined {
    background-color: transparent;
    border: 1px solid $color;
  }

  // 平铺 tile：不显示圆角
  &.is-tile {
    border-radius: 0;
  }

  // 低陷 depressed：不显示海拔（无阴影）
  &.is-depressed {
    box-shadow: none;
  }
  // 圆角 rounded：圆角 50
  &.is-round {
    border-radius: 50%;
    padding: 8px;
  }
  // 色彩 dark：字体为白色
  &.is-dark {
    color: #fff;
  }
  // 文本 text：默认不显示背景色和边框
  &.is-text {
    color: $color;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    background-color: transparent;
    &:hover {
      background-color: $color;
      color: #fff;
    }
  }
  // 块级 block：
  &.is-block {
    display: block;
    width: 100%;
  }

  // 加载中状态 loading
}
</style>
