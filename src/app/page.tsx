import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className={'home-wrapper'}>
            <Image
                alt={'RaiderHCPlay avatar'}
                width={'110'}
                height={'110'}
                src={'https://avatars.githubusercontent.com/u/170134946?v=4'}
            />
            <div className={'right-content'}>
                <h1>RaiderHCPlay</h1>
                <h2>A web developer</h2>
                <Link href={'/about'}>About page</Link>
                <Link href={'/projects'}>Projects page</Link>
            </div>
        </div>
    )
}
