import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 打包文件生成路径前带上/static
  base: '/static',
  plugins: [vue()]
})
