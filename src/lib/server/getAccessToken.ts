import { env } from '$env/dynamic/private';

export default async function getAccessToken() {
	const refresh_token = env.SPOTIFY_REFRESH_TOKEN || '';
	const res = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			Authorization: `Basic ${Buffer.from(
				`${env.SPOTIFY_CLIENT}:${env.SPOTIFY_CLIENT_SECRET}`
			).toString('base64')}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},

		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token
		})
	});
	const jsoned = await res.json();
	return jsoned;
}
