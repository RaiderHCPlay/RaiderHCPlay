import Image from 'next/image'
import Link from 'next/link'

export default function MediaComponent() {
    return (
        <div className={'media-content'}>
            <Link
                target={'_blank'}
                href="https://discord.com/users/483660439633395724"
            >
                <Image
                    src={'https://cdn.simpleicons.org/discord/f27a23'}
                    alt={'Discord contact'}
                    width={'40'}
                    height={'40'}
                />
            </Link>
            <Link target={'_blank'} href={'https://github.com/RaiderHCPlay'}>
                <Image
                    src={'https://cdn.simpleicons.org/github/f27a23'}
                    alt={'GitHub contact'}
                    width={'40'}
                    height={'40'}
                />
            </Link>
            <Link target={'_blank'} href={'https://wakatime.com/@RaiderHCPlay'}>
                <Image
                    src={'https://cdn.simpleicons.org/wakatime/f27a23'}
                    alt={'Wakatime Profile'}
                    width={'40'}
                    height={'40'}
                />
            </Link>
        </div>
    )
}
