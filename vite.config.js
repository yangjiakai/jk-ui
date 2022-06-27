import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'


export default defineConfig({
  plugins: [
    vue(),    
    Components({
    resolvers: [
      IconsResolver(),
    ]
  }),,Icons({autoInstall: true })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       additionalData: '@import "@/assets/scss/variables.scss";',
  //     }
  //   }
  // },
  css: {
    /* CSS 预处理器 */
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/global.scss";'
      }
    }
  },

})
