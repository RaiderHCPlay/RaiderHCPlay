import { getSpotifyData } from './getSpotifyData';

let cache: SpotifyData | null = null;

setInterval(async () => {
	const newData: SpotifyData | null = await getSpotifyData();

	if (newData) cache = newData;
}, 3000);

export const getCache = () => cache;
