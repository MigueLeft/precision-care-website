import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import vercelAdapter from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercelAdapter(),
  site: 'https://precisioncareclinic.org',
  integrations: [tailwind(), react(), sitemap()],
});
