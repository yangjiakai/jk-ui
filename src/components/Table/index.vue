<script setup>
import { watch } from "vue";
import jkButton from "@/components/Button/index.vue";
import { dessertData, dessertDataHeader } from "@/utils/data";
// 组件传值属性--------
const props = defineProps({
  modalValue: Boolean,
});

// vue3通过watch监控props的更新时，需要通过箭头函数()=>props.param的方式传值
// watch(
//   () => props.isShow,
//   (newVal, oldVal) => {
//     console.log(newVal);
//   }
// );
</script>

<template>
  <div class="jk-table">
    <table>
      <thead>
        <tr>
          <th v-for="headerItem in dessertDataHeader" :key="headerItem.index">
            {{ headerItem.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dessert in dessertData" :key="dessert.index">
          <td>{{ dessert.name }}</td>
          <td>{{ dessert.calories }}</td>
          <td>{{ dessert.fat }}</td>
          <td>{{ dessert.carbs }}</td>
          <td>{{ dessert.protein }}</td>
          <td>{{ dessert.iron }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.jk-table {
  border: 1px solid #ccc;
  max-width: 100%;
  min-width: 1000px;
  overflow-y: auto;
  //   overflow-x: scroll;

  table {
    font-size: 14px;
    color: #aaa;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 100%;
    padding: 4px;
    padding-bottom: 8px;

    thead {
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    th {
      text-transform: uppercase;
      white-space: nowrap;
      text-align: left;
      padding: 0 16px;
      color: rgba(0, 0, 0, 0.6);
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        color: rgba(0, 0, 0, 0.8);
        transition: 0.3s;
      }
    }

    tr {
      background-color: #fff;
      height: 3rem;
    }

    td {
      color: rgba(0, 0, 0, 0.5);
      padding: 0 16px;
      border-bottom: 0;
    }

    tbody {
      tr {
        transition: box-shadow 0.2s, transform 0.2s;

        &:hover {
          box-shadow: 0 3px 15px -2px rgba(0, 0, 0, 0.12);
          transform: translateY(-4px);
        }
      }
    }
  }
}
</style>
