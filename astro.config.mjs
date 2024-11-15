import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sanity(
    {
      projectId: 'w7ejryvg',
      dataset: 'production',
      useCdn: true, // See note on using the CDN
      apiVersion: "2024-07-24", // insert the current date to access the latest version of the API
      studioBasePath: '/studio' // If you want to access the Studio on a route
    }
  )]
});