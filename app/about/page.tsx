'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function About() {
    const [showDesc, setShowDesc] = useState<boolean>(false);
    const [showPic, setShowPic] = useState<boolean>(false);
    const [showGallery, setShowGallery] = useState<boolean>(false);

    useEffect(() => {
        setShowDesc(true);

        setTimeout(() => {
            setShowPic(true);
        }, 500);
        setTimeout(() => {
            setShowGallery(true);
        }, 1000);
    }, []);

    const images = [
        { original: '/home-gallery/gallery-1.jpg', thumbnail: '/home-gallery/gallery-1.jpg' },
        { original: '/home-gallery/gallery-2.jpg', thumbnail: '/home-gallery/gallery-2.jpg' },
        { original: '/home-gallery/gallery-3.jpg', thumbnail: '/home-gallery/gallery-3.jpg' },
        { original: '/home-gallery/gallery-4.jpg', thumbnail: '/home-gallery/gallery-4.jpg' },
    ];
    return (
        <div className='flex flex-col w-full  items-center mt-16 gap-16'>
            <div className='flex md:flex-row flex-wrap items-center justify-between gap-16 w-1/2 '>
                <p className={`${showDesc ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 text-lg`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget libero feugiat, euismod lacus in, volutpat tellus. Nulla ac
                    varius arcu, in laoreet enim. Vestibulum lorem erat, ullamcorper sit amet ullamcorper nec, iaculis sit amet magna. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam vel mauris tincidunt, blandit magna non, vehicula
                    turpis. Vestibulum vulputate egestas sapien. Mauris rhoncus velit eu nisl condimentum, vitae blandit ligula feugiat. Suspendisse
                    faucibus congue eros a luctus. Donec sagittis viverra placerat. Vestibulum ac est sollicitudin, porta augue vel, congue dui.
                    Vestibulum porta luctus faucibus. Mauris vel nibh dolor. Phasellus eu mi gravida, accumsan nulla id, facilisis massa. Nulla ornare
                    id sem sit amet lacinia. Quisque interdum urna non urna vulputate aliquam.
                </p>
                <Image
                    className={`${showPic ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}
                    src={'/home-gallery/gallery-1.jpg'}
                    alt=''
                    width={600}
                    height={100}
                />
            </div>
            <div className={`${showGallery ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}>
                <ImageGallery
                    items={images}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    thumbnailPosition='top'
                    showBullets={true}
                />
            </div>
        </div>
    );
}
