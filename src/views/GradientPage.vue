<script setup>
import jkNavbar from "@/components/Navbar/index.vue";
import { ref, watch, computed } from "vue";
import logoUrl from "@/assets/images/common/logoCt.svg";
import jkButton from "@/components/Button/index.vue";
import { gradientList } from "@/utils/data";
import { Icon } from "@iconify/vue";
import { useClipboard } from "@vueuse/core";
const { copy, copied } = useClipboard();

const bgColor = ref("#000");
const gradientFrom = ref("#fff");
const gradientTo = ref("#fff");
const gradientName = ref("");
const isCodeShow = ref(false);
let angle = ref(0);

const changeBgColor = (gradient) => {
  gradientName.value = gradient.name;
  gradientFrom.value = gradient.colors[0];
  gradientTo.value = gradient.colors[1];
  bgColor.value = `linear-gradient(${gradientFrom.value}, ${gradientTo.value}`;
  isDetailShow.value = true;
};

const bgGradient = computed(() => {
  return `linear-gradient(${angle.value}deg, ${gradientFrom.value}, ${gradientTo.value});`;
});

const changeGradientAngel = () => {
  if (angle.value != 360) {
    angle.value += 45;
  } else {
    angle.value = 0;
  }
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
          <div
            class="gradient-detail-card shadow-2xl"
            :style="`background: ${bgGradient}`"
          >
            <div class="gradient-message shadow-md">
              <div class="left-area">
                <Icon
                  @click="changeGradientAngel"
                  class="feature-icon"
                  icon="ic:baseline-switch-access-shortcut"
                />
                <Icon
                  @click="isCodeShow = !isCodeShow"
                  class="feature-icon"
                  icon="entypo:code"
                />
              </div>

              <div class="center-area">
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

              <div class="right-area">
                <Icon
                  class="feature-icon"
                  icon="eva:close-circle-fill"
                  @click="isDetailShow = false"
                />
              </div>
            </div>
            <div class="gradient-name">{{ gradientName }}</div>
            <div class="gradient-code">
              <transition name="fade">
                <div
                  class="gradient-code-content"
                  v-if="isCodeShow"
                  @click="copy(bgGradient)"
                >
                  <Icon class="feature-icon mr-1" icon="ep:copy-document" />
                  {{ bgGradient }}
                </div></transition
              >
            </div>
          </div>
        </div>
      </transition>
    </teleport>

    <div class="display-area">
      <div class="gradient-list container shadow-md">
        <div
          class="gradient-card"
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
  background: rgba(255, 255, 255, 1);

  .gradient-card {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin: 1rem;
    min-width: 200px;
    color: #fff;
    border-radius: 0.5rem;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: 0.5s;
    &:hover {
      transition: 0.5s;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
  }
}

.gradient-detail-card {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 80%;
  z-index: 999;
  color: rgba(255, 255, 255, 0.9);

  .gradient-message {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    padding: 0 1rem;

    .left-area {
      display: flex;
      align-items: center;
      .feature-icon {
        margin-right: 1rem;
      }
    }

    .center-area {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .right-icon {
      margin: 1rem;
    }

    .gradient-from,
    .gradient-to {
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        transition: 0.3s;
        background-color: rgba(255, 255, 255, 0.1);
      }

      .color-icon {
        margin-right: 1rem;
      }
    }

    .feature-icon {
      font-size: 1.5rem;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
        filter: drop-shadow(
          rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
          rgba(60, 64, 67, 0.15) 0px 2px 6px 2px
        );

        transition: 0.3s;
      }
    }
  }

  .gradient-name {
    flex: 1;
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }

  .gradient-code {
    flex: 3;
    display: flex;
    justify-content: center;
    .gradient-code-content {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
        transition: 0.3s;
      }
    }
  }
}
</style>
