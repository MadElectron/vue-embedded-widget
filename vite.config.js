import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  define: {
    "process.env": { NODE_ENV: JSON.stringify("production") },
  },
  build: {
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
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
