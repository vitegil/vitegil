import { join } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig((env) => {
  const mode = env.mode
  // const {mode} = env
  const isMock = mode === 'mock'
  const baseUrl = isMock ? 'http://localhost:10002' : 'http://82.157.232.71:10002'

  // 方法1.设置不通的axios baseUrl
  // 方法2.axios baseUrl 恒等于 前端域名/api。vite反向代理，api发到不同的baseUrl

  return {
    plugins: [vue(), WindiCSS()],
    resolve: {
      alias: {
        '@': join(__dirname, 'src'),
      },
    },
    server: {
      host: '0.0.0.0',
      // 反向代理
      proxy: {
        '/api': {
          target: baseUrl,
          // 同源
          changeOrigin: true,
        },
      },
    },
  }
})
