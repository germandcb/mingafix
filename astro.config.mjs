// @ts-nocheck
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import node from '@astrojs/node';

import auth from 'auth-astro';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()]
    },

  output: 'server',

  integrations: [react(), auth(), db()],

  adapter: node({
    mode: 'standalone'
  })
});