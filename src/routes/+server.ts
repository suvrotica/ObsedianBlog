import type { RequestEvent } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export async function GET({ url, fetch }: RequestEvent) {
	const obsidianUrl = new URL('https://publish.obsidian.md/serve');
	obsidianUrl.searchParams.set('url', 'obsedian-blog.vercel.app' + url.pathname + url.search);

	const res = await fetch(obsidianUrl);

	if (res.ok) {
		const response = new Response(res.body, res);
		response.headers.set('X-Frame-Options', 'SAMEORIGIN');
		response.headers.set('X-Content-Type-Options', 'nosniff');
		response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
		return response;
	}

	throw error(res.status, 'Failed to fetch from Obsidian Publish');
}