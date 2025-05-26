"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

export default function MediaComponent() {
  const [media, setMedia] = useState<Media[]>([]);

  const getMedia = useCallback(() => {
    fetch("/media.json", {}).then(async (response) => {
      if (response.ok) {
        setMedia(await response.json());
      }
    });
  }, []);

  useEffect(() => {
    getMedia();
  }, [getMedia]);

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
                xmlns={media.xmlns}
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
