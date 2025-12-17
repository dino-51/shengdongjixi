import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // 加载环境变量
    const env = loadEnv(mode, '.', '');

    return {
      // 1. 这一行是解决黑屏的关键：仓库名配置
      base: '/shengdongjixi/',

      server: {
        port: 3000,
        host: '0.0.0.0', // 允许局域网访问（手机能连）
      },
      
      plugins: [react()],
      
      // 环境变量配置 (Gemini API)
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});