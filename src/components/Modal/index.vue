<script setup>
import { watch } from "vue";
import jkButton from "@/components/Button/index.vue";

// 组件传值属性--------
const props = defineProps({
  modalValue: Boolean,
  isShow: {
    type: Boolean,
    default: false,
  },
  onOk: Function,
  onCancel: Function,
});

// vue3通过watch监控props的更新时，需要通过箭头函数()=>props.param的方式传值
watch(
  () => props.isShow,
  (newVal, oldVal) => {
    console.log(newVal);
  }
);

const { onOk, onCancel } = props;

const ok = () => {
  onOk && onOk();
};

const cancel = () => {
  onCancel && onCancel();
};
</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <div class="jk-mask" v-if="isShow">
        <div class="jk-modal" v-if="isShow">
          <div class="jk-modal-header">Modal</div>
          <hr class="jk-hr" />
          <div class="jk-modal-body">
            <slot></slot>
          </div>
          <hr class="jk-hr" />
          <div class="jk-modal-footer">
            <jk-button
              class="mr-2"
              @click="cancel"
              dark
              type="primary"
              size="lg"
            >
              cancel
            </jk-button>
            <jk-button @click="ok" type="primary" dark size="lg">
              ok
            </jk-button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss" scoped>
.jk-modal {
  display: flex;
  flex-direction: column;
  min-height: 400px;
  min-width: 400px;
  max-width: 80%;
  max-height: 80%;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 5px;
  .jk-modal-header {
    padding: 1rem;
    font-weight: bold;
    font-size: $font-size;
    color: $font-color;
  }
  .jk-modal-body {
    padding: 1rem;
    overflow-y: scroll;
    flex: 1;
  }
  .jk-modal-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
  }
}

.jk-hr {
  border: 0.5px soli #ccc;
}
</style>
