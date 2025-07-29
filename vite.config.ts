import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/portfolio/",
  server: {
    host: "::",
    port: 3000,
  },
  plugins: [],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
