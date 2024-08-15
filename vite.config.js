import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {  //配置@别名
        "@": path.resolve(__dirname, './src')
    },
    extensions: ['.jsx']  //配置文件后缀
  },

  css: {
    postcss: {
      plugins: [
        // css样式自动添加兼容前缀
        autoprefixer()
      ]
    }
  },

  // 运行后自动打开网页
  server: {
    open: true
  }
})
