import { defineConfig, squooshImageService } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://chrisbauer.org',
	integrations: [mdx(), sitemap()],
	image: {
		service: squooshImageService(),
	  },
});
