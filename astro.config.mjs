import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://clash-top.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
});
