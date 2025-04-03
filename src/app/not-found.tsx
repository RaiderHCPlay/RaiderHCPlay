import Link from 'next/link'

export default function NotFound() {
    return (
        <h2 className={'not-found'}>
            Page is not available. Go back to <Link href={'/'}>main page</Link>
        </h2>
    )
}
