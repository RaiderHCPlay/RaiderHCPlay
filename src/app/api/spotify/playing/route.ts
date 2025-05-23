import getAccessToken from "../../../../../lib/spotify/getAccessToken";
import { NextResponse } from "next/server";

export async function GET() {
  const accessToken = await getAccessToken();
  const result = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );

  if (result.status === 204) {
    return NextResponse.json({ error: "No currently played track" }, { status: 200 });
  }

  const data = await result.json();

  if (!data || !data.item) {
    return NextResponse.json({ error: "No currently played track" }, { status: 500 });
  }

  const track = data.item;
  return NextResponse.json(
    {
      isPlaying: data.is_playing,
      title: track.name,
      artist: track.artists.map((a: Artists) => a.name).join(", "),
      albumImageUrl: track.album.images[0]?.url,
      trackUrl: track.external_urls.spotify,
    },
    { status: 200 },
  );
}
