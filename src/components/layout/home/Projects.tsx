'use client'

import { useState, useEffect, useCallback } from 'react'

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
                <div className={'projects-content'}>
			{projects.map((project, i) => {
				return ( 
				<div key={i}>
					{project.name}
				</div>)
			})}
		</div>
            )}
        </>
    )
}
