import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dk_pratice_backstage/',
  plugins: [
    vue(),
    UnoCSS(),
  ],
})
