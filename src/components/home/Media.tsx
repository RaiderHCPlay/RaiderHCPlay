"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Loading from "../global/Loading";

export default function MediaComponent() {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("/media.json", {}).then(async (response) => {
      if (response.ok) {
        setMedia(await response.json());
        setLoading(false);
      }
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      {media && (
        <div className={"media-content"}>
          {media.map((media, i) => (
            <Link target={"_blank"} key={i} href={`${media.url}`}>
              <svg
                role="img"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>{media.name}</title>
                <path d={`${media.path}`} />
              </svg>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
