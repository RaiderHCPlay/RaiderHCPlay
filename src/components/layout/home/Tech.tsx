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
    }, [fetchTech])

    return (
        <>
            {tech && (
                <div className={'tech-wrapper'}>
                    <h2>Technology</h2>
                    <div className={'tech-content'}>
                        <div className={'languages'}>
                            <h3>Languages</h3>
                            {tech.map((lang: Icons, i: number) => {
                                if (lang.category === 'language') {
                                    return (
                                        <div className={'lang'} key={i}>
                                            <Image
                                                key={i}
                                                src={`${lang.icon}`}
                                                alt={`${lang.name} logo`}
                                                width={'35'}
                                                height={'35'}
                                            />
                                            {lang.name}
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        <div className={'frameworks'}>
                            <h3>Frameworks</h3>
                            {tech.map((lang: Icons, i: number) => {
                                if (lang.category === 'framework') {
                                    return (
                                        <div className={'lang'} key={i}>
                                            <Image
                                                key={i}
                                                src={`${lang.icon}`}
                                                alt={`${lang.name} logo`}
                                                width={'35'}
                                                height={'35'}
                                            />
                                            {lang.name}
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
