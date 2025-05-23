"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Top() {
  const [spotify, setSpotify] = useState<SpotifyData>();

  useEffect(() => {

    let isMounted = true;
    const fetchSpotify = () => {
      fetch("/api/spotify/playing", { method: "GET" }).then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          if (isMounted && JSON.stringify(data) !== JSON.stringify(spotify)) {
            setSpotify(data);
          }
        }
      });
    };

    fetchSpotify();
    const interval = setInterval(fetchSpotify, 2000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [spotify]);

  return (
    <>
      <div className={"top-content"}>
        <div className="avatar-name">
          <Image
            alt={"RaiderHCPlay avatar"}
            width={"50"}
            height={"50"}
            className={"avatar"}
            src={"https://avatars.githubusercontent.com/u/170134946?v=4"}
          />
          <h2>RaiderHCPlay</h2>
        </div>
        {(spotify?.error || !spotify?.isPlaying) && (
          <div className="spotify-div">No currently played track</div>
        )}
        {spotify?.isPlaying && (
          <Link href={spotify.trackUrl} className="spotify-div">
            <Image
              src={spotify.albumImageUrl}
              alt={"Spotify Album Image"}
              width={"50"}
              height={"50"}
              className=""
            />
            <div className="spotify-content">
              <h3>Now playing: {spotify.title}</h3>
              <h3>By: {spotify.artist}</h3>
            </div>
          </Link>
        )}
      </div>
      <hr />
      <div className={"about-content"}>
        <h2>Something about me</h2>
        Hi! I&apos;m Paweł, also known as RaiderHCPlay. I&apos;m a web
        developer. I love TypeScript. In free time I love reading mangas,
        watching anime, playing games and listening to Persona 3 OST and Jojo&apos;s
        Bizarre Adventure.
      </div>
    </>
  );
}
