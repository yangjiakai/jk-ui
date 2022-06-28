<script setup>
import { computed } from "vue";
import { useWindowScroll } from "@vueuse/core";

// 组件传值属性--------
const props = defineProps({
  modalValue: Boolean,
  logoUrl: String,
  sticky: Boolean,
  fullWidth: Boolean,
  navList: Array,
});

// 根据页面滚动高度切换ToolBar吸顶状态
const { y } = useWindowScroll();

const updateScrollTop = () => {
  scrollTop.value = document.documentElement.scrollTop;
};

const className = computed(() => {
  return [props.sticky && y.value > 78 && "jk-navbar-sticky"];
});
</script>

<template>
  <div class="jk-navbar" :class="className">
    <nav :class="{ container: !fullWidth }">
      <div class="logo-area" v-if="logoUrl">
        <router-link to="/">
          <img :src="logoUrl" alt="" />
        </router-link>
      </div>
      <ul :class="{ 'no-logo': !logoUrl }">
        <li v-for="nav in navList" :key="nav.index">
          <router-link :to="nav.link" active-class="link-active">
            {{ nav.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.jk-navbar {
  background-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0.9);
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .logo-area {
      margin-left: 2rem;
    }
    ul {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      &.no-logo {
        justify-content: space-around;
      }
      li {
        margin-right: 2rem;
        a {
          display: inline-block;
          padding: 1rem;
          transition: 0.3s;
          &:hover {
            color: #0091ea;
            transition: 0.3s;
          }
          &.link-active {
            color: #0091ea;
          }
        }
      }
    }
    transition: 0.5s;
  }

  &.jk-navbar-sticky {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
    color: rgba(0, 0, 0, 0.9);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    transition: 0.3s;
    .logo-area {
      a {
        img {
          filter: invert(71%) sepia(43%) saturate(0%) hue-rotate(152deg)
            brightness(94%) contrast(75%);
        }
      }
    }
  }
}
</style>
