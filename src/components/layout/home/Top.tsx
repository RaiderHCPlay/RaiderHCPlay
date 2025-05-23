"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Top() {
  const [spotify, setSpotify] = useState();

 //  useEffect(() => {
	// window.location.href = "/api/spotify" 
 //  }, []);
	//
 //  useEffect(() => {
 //    fetch("/api/spotify/data")
 //      .then((res) => res.json())
 //      .then((data) => {
 //        if (!data.error) {
 //          setSpotify(data);
 //        }
 //      });
 //  }, []);

  return (
    <>
      <div className={"top-content"}>
        <Image
          alt={"RaiderHCPlay avatar"}
          width={"50"}
          height={"50"}
          className={"avatar"}
          src={"https://avatars.githubusercontent.com/u/170134946?v=4"}
        />
        <h2>RaiderHCPlay</h2>
      </div>
      <hr />
      <div className={"about-content"}>
        <h2>Something about me</h2>
        Hi! I&apos;m Paweł, also known as RaiderHCPlay. I&apos;m a web
        developer. I love TypeScript. In free time I
        love reading mangas, watching anime, playing games and listening to
        Persona 3 Reload OST.
      </div>
      {spotify && (
        <div>
          <h1>{spotify}</h1>
        </div>
      )}
    </>
  );
}
