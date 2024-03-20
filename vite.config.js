import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { ViteAliases } from 'vite-aliases';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { VitePluginGhPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [
    reactRefresh(),
    ViteAliases(),
    VitePWA(),
    VitePluginGhPages({
      build: {
        outDir: 'dist',
      },
    }),
    VitePWA()
  ],
});