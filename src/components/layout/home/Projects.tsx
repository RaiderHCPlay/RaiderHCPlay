'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectsComponent() {
    const [projects, setProjects] = useState<Projects[]>([])

    const getProjects = useCallback(() => {
        fetch('/projects.json', {}).then(async (response) => {
            if (response.ok) {
                setProjects(await response.json())
            }
        })
    }, [])

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <>
            {projects && projects.length > 0 && (
                <div className={'projects-wrapper'}>
                    <h2>Projects</h2>
                    <div className={'projects-content'}>
                        {projects.map((project, i) => (
                            <div key={i} className={'project'}>
                                <div className={'left-content'}>
                                    <Link
                                        href={`${project.github}`}
                                        target={'_blank'}
                                    >
                                        {project.name}
                                    </Link>
                                    <article>
                                        {project.description}
                                        {project.sublinks &&
                                            project.sublinks.map(
                                                (sublink, i) => {
                                                    return (
                                                        <Link
                                                            href={`${sublink.url}`}
                                                            key={i}
                                                            target={'_blank'}
                                                        >
                                                            {' '}
                                                            {sublink.name}
                                                        </Link>
                                                    )
                                                }
                                            )}
                                    </article>
                                </div>
                                <div className={'right-content'}>
                                    <Image
                                        src={project.badge}
                                        alt={`${project.name} wakatime badge`}
                                        width={'130'}
                                        height={'20'}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
