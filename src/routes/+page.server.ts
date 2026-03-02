import { getCache } from '$lib/server/spotifyCache';

export const load = async () => {
  return {
    initialSpotify: await getCache()
  };
};
