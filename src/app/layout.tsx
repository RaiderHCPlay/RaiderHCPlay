import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/styles/globals.scss'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'RaiderHCPlay',
    icons: 'https://avatars.githubusercontent.com/u/170134946?v=4',
    description: "RaiderHCPlay's personal website",
    keywords: ['RaiderHCPlay', 'github', 'githubio', 'portfolio', 'dev'],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
