// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://iker6511.github.io',

  base: '/Iker-Portfolio/',

  output: 'static',

  outDir: './dist',

  trailingSlash: 'always',

  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});