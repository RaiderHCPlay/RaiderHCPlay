'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

export default function TechComponent() {
    const [tech, setTech] = useState<Icons[]>([])

    const fetchTech = useCallback(() => {
        fetch('/icons.json', {}).then(async (res) => {
            if (res.ok) {
                setTech(await res.json())
            }
        })
    }, [])

    useEffect(() => {
        fetchTech()
    }, [])

    return (
        <>
            {tech && (
                <div>
                    {tech.map((lang: Icons, i: number) => {
                        return (
                            <Image
                                key={i}
                                src={`${lang.icon}`}
                                alt={`${lang.name} logo`}
                                width={'50'}
                                height={'50'}
                            />
                        )
                    })}
                </div>
            )}
        </>
    )
}
