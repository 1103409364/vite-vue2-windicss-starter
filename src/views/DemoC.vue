<template>
  <div>
    <ItemComponent :d="data" :p="data" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ItemComponent from "./ItemComponent.vue";

const sourceData = {
  aaa: "1",
  bbb: "2",
  ccc: "3",
  ddd: "4",
  // 头
  hhh: {
    eee: "5",
    fff: "6",
    ggg: {
      hhh: "7",
      iii: { jjj: "8" },
    },
    kkk: {
      mmm: "9",
      nnn: { ooo: "10" },
    },
    pppp: "11",
    qqq: "12",
  },
  rrr: {
    sss: "13",
    ttt: "14",
    xxx: "15",
  },
  yyy: {
    ddd: "16",
    zzz: { ggg: "17" },
    www: "18",
    ttt: {
      ddd: "19",
      bbb: "20",
      ggg: "21",
    },
  },
}; // 默认值

// 校验规则
const validatorMap = {};

const handleData = (d: any) => {
  const res: any = {};
  for (const key in d) {
    const value = d[key];
    if (typeof value !== "object") {
      res[key] = {
        value,
        component: "ElInput",
        validator: (rule, value, callback, p) => {
          console.log(rule);
          if (value.value === "") {
            callback(new Error("请输入"));
          }
          // console.log(p);
        },
      };
    } else {
      res[key] = handleData(value);
    }
  }

  return res;
};
const data = ref(handleData(sourceData));
</script>

<style lang="scss" scoped></style>
