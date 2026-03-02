import { getSpotifyData } from './getSpotifyData';

let cache: SpotifyData | null = null;
let lastUpdate = 0;

export const getCache = async () => {
  const now = Date.now();

  if (!cache || now - lastUpdate > 5000) {
    lastUpdate = now;
    getSpotifyData().then((newData) => {
      cache = newData;
    });
  }

  return cache;
};
