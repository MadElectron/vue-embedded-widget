import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  define: {
    "process.env": {
      NODE_ENV: JSON.stringify("production"),
    },
  },
  build: {
    outDir: "dist",
    ...(mode === "embed"
      ? {
          cssCodeSplit: false,
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
        }
      : {}),
  },
}));
