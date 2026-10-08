// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // User site (username.github.io): deploy at the root path, no project sub-path.
  site: 'https://sorangecc.github.io',
  base: '/',
  integrations: [mdx(), sitemap()],
});
