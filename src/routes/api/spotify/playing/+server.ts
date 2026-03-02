import { getCache } from '$lib/server/spotifyCache';
import { json } from '@sveltejs/kit';

export async function GET() {
  const cache = await getCache();
  return json(cache);
}
