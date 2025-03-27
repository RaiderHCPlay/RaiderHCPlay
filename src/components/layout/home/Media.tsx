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
                    src={'https://cdn.simpleicons.org/discord/cee8e9'}
                    alt={'Discord contact'}
                    width={'40'}
                    height={'40'}
                />
            </Link>
            <Link target={'_blank'} href={'https://github.com/RaiderHCPlay'}>
                <Image
                    src={'https://cdn.simpleicons.org/github/cee8e9'}
                    alt={'GitHub contact'}
                    width={'40'}
                    height={'40'}
                />
            </Link>
        </div>
    )
}
