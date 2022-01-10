<template>
  <section
    class="container flex flex-col items-center px-5 py-12 mx-auto text-gray-600 body-font md:flex-row"
  >
    <div
      class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left"
    >
      <h1>示例页面</h1>
      <div class="target bg-gray-500" ref="target"></div>
      <div>
        x:{{ x }}y:{{ y }} / elementX:{{ Math.floor(elementX) }} elementY:{{
          Math.floor(elementY)
        }}
        / isOutside:{{ isOutside }}
      </div>

      <ElRow>
        <ElButton type="primary" @click="switchLang">切换中英文</ElButton>
        <ElButton type="primary" @click="getUserInfo">getUserInfo</ElButton>
      </ElRow>

      <div class="test py-30px">
        <p contenteditable="false">图标：</p>
        <SvgIcon class="icon my-10px" name="vue"></SvgIcon>
        <SvgIcon class="icon my-10px" name="vite"></SvgIcon>
      </div>

      <div>
        <p>用户信息：</p>

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
import { useMouseInElement } from "@vueuse/core";

// composition api
export default defineComponent({
  setup(props, { root }) {
    const value = ref(Date.now());
    const target = ref(null);
    const { x, y, elementX, elementY, isOutside } = useMouseInElement(target);

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
      const { data } = await userInfo("token");
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
    return {
      x,
      y,
      elementX,
      elementY,
      isOutside,
      value,
      target,
      userName,
      user,
      switchLang,
      getUserInfo,
    };
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
  width: 500px;
}
.target {
  width: 100px;
  height: 100px;
}
.icon {
  width: 30px;
  height: 30px;
}
</style>
