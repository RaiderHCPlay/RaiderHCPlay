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
                <article>A web developer</article>
                <Link href={'/about'}>About</Link>
                <Link href={'/projects'}>Projects</Link>
            </div>
        </div>
    )
}
