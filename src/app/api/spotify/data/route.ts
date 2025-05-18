"use server";

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const access = req.headers
    .get("cookie")
    ?.split("; ")
    .find((row) => row.startsWith("access_token="))
    ?.split("=")[1];
  if (!access) {
    return NextResponse.json({ error: "No access" }, { status: 401 });
  }

  const data = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${access}` },
  });
  const userData = await data.json();
  return NextResponse.json(userData);
}
