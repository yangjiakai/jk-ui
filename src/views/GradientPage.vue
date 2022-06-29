<script setup>
import jkNavbar from "@/components/Navbar/index.vue";
import { ref, watch } from "vue";
import logoUrl from "@/assets/images/common/logoCt.svg";
import jkButton from "@/components/Button/index.vue";
import { gradientList } from "@/utils/data";
import { Icon } from "@iconify/vue";
import { useClipboard } from "@vueuse/core";
const { copy, copied } = useClipboard();

const bgColor = ref("#000");
const gradientFrom = ref("#fff");
const gradientTo = ref("#fff");

const changeBgColor = (gradient) => {
  gradientFrom.value = gradient.colors[0];
  gradientTo.value = gradient.colors[1];
  bgColor.value = `linear-gradient(${gradientFrom.value}, ${gradientTo.value}`;
  isDetailShow.value = true;
};

const isDetailShow = ref(false);
</script>

<template>
  <div class="jk-gradient">
    <teleport to="body">
      <transition name="fade">
        <div
          class="jk-mask"
          v-if="isDetailShow"
          @click.self="isDetailShow = false"
        >
          <div class="gradient-detail-card" :style="`background: ${bgColor}`">
            <div class="gradient-message shadow-md">
              <div class="gradient-from" @click="copy(gradientFrom)">
                <Icon
                  :color="gradientFrom"
                  icon="academicons:ceur-square"
                  inline="true"
                  class="color-icon"
                />
                <span> {{ gradientFrom }}</span>
              </div>
              <Icon
                class="right-icon"
                icon="akar-icons:circle-chevron-right-fill"
              />
              <div class="gradient-to" @click="copy(gradientTo)">
                <Icon
                  icon="academicons:ceur-square"
                  inline="true"
                  class="color-icon"
                  :color="gradientTo"
                />
                {{ gradientTo }}
              </div>
            </div>
          </div>
        </div>
      </transition>
    </teleport>

    <div class="display-area">
      <div class="gradient-list container shadow-md">
        <div
          class="gradient-card shadow-md"
          v-for="gradient in gradientList"
          :key="gradient.index"
          :style="`background: linear-gradient(${gradient.colors[0]}, ${gradient.colors[1]}`"
          @click="changeBgColor(gradient)"
        >
          {{ gradient.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gradient-list {
  min-height: 500px;
  display: flex;
  justify-content: space-around;
  align-content: space-between;
  flex-wrap: wrap;
  background: v-bind(bgColor);

  .gradient-card {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin: 1rem;
    min-width: 200px;
    color: #fff;
    border-radius: 1rem;
    cursor: pointer;
  }
}

.gradient-detail-card {
  position: fixed;
  width: 600px;
  height: 300px;
  background-color: red;
  z-index: 999;
  color: rgba(255, 255, 255, 0.9);
  .gradient-message {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    .right-icon {
      margin: 1rem;
    }
    .gradient-from,
    .gradient-to {
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
      .color-icon {
        margin-right: 1rem;
      }
    }
  }
}
</style>
