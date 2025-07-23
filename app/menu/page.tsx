'use client';
import Image from 'next/image';
import { RefObject, useEffect, useRef, useState } from 'react';

const mains = [
    {
        name: 'Burger',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nulla efficitur lorem consectetur, id.',
        image: '/burger.jpg',
        price: '8.99',
    },
    {
        name: 'Burger',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nulla efficitur lorem consectetur, id.',
        image: '/burger.jpg',
        price: '8.99',
    },
    {
        name: 'Burger',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nulla efficitur lorem consectetur, id.',
        image: '/burger.jpg',
        price: '8.99',
    },
    {
        name: 'Burger',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nulla efficitur lorem consectetur, id.',
        image: '/burger.jpg',
        price: '8.99',
    },
    {
        name: 'Burger',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nulla efficitur lorem consectetur, id.',
        image: '/burger.jpg',
        price: '8.99',
    },
    {
        name: 'Burger',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nulla efficitur lorem consectetur, id.',
        image: '/burger.jpg',
        price: '8.99',
    },
];

const sides = [
    {
        name: 'Fries',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nulla efficitur lorem consectetur, id.',
        image: '/fries.jpg',
        price: '2.99',
    },
    {
        name: 'Fries',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nulla efficitur lorem consectetur, id.',
        image: '/fries.jpg',
        price: '2.99',
    },
    {
        name: 'Fries',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nulla efficitur lorem consectetur, id.',
        image: '/fries.jpg',
        price: '2.99',
    },
    {
        name: 'Fries',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nulla efficitur lorem consectetur, id.',
        image: '/fries.jpg',
        price: '2.99',
    },
    {
        name: 'Fries',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nulla efficitur lorem consectetur, id.',
        image: '/fries.jpg',
        price: '2.99',
    },
    {
        name: 'Fries',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nulla efficitur lorem consectetur, id.',
        image: '/fries.jpg',
        price: '2.99',
    },
];

const drinks = [
    {
        name: 'Soft Drink',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nulla efficitur lorem consectetur, id.',
        image: '/drink.jpg',
        price: '2.99',
    },
    {
        name: 'Soft Drink',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nulla efficitur lorem consectetur, id.',
        image: '/drink.jpg',
        price: '2.99',
    },
    {
        name: 'Soft Drink',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nulla efficitur lorem consectetur, id.',
        image: '/drink.jpg',
        price: '2.99',
    },
    {
        name: 'Soft Drink',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nulla efficitur lorem consectetur, id.',
        image: '/drink.jpg',
        price: '2.99',
    },
    {
        name: 'Soft Drink',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nulla efficitur lorem consectetur, id.',
        image: '/drink.jpg',
        price: '2.99',
    },
    {
        name: 'Soft Drink',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nulla efficitur lorem consectetur, id.',
        image: '/drink.jpg',
        price: '2.99',
    },
];

export default function Menu() {
    const mainsRef = useRef<HTMLParagraphElement>(null);
    const sidesRef = useRef<HTMLParagraphElement>(null);
    const drinksRef = useRef<HTMLParagraphElement>(null);
    const [showNav, setShowNav] = useState<boolean>(false);
    const [showMenu, setShowMenu] = useState<boolean>(false);

    useEffect(() => {
        setShowNav(true);
        setTimeout(() => {
            setShowMenu(true);
        }, 500);
    }, []);

    function scrollTo(ref: RefObject<HTMLParagraphElement | null>) {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className='flex flex-col items-center gap-16 w-full '>
            <div
                className={`${
                    showNav ? 'opacity-100' : 'opacity-0'
                } transition-all duration-1000 sticky md:top-34 top-24 bg-blue-400 p-4 rounded-lg border-1 border-blue-300 flex flex-row gap-10 text-xl text-white shadow-sm shadow-black/50`}>
                <button
                    className='cursor-pointer'
                    onClick={() => {
                        scrollTo(mainsRef);
                    }}>
                    Mains
                </button>
                <button
                    className='cursor-pointer'
                    onClick={() => {
                        scrollTo(sidesRef);
                    }}>
                    Sides
                </button>
                <button
                    className='cursor-pointer scroll'
                    onClick={() => {
                        scrollTo(drinksRef);
                    }}>
                    Drinks
                </button>
            </div>
            <div className={`${showMenu ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 flex flex-col gap-16 items-center`}>
                <p
                    ref={mainsRef}
                    className='text-3xl scroll-m-52'>
                    Mains
                </p>
                <div className='flex flex-row md:gap-48 gap-16 justify-evenly items-center w-2/3 flex-wrap'>
                    {mains.map((main, i) => {
                        return (
                            <div
                                key={i}
                                className='max-w-64'>
                                <Image
                                    className='rounded-lg mx-auto'
                                    src={main.image}
                                    width={196}
                                    height={196}
                                    alt=''
                                />
                                <p className='text-center text-xl'>{main.name}</p>
                                <p>{main.desc}</p>
                                <p className='text-end text-lg font-bold'>${main.price}</p>
                            </div>
                        );
                    })}
                </div>
                <p
                    ref={sidesRef}
                    className='text-3xl scroll-m-52'>
                    Sides
                </p>
                <div className='flex flex-row md:gap-48 gap-16  justify-evenly items-center w-2/3 flex-wrap'>
                    {sides.map((side, i) => {
                        return (
                            <div
                                key={i}
                                className='max-w-64'>
                                <Image
                                    className='rounded-lg mx-auto'
                                    src={side.image}
                                    width={196}
                                    height={196}
                                    alt=''
                                />
                                <p className='text-center text-xl'>{side.name}</p>
                                <p>{side.desc}</p>
                                <p className='text-end text-lg font-bold'>${side.price}</p>
                            </div>
                        );
                    })}
                </div>
                <p
                    ref={drinksRef}
                    className='text-3xl scroll-m-52'>
                    Drinks
                </p>
                <div className='flex flex-row md:gap-48 gap-16  justify-evenly items-center w-2/3 flex-wrap'>
                    {drinks.map((drink, i) => {
                        return (
                            <div
                                key={i}
                                className='max-w-64'>
                                <Image
                                    className='rounded-lg mx-auto'
                                    src={drink.image}
                                    width={196}
                                    height={196}
                                    alt=''
                                />
                                <p className='text-center text-xl'>{drink.name}</p>
                                <p>{drink.desc}</p>
                                <p className='text-end text-lg font-bold'>${drink.price}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
