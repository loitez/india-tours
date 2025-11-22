import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    host: true,
    proxy: {
      '/api': {
        target: 'http://backend:5000', // Имя сервиса из docker-compose.yml
        changeOrigin: true
      },
    },
  },
  plugins: [react()],
  resolve: {
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~assets": path.resolve(__dirname, "./src/assets"),
      "~components": path.resolve(__dirname, "./src/components"),
    },
  },
});
