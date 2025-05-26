"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function TechComponent() {
  const [tech, setTech] = useState<Icons[]>([]);
  // const [wakatime, setWakatime] = useState<WakatimeLangs | null>(null);

  // useEffect(() => {
  //   fetch(
  //     "https://wakatime.com/share/@RaiderHCPlay/f6f01f16-8867-4258-9734-1deffc92903a.json",
  //     { method: "GET" },
  //   ).then(async (res) => {
  //     if (res.ok) {
  //       setWakatime(await res.json());
  //     }
  //   });
  // }, []);

  useEffect(() => {
    fetch("/icons.json", {}).then(async (res) => {
      if (res.ok) {
        setTech(await res.json());
      }
    });
  }, []);

  return (
    <>
      {tech && (
        <div className={"tech-wrapper"}>
          <h2>Technology</h2>
          <div className={"tech-content"}>
            <div className={"languages"}>
              <h3>Languages</h3>
              {tech.map((lang: Icons, i: number) => {
                // const wakLang = wakatime?.data.find(
                //   (wakatimeLang) =>
                //     wakatimeLang.name.toLowerCase() ===
                //     lang.wakatime_name.toLowerCase(),
                // );
                if (lang.category === "language") {
                  return (
                    <div className={"lang"} key={i}>
                      <Image
                        key={i}
                        src={`${lang.icon}`}
                        alt={`${lang.name} logo`}
                        width={"35"}
                        height={"35"}
                      />
                      {lang.name}
                    </div>
                  );
                }
              })}
            </div>
            <div className={"frameworks"}>
              <h3>Frameworks</h3>
              {tech.map((lang: Icons, i: number) => {
                if (lang.category === "framework") {
                  return (
                    <div className={"lang"} key={i}>
                      <Image
                        key={i}
                        src={`${lang.icon}`}
                        alt={`${lang.name} logo`}
                        width={"35"}
                        height={"35"}
                      />
                      {lang.name}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
