import { defineConfig } from "vite";
import dts from "unplugin-dts/vite";

export default defineConfig({
  plugins: [dts()],
  build: {
    cssCodeSplit: true,
    cssMinify: false,
    sourcemap: true,
    lib: {
      entry: {
        index: "src/index.ts",
        tokens: "src/tokens.css"
      },
      formats: ["es"]
    }
  }
});
