// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://parts-finder.sirlilpanda.studio',
  output: 'server',

  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),

  vite: {
    ssr: {
      external: ['node:path'],
    },
  },

  integrations: [auth()]
});