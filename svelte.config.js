import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Use Vercel's Edge Functions
			runtime: 'edge'
		})
	}
};

export default config;