import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  outDir: './dist',
  site: 'https://akrade.github.io/krado-design-docs/',
  vite: {
    css: {
      modules: {
        generateScopedName: '[name]-[local]-[hash:base64:5]',
      },
    },
  },
});
