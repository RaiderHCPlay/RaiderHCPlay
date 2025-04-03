'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'

export default function MediaComponent() {
    const [media, setMedia] = useState<Media[]>([])

    const getMedia = useCallback(() => {
        fetch('/media.json', {}).then(async (response) => {
            if (response.ok) {
                setMedia(await response.json())
            }
        })
    }, [])

    useEffect(() => {
        getMedia()
    }, [getMedia])

    return (
        <>
            {media && (
                <div className={'media-content'}>
                    {media.map((media, i) => (
                        <Link target={'_blank'} key={i} href={`${media.url}`}>
                            <Image
                                src={`${media.icon}`}
                                alt={`${media.name} contact`}
                                width={'40'}
                                height={'40'}
                            />
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}
