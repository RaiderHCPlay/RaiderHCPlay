'use client'

import { useState, useLayoutEffect } from 'react'
import ThemeToggle from '@/components/ui/Toggle'

export default function Footer() {
    const [year, setYear] = useState<number | undefined>()

    useLayoutEffect(() => {
        setYear(new Date().getFullYear())
    }, [])

    return (
        <div className={'footer-container'}>
            <footer>© {year} RaiderHCPlay</footer>
            <ThemeToggle />
        </div>
    )
}
