import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import inlineCssPlugin from "./build/vite-plugin-inline-css.js";

export default defineConfig({
  plugins: [vue(), inlineCssPlugin()],
  css: {
    postcss: {
      plugins: [
        require("cssnano")({
          preset: ["default", { discardComments: { removeAll: true } }],
        }),
      ],
    },
  },
  build: {
    cssCodeSplit: false,
    minify: "terser",
    assetsInlineLimit: 1000000,
    lib: {
      entry: "src/embed.js",
      name: "VueWidget",
      fileName: "vue-widget",
      formats: ["iife"],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"],
      },
      format: {
        comments: false,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
