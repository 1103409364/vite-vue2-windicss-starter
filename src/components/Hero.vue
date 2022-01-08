<template>
  <section
    class="container flex flex-col items-center px-5 py-12 mx-auto text-gray-600 body-font md:flex-row"
  >
    <div class="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
      <img
        class="object-cover object-center rounded"
        alt="Vue logo"
        src="@/assets/vue-logo.svg"
      />
    </div>
    <div
      class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left"
    >
      <Heading1>Vite ⚡ - Vue 2 starter template</Heading1>
      <ElButton>按钮</ElButton>

      <p class="test mb-8 leading-relaxed dark:text-gray-300">
        This example project shows how to speed up your Vue 2 application with
        the next generation frontend tooling Vite.
      </p>
      <p>userName：{{ userName }}</p>
      <div class="flex justify-center">
        <a href="https://vuejs.org/v2/guide/" target="_blank">
          <ButtonPrimary>Vue docs</ButtonPrimary>
        </a>

        <RouterLink :to="{ name: 'About' }">
          <ButtonSecondary>About</ButtonSecondary>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
// 支持vue2 的 options api
<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({
  data() {
    return { a: 1 };
  },
  computed: {
    userName(): string {
      return this.$store.getters["user/userName"];
    },
  },
  methods: {},
  created() {
    console.log("created");
  },
});
</script>
<style lang="scss" scoped>
.test {
  display: block;
  width: 500px;
  color: red;
}
</style>
