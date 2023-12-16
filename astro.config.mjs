import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://http://ravildsgnwebtestpage1612.github.io/',
  base: '/src',
  integrations: [mdx(), tailwind()]
});