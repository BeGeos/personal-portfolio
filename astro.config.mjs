import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

const DEFAULT_PAGE = '/it';


// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': {
      status: 302,
      destination: DEFAULT_PAGE
    }
  },
  integrations: [tailwind(), solidJs()]
});