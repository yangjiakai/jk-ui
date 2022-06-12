<script setup>
import { ref, reactive, toRefs, defineProps, computed } from "vue";

const data = reactive({
  reactiveValue: "A",
});

const refValue = ref(0);
const { reactiveValue } = toRefs(data);

// 计算属性 --------
const isDisable = computed(() => props.disabled);

const className = computed(() => {
  return [
    {
      "is-plain": props.plain,
      "is-round": props.round,
    },
  ];
});

// 组件传值属性--------
const props = defineProps({
  disabled: Boolean,
  loading: Boolean,
  circle: Boolean,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  icon: Boolean,
  color: {
    type: String,
    default: "red",
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => ["lg", "md", "sm"].includes(value),
  },
  type: {
    type: String,
    default: "default",
    validator: (value) =>
      ["danger", "info", "success", "warning", "text", "primary"].includes(
        value
      ),
  },
});
</script>

<template>
  <button class="jk-button py-2 px-4" :class="className" :disabled="isDisable">
    <slot></slot>
  </button>
</template>

<style scoped>
.jk-button {
  background-color: v-bind(color);
}

.is-plain {
  background-color: transparent;
  border: 1px solid v-bind(color);
  color: v-bind(color);
}

.is-round {
  border-radius: 3px;
}
</style>
