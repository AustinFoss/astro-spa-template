import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from "@astrojs/tailwind";
import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [
        ]
    },
    integrations: [
        svelte(),
        tailwind(),
        AstroPWA({
            mode: 'development',
            base: '/',
            scope: '/',
            includeAssets: ['favicon.svg'],
            registerType: "prompt",            
            manifest: {
              name: 'Astro SPA PWA Template',
              short_name: 'Astro SPA PWA Template',
              theme_color: '#ffffff',
              icons: [
                {
                  src: 'pwa-192x192.png',
                  sizes: '192x192',
                  type: 'image/png',
                },
                {
                  src: 'pwa-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                },
                {
                  src: 'pwa-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                  purpose: 'any maskable',
                },
              ],
            },
            workbox: {
              navigateFallback: '/q',
              globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
            },
            devOptions: {
              enabled: true,
              navigateFallbackAllowlist: [/^\/$/],
            },
        })
    ]
});
