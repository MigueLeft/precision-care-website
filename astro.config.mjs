import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import vercelAdapter from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercelAdapter(),
  integrations: [tailwind(), react()],
});
