import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [tailwind(), vercel()],
  site: 'https://codecat6128.github.io',
  base: 'CodeCat6128.github.io',
});