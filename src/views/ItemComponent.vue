<template>
  <!-- eslint-disable vue/no-mutating-props -->
  <div>
    <ElForm :model="d">
      <div v-for="(val, key) in d" :key="key" class="w-200px">
        <ItemComponent v-if="!val.component" :d="val" :p="val" />
        <!-- label通过字典，或i18n转换后展示 -->
        <ElFormItem
          v-else
          :label="key"
          :prop="key"
          :rules="[
            {
              validator: (rule, value, callback) =>
                val.validator(rule, value, callback, p),
              trigger: ['blur', 'change'],
            },
          ]"
        >
          {{ key }}
          <Component v-bind:is="val.component" v-model="p[key].value" />
        </ElFormItem>
      </div>
    </ElForm>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
export default defineComponent({
  props: ["d", "p"],
  name: "ItemComponent",
});
</script>
