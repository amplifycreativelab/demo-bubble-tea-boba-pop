import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: "https://amplifycreativelab.github.io",
  base: "/demo-bubble-tea-boba-pop/",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [preact()],
});
