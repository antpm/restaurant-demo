import Image from 'next/image';
import Logo from '@/public/logo.png';
import Link from 'next/link';

const NavLinks = [
    { label: 'Home', url: '/' },
    { label: 'Menu', url: '/menu' },
    { label: 'About', url: '/about' },
];

export default function Navbar() {
    return (
        <div className='sticky flex flex-row top-0 left-0 w-full bg-blue-400 justify-around items-center z-50 border-b-2  border-blue-300 '>
            <Image
                className='md:w-32 w-16'
                width={124}
                height={124}
                src={Logo}
                alt='Logo'
            />
            <div className={`md:flex hidden flex-row gap-4 text-3xl p-8`}>
                {NavLinks.map((link) => {
                    return (
                        <Link
                            className='text-white'
                            key={link.label}
                            href={link.url}>
                            {link.label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
