import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import type { ServerOptions } from 'vite'
const devHost = 'http://mock.api.com/'
// 增加项目mock请求
export const PROXY_TARGET = process.env.MOCK ? 'http://table-custom.example.com:3000' : devHost

export const proxy: ServerOptions['proxy'] = {
  '/api': {
    target: PROXY_TARGET,
    secure: false,
    changeOrigin: true,
    headers: {
      Origin: PROXY_TARGET
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy
  },
})
