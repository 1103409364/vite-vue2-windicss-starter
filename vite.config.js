import path from "path";
import { defineConfig } from "vite"; //loadEnv
import { createVuePlugin } from "vite-plugin-vue2";
import legacy from "@vitejs/plugin-legacy";
import WindiCSS from "vite-plugin-windicss";
import ViteComponents from "unplugin-vue-components/vite";
import { ElementUiResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

const config = defineConfig({
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "src")}`,
    },
    dedupe: ["vue-demi"],
  },

  build: {
    minify: true,
  },

  plugins: [
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
    createVuePlugin(),
    WindiCSS(),
    ViteComponents({
      // dirs: ["src/components"], //自动导入自己的组件，默认src/components
      resolvers: [
        ElementUiResolver(), //ElementUi组件按需自动导入
        IconsResolver({
          componentPrefix: "",
        }),
      ],
    }),
    Icons(),
  ],
  // 指定传递给 CSS 预处理器的选项
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // 减少sass警告 Using / for division is deprecated
        additionalData: `@import "@/styles/index.scss";`,
      },
    },
  },

  server: {
    port: 8080,
    proxy: {
      // 类型： Record<string, string | ProxyOp 为开发服务器配置自定义代理规则
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace("/api", ""),
      },
    },
  },
});

export default config;
