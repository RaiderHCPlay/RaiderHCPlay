"use server";

import { NextResponse } from "next/server";

export async function GET() {
  const scopes = "user-read-currently-playing";
  const clientId = process.env.SPOTIFY_CLIENT;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return NextResponse.json(
      { error: "Missing Spotify stuff" },
      { status: 500 },
    );
  }

  const query = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    scope: scopes,
    redirect_uri: redirectUri,
  });

  const authUrl = `https://accounts.spotify.com/authorize?${query.toString()}`;

  return NextResponse.redirect(authUrl);
}
