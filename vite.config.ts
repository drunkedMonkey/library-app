import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"), // Entry point from the library
      name: "MyComponentLibrary", // Global name of the library
      fileName: (format) => `my-component-library.${format}.js`, // Name of the output file
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Externalize React y ReactDOM
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
