import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import graphqlLoader from "vite-plugin-graphql-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    graphqlLoader,
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
