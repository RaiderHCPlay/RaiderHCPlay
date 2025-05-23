export default async function getAccessToken() {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN || "";
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT}:${process.env.SPOTIFY_CLIENT_SECRET}`,
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },

    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  const jsoned = await res.json();
  return jsoned.access_token;
}
