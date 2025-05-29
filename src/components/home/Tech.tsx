"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Loading from "../global/Loading";

export default function TechComponent() {
  const [tech, setTech] = useState<Icons[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("/icons.json", {}).then(async (res) => {
      if (res.ok) {
        setTech(await res.json());
        setLoading(false);
      }
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      {tech && (
        <div className={"tech-wrapper"}>
          <h2>Technology</h2>
          <div className={"tech-content"}>
            <div className={"tech-div"}>
              <h3>Languages</h3>
              {tech.map((lang: Icons, i: number) => {
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
            <div className={"tech-div"}>
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
            <div className="tech-div">
              <h3>Exploring</h3>
              {tech.map((lang: Icons, i: number) => {
                if (lang.category === "exploring") {
                  return (
                    <div className="lang" key={i}>
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
            <div className="tech-div">
              <h3>Setup</h3>
              {tech.map((lang: Icons, i: number) => {
                if (lang.category === "setup") {
                  return (
                    <div className="lang" key={i}>
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
