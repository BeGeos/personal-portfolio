import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

const DEFAULT_PAGE = '/it';


// https://astro.build/config
export default defineConfig({
  site: 'https://itsmemarco.dev',
  redirects: {
    '/': {
      status: 302,
      destination: DEFAULT_PAGE
    }
  },
  integrations: [tailwind(), solidJs(), sitemap({
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
    i18n: {
      defaultLocale: 'it',
      locales: {
        en: 'en-GB',
        it: 'it-IT',
      },
    },
  })]
});