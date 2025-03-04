import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div className={'wrapper'}>
                <div className={'header-left'}>
                    <Link href={'/'}>
                        <Image
                            src={
                                'https://avatars.githubusercontent.com/u/170134946?v=4'
                            }
                            alt={'header logo'}
                            width={'50'}
                            height={'50'}
                        />
                    </Link>
                </div>
                <div className={'header-right'}>
                    <Link href={'/about'}>About</Link>
                    <Link href={'/projects'}>Projects</Link>
                </div>
            </div>
        </header>
    )
}
