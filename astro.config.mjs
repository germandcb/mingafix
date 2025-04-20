// @ts-nocheck
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import auth from 'auth-astro';
import db from '@astrojs/db';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()]
    },

  output: 'server',
  adapter: cloudflare(),
  integrations: [ auth(), db()],
});