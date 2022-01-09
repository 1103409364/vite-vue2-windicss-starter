<template>
  <section
    class="container flex flex-col items-center px-5 py-12 mx-auto text-gray-600 body-font md:flex-row"
  >
    <div
      class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left"
    >
      <Heading1>Vite ⚡ - Vue 2 starter template</Heading1>
      <ElButton type="primary" @click="switchLang">切换中英文</ElButton>

      <p class="test mb-8 leading-relaxed dark:text-gray-300">
        This example project shows how to speed up your Vue 2 application with
        the next generation frontend tooling Vite.
      </p>
      <p>{{ $t("login.userName") }}:{{ userName }}</p>
    </div>
    <div class="w-1/2">
      <el-calendar v-model="value"></el-calendar>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue-demi";

export default defineComponent({
  setup(props, { root }) {
    const value = ref(Date.now());
    const userName = computed(() => root.$store.getters["user/userName"]);

    const switchLang = () => {
      root.$i18n.locale = root.$i18n.locale === "en" ? "cn" : "en";
    };

    console.log("created", props);
    onMounted(() => {
      console.log("mounted import.meta.env.MOD", import.meta.env);
    });
    return { value, userName, switchLang };
  },
});
// 支持vue2 的 options api
// export default defineComponent({
//   data() {
//     return { value: Date.now() };
//   },
//   computed: {
//     userName(): string {
//       return this.$store.getters["user/userName"];
//     },
//   },
//   methods: {
//     switchLang() {
//       this.$i18n.locale = this.$i18n.locale === "en" ? "cn" : "en";
//     },
//   },
//   created() {
//     console.log("created");
//   },
// });
</script>
<style lang="scss" scoped>
.test {
  display: block;
  width: 500px;
  color: $red;
}
</style>
