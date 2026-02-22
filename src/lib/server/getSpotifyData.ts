import { checkAccessToken } from './getAccessToken';

export async function getSpotifyData() {
  const token = await checkAccessToken();
  const result = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` }
  });

  if (result.status === 204) {
    return null;
  }

  const data = await result.json();

  if (!data || !data.item) {
    return null;
  }

  const track = data.item;
  return {
    isPlaying: data.is_playing,
    title: track.name,
    artist: track.artists.map((a: Artists) => a.name).join(', '),
    albumImageUrl: track.album.images[0]?.url,
    trackUrl: track.external_urls.spotify
  } as SpotifyData;
}
