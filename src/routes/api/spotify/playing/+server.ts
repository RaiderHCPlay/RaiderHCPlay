import getAccessToken from '$lib/getAccessToken';
import { json } from '@sveltejs/kit';

let accessToken: string | null;
let expiration: number | null = null;

async function checkAccessToken() {
	if (!accessToken || Date.now() >= (expiration || 0)) {
		const data = await getAccessToken();
		accessToken = data.access_token;
		expiration = Date.now() + data.expires_in * 1000;
	}
	return accessToken;
}

export async function GET() {
	const token = await checkAccessToken();
	const result = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
		method: 'GET',
		headers: { Authorization: `Bearer ${token}` }
	});

	if (result.status === 204) {
		return json({ error: 'Nothing playing right now' }, { status: 204 });
	}

	if (!result.ok) {
		return json({ error: 'Spotify API error' }, { status: result.status });
	}

	const data = await result.json();

	if (!data || !data.item) {
		return json({ error: 'Nothing playing right now' }, { status: 204 });
	}

	const track = data.item;
	return json(
		{
			isPlaying: data.is_playing,
			title: track.name,
			artist: track.artists.map((a: Artists) => a.name).join(', '),
			albumImageUrl: track.album.images[0]?.url,
			trackUrl: track.external_urls.spotify
		},
		{ status: 200 }
	);
}
