import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "unplugin-dts/vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [react(), dts(), libInjectCss()],
  build: {
    cssCodeSplit: true,
    cssMinify: false,
    sourcemap: true,
    lib: {
      entry: { index: "src/index.ts" },
      formats: ["es"]
    },
    rollupOptions: {
      external: [/^react($|\/)/, /^react-dom($|\/)/, /^@myqdui\//]
    }
  }
});
