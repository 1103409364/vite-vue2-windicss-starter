import path from "path";
import { defineConfig } from "vite";
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
      resolvers: [
        ElementUiResolver(),
        IconsResolver({
          componentPrefix: "",
        }),
      ],
    }),
    Icons(),
  ],

  server: {
    port: 8080,
  },
});

export default config;
