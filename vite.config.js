import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  build: {
    outDir: "dist",
    ...(mode === "embed"
      ? {
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
