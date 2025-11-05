import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:color";`,
      },
    },
    postcss: {
      plugins: [
        require("cssnano")({
          preset: ["default", { discardComments: { removeAll: true } }],
        }),
      ],
    },
  },
  define: {
    "process.env": { NODE_ENV: JSON.stringify("production") },
  },
  build: {
    minify: "terser",
    cssCodeSplit: false,
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
