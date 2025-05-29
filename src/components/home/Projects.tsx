"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "../global/Loading";

export default function ProjectsComponent() {
  const [projects, setProjects] = useState<Projects[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("/projects.json", {}).then(async (response) => {
      if (response.ok) {
        setProjects(await response.json());
        setLoading(false);
      }
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      {projects && projects.length > 0 && (
        <div className={"projects-wrapper"}>
          <h2>Projects</h2>
          <div className={"projects-content"}>
            {projects.map((project, i) => (
              <div key={i} className={"project"}>
                <div className={"project-top-content"}>
                  <Link href={`${project.github}`} target={"_blank"}>
                    {project.name}
                  </Link>
                  <article>
                    {project.description}
                    {project.sublinks &&
                      project.sublinks.map((sublink, i) => {
                        return (
                          <Link
                            href={`${sublink.url}`}
                            key={i}
                            target={"_blank"}
                          >
                            {" "}
                            {sublink.name}
                          </Link>
                        );
                      })}
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
