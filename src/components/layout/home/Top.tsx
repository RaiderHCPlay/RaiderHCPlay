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
            <svg
              viewBox="0 0 24 24"
              width={"25px"}
              height={"25px"}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#b478e0"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M10.0909 11.9629L19.3636 8.63087V14.1707C18.8126 13.8538 18.1574 13.67 17.4545 13.67C15.4964 13.67 13.9091 15.096 13.9091 16.855C13.9091 18.614 15.4964 20.04 17.4545 20.04C19.4126 20.04 21 18.614 21 16.855C21 16.855 21 16.8551 21 16.855L21 7.49236C21 6.37238 21 5.4331 20.9123 4.68472C20.8999 4.57895 20.8852 4.4738 20.869 4.37569C20.7845 3.86441 20.6352 3.38745 20.347 2.98917C20.2028 2.79002 20.024 2.61055 19.8012 2.45628C19.7594 2.42736 19.716 2.39932 19.6711 2.3722L19.6621 2.36679C18.8906 1.90553 18.0233 1.93852 17.1298 2.14305C16.2657 2.34086 15.1944 2.74368 13.8808 3.23763L11.5963 4.09656C10.9806 4.32806 10.4589 4.52419 10.0494 4.72734C9.61376 4.94348 9.23849 5.1984 8.95707 5.57828C8.67564 5.95817 8.55876 6.36756 8.50501 6.81203C8.4545 7.22978 8.45452 7.7378 8.45455 8.33743V16.1307C7.90347 15.8138 7.24835 15.63 6.54545 15.63C4.58735 15.63 3 17.056 3 18.815C3 20.574 4.58735 22 6.54545 22C8.50355 22 10.0909 20.574 10.0909 18.815C10.0909 18.815 10.0909 18.8151 10.0909 18.815L10.0909 11.9629Z"
                  fill=""
                ></path>{" "}
              </g>
            </svg>
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
        watching anime, playing games and listening to Persona 3 OST and
        Jojo&apos;s Bizarre Adventure.
      </div>
    </>
  );
}
