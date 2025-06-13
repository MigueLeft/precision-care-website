import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import vercelAdapter from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercelAdapter(),
  site: 'https://precisioncareclinic.org',
  integrations: [tailwind(), react(), sitemap(), sanity({
    projectId: "tdpbxeol",
    dataset: "blog-precision",
    useCdn: false,    
    apiVersion: '2025-06-06',
    studioBasePath: '/admin',
    stega: {
      studioUrl: "/admin",
    },
  })],
});