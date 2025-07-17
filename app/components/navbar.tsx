'use client';

import Image from 'next/image';
import Logo from '@/public/logo.png';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa6';
import { useState } from 'react';

const NavLinks = [
    { label: 'Home', url: '/' },
    { label: 'Menu', url: '/menu' },
    { label: 'About', url: '/about' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    return (
        <>
            <div className={`${menuOpen ? 'top-20' : '-top-20'} left-0 fixed transition-all duration-500 bg-blue-500 flex flex-col z-40 w-full `}>
                <Link
                    className='text-white w-full text-center text-2xl h-12 flex items-center justify-center border-b-2 '
                    href={NavLinks[0].url}
                    onNavigate={() => {
                        setMenuOpen(false);
                    }}>
                    {NavLinks[0].label}
                </Link>
                <Link
                    className='text-white w-full text-center text-2xl h-12 flex items-center justify-center  rounded-lg'
                    href={NavLinks[1].url}
                    onNavigate={() => {
                        setMenuOpen(false);
                    }}>
                    {NavLinks[1].label}
                </Link>
                <Link
                    className='text-white w-full text-center text-2xl h-12 flex items-center justify-center border-t-2 '
                    href={NavLinks[2].url}
                    onNavigate={() => {
                        setMenuOpen(false);
                    }}>
                    {NavLinks[2].label}
                </Link>
            </div>
            <div className='sticky flex flex-row top-0 left-0 w-full bg-blue-400 md:justify-around justify-between items-center z-50 border-b-2  border-blue-300 p-2'>
                <Image
                    className='md:w-24 w-16'
                    width={96}
                    height={96}
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
                <button
                    className='md:hidden block'
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}>
                    <FaBars className=' w-16 h-16 text-white' />
                </button>
            </div>
        </>
    );
}
