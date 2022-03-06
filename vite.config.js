import path from "path";
import { defineConfig } from "vite"; //loadEnv
import { createVuePlugin } from "vite-plugin-vue2";
import viteSvgIcons from "vite-plugin-svg-icons";
import legacy from "@vitejs/plugin-legacy";
import WindiCSS from "vite-plugin-windicss";
import ViteComponents from "unplugin-vue-components/vite";
import ScriptSetup from "unplugin-vue2-script-setup/vite";
import { ElementUiResolver } from "unplugin-vue-components/resolvers";
import { viteMockServe } from "vite-plugin-mock";
import { publicPath } from "./src/config/setting.config.ts";

const config = defineConfig({
  base: publicPath,
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
    createVuePlugin(),
    ScriptSetup({ reactivityTransform: false }),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
    WindiCSS(),
    ViteComponents({
      dirs: ["src/components"], //自动导入自己的组件，默认src/components
      resolvers: [
        ElementUiResolver(), //ElementUi组件按需自动导入
      ],
    }),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")], // 指定需要缓存的图标文件夹
      symbolId: "icon-[dir]-[name]", // 指定symbolId格式
    }),
    viteMockServe({
      mockPath: "./src/mock",
      supportTs: true,
    }),
  ],
  // 指定传递给 CSS 预处理器的选项
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // 减少sass警告 Using / for division is deprecated
        charset: false,
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
