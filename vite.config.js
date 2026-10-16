import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    vue(),

    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'TaskFlow',
        short_name: 'TaskFlow',
        description: 'Менеджер завдань TaskFlow',

        start_url: '/',
        scope: '/',
        display: 'standalone',

        theme_color: '#2563eb',
        background_color: '#f5f7fb',

        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
        ],
      },

      workbox: {
        navigateFallback: '/index.html',
        globPatterns: [
          '**/*.{html,js,css,png,svg,ico,woff2}',
        ],
      },
    }),
  ],
});