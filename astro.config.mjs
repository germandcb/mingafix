// @ts-nocheck
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import node from '@astrojs/node';

import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()]
    },

  output: 'server',

  integrations: [react(), auth()],

  adapter: node({
    mode: 'standalone'
  })
});