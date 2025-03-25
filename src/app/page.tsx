import Image from 'next/image'
import ProjectsComponent from '@/components/layout/home/Projects'
import PaletteComponent from '@/components/layout/home/Palette'
import MediaComponent from '@/components/layout/home/Media'
import TechComponent from '@/components/layout/home/Tech'

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
            <div className={'about-content'}></div>
            <TechComponent />
            <ProjectsComponent />
            <PaletteComponent />
            <MediaComponent />
        </div>
    )
}
