<template>
  <section
    class="container flex flex-col items-center px-5 py-12 mx-auto text-gray-600 body-font md:flex-row"
  >
    <div
      class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left"
    >
      <Heading1>Vite ⚡ - Vue 2 starter template</Heading1>
      <ElRow>
        <ElButton type="primary" @click="switchLang">切换中英文</ElButton>
        <ElButton type="primary" @click="getUserInfo">getUserInfo</ElButton>
      </ElRow>

      <p class="test mb-8 leading-relaxed dark:text-gray-300">
        This example project shows how to speed up your Vue 2 application with
        the next generation frontend tooling Vite.
      </p>

      <div>
        <ElAvatar icon="el-icon-user-solid" :src="user.avatar"></ElAvatar>
        <p>{{ $t("login.userName") }}:{{ user.username }}</p>
      </div>
    </div>
    <div class="w-1/2">
      <el-calendar v-model="value"></el-calendar>
    </div>
  </section>
</template>
<script lang="ts">
import { userInfo } from "@/api";
import { defineComponent, ref, reactive, computed, onMounted } from "vue-demi";
// composition api
export default defineComponent({
  setup(props, { root }) {
    const value = ref(Date.now());

    const switchLang = () => {
      root.$i18n.locale = root.$i18n.locale === "en" ? "zh" : "en";
    };

    const userName = computed(() => root.$store.getters["user/userName"]);

    const user = reactive({
      username: "",
      avatar: "",
      email: "",
    });
    const getUserInfo = async () => {
      const res = await root
        .$confirm("获取用户信息?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: false,
        })
        .catch((e) => {
          console.log(e);
        });

      if (!res) return;
      const { data } = await userInfo();
      user.avatar = data.user.avatar;
      user.username = data.user.username;
      user.email = data.user.email;
      root.$message(data.user.email);
      root.$notify({
        title: "提示",
        message: "请求成功",
        type: "success",
        duration: 3000,
      });
    };

    console.log("created", props);
    onMounted(() => {
      console.log("mounted import.meta.env.MOD", import.meta.env);
    });
    return { value, userName, user, switchLang, getUserInfo };
  },
});
// 支持 options api
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
//       this.$i18n.locale = this.$i18n.locale === "en" ? "zh" : "en";
//     },
//     async getUserInfo() {
//       let loadingInstance = Loading.service({
//         fullscreen: true,
//         background: "rgba(0, 0, 0, 0)",
//       }); // 添加请求loading
//       const { data } = await userInfo();
//       // this.$message(data.user.email);
//       Notification({
//         title: "提示",
//         message: "请求成功",
//         type: "success",
//         duration: 3000,
//       });

//       console.log(data);
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
