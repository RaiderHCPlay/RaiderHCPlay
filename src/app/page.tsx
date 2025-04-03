import Image from 'next/image'
import ProjectsComponent from '@/components/layout/home/Projects'
import MediaComponent from '@/components/layout/home/Media'
import TechComponent from '@/components/layout/home/Tech'
import Footer from '@/components/layout/global/Footer'

export default function Home() {
    return (
        <div className={'home-wrapper'}>
            <div className={'top-content'}>
                <Image
                    alt={'RaiderHCPlay avatar'}
                    width={'50'}
                    height={'50'}
                    className={'avatar'}
                    src={
                        'https://avatars.githubusercontent.com/u/170134946?v=4'
                    }
                />
                <h2>RaiderHCPlay</h2>
            </div>
            <hr />
            <div className={'about-content'}>
                <h2>Something about me</h2>
                Hi! I&apos;m Paweł, also known as RaiderHCPlay. I&apos;m a web
                developer. I love TypeScript and I&apos;m learning Rust. In free
                time I love reading mangas, watching anime, playing games and
                listening to Persona 3 Reload OST.
            </div>
            <hr />
            <TechComponent />
            <hr />
            <ProjectsComponent />
            <hr />
            <MediaComponent />
            <Footer />
        </div>
    )
}
