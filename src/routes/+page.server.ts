import { getCache } from '$lib/server/spotifyCache';

export const load = () => {
	return {
		initialSpotify: getCache()
	};
};
