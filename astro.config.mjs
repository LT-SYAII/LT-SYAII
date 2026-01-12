// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://bang.syaii.sbs', // Replace with your actual domain
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    tailwind(), 
    sitemap({
      // Ensure sitemap is generated even in SSR mode
      entryLimit: 10000,
    })
  ],
});
