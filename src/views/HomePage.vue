<template>
  <div>
    <!-- <DemoC /> -->
    <ElButton type="primary" @click="test">test</ElButton>
  </div>
</template>

<script setup lang="ts">
// import DemoC from "./DemoC.vue";
interface IProps {
  field1?: string; // ?: 可选属性
}
withDefaults(defineProps<IProps>(), {
  field1: "", // 默认值
});
function test() {
  console.log(1);
}
</script>

<style lang="scss" scoped></style>
