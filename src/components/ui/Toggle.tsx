'use client'

import { useState, useLayoutEffect } from 'react'

type Flavor = 'latte' | 'frappe' | 'macchiato' | 'mocha'

export default function ThemeToggle() {
    const [flavor, setFlavor] = useState<Flavor>('mocha')

    useLayoutEffect(() => {
        setFlavor(localStorage.getItem('raiderhcplayTheme') as Flavor)
    }, [])

    useLayoutEffect(() => {
        localStorage.setItem('raiderhcplayTheme', flavor)
        if (flavor === 'latte')
            document.documentElement.removeAttribute('data-theme')
        else document.documentElement.setAttribute('data-theme', flavor)
    }, [flavor])

    return (
        <select
            value={flavor}
            onChange={(e) => setFlavor(e.target.value as Flavor)}
        >
            <option value={'latte'}>Latte</option>
            <option value={'frappe'}>Frappe</option>
            <option value={'macchiato'}>Macchiato</option>
            <option value={'mocha'}>Mocha</option>
        </select>
    )
}
