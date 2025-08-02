import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		// Inline CSS in the HTML file if smaller than 100kb ; reduce first hit load
		inlineStyleThreshold: 102400,
		prerender: {
			// Hash links are handled using JavaScript instead of ids
			handleMissingId: 'ignore'
		}
	}
};

export default config;
