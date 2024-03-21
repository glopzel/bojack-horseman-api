import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'BoJack Horseman API',
			social: {
				github: 'https://github.com/glopzel/bojack-horseman-api',
			},
			// favicon : {
			// 	src: './public/favicon.ico',
			// },
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Base URL', link: '/guides/base/' },
						{ label: 'Endpoints', link: '/guides/endpoints/' }
					],
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
