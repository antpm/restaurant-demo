'use client';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import ReviewCard from './components/review';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
    const [showGallery, setShowGallery] = useState<boolean>(false);
    const [showLabel, setShowLabel] = useState<boolean>(false);
    const [showReviews, setShowReviews] = useState<boolean>(false);

    useEffect(() => {
        setShowGallery(true);
        setTimeout(() => {
            setShowLabel(true);
        }, 500);
        setTimeout(() => {
            setShowReviews(true);
        }, 1000);
    }, []);

    const images = [
        { original: '/home-gallery/gallery-1.jpg', thumbnail: '/home-gallery/gallery-1.jpg' },
        { original: '/home-gallery/gallery-2.jpg', thumbnail: '/home-gallery/gallery-2.jpg' },
        { original: '/home-gallery/gallery-3.jpg', thumbnail: '/home-gallery/gallery-3.jpg' },
        { original: '/home-gallery/gallery-4.jpg', thumbnail: '/home-gallery/gallery-4.jpg' },
    ];

    const reviews = [
        {
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae massa non turpis facilisis hendrerit. Fusce nec ante suscipit, viverra leo sed, vulputate est. Donec finibus lacinia sapien nec vestibulum. Praesent lobortis aliquam arcu, sed hendrerit orci lacinia ac. ',
            name: 'John Doe',
        },
        {
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae massa non turpis facilisis hendrerit. Fusce nec ante suscipit, viverra leo sed, vulputate est. Donec finibus lacinia sapien nec vestibulum. Praesent lobortis aliquam arcu, sed hendrerit orci lacinia ac. ',
            name: 'John Doe',
        },
        {
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae massa non turpis facilisis hendrerit. Fusce nec ante suscipit, viverra leo sed, vulputate est. Donec finibus lacinia sapien nec vestibulum. Praesent lobortis aliquam arcu, sed hendrerit orci lacinia ac. ',
            name: 'John Doe',
        },
    ];
    return (
        <div className='flex flex-col gap-8'>
            <div
                className={`${
                    showGallery ? 'opacity-100' : 'opacity-0'
                } transition-all duration-1000 flex flex-col md:h-175  w-full home-gallery items-center home-logo`}>
                <div className='bg-blue-400/50 w-full h-full flex md:flex-row flex-col items-center justify-center gap-16 p-4'>
                    <Image
                        className='rounded-lg shadow-lg shadow-black md:w-100 w-32'
                        src={'/logo.png'}
                        height={400}
                        width={400}
                        alt=''
                    />
                    <p className='bg-gray-600/75 p-4 rounded-lg text-white max-w-150 md:text-xl shadow-lg shadow-black'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae massa non turpis facilisis hendrerit. Fusce nec ante
                        suscipit, viverra leo sed, vulputate est. Donec finibus lacinia sapien nec vestibulum. Praesent lobortis aliquam arcu, sed
                        hendrerit orci lacinia ac. Mauris rhoncus velit eu nisl condimentum, vitae blandit ligula feugiat. Suspendisse faucibus congue
                        eros a luctus. Donec sagittis viverra placerat. Vestibulum ac est sollicitudin, porta augue vel, congue dui. Vestibulum porta
                        luctus faucibus. Mauris vel nibh dolor.
                    </p>
                </div>
                {/* <ImageGallery
                    additionalClass='home-gallery'
                    items={images}
                    showNav={false}
                    showThumbnails={false}
                    autoPlay={true}
                    showFullscreenButton={false}
                    infinite={true}
                    showPlayButton={false}
                    slideDuration={1000}
                    slideInterval={10000}
                /> */}
            </div>
            <p className={`${showLabel ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 md:text-3xl text-2xl text-center`}>
                Here&apos;s what people are saying:
            </p>
            <div
                className={`${
                    showReviews ? 'opacity-100' : 'opacity-0'
                } transition-all duration-1000 flex flex-row justify-around items-center gap-12  overflow-x-auto w-full px-2`}>
                {reviews.map((review, i) => {
                    return (
                        <ReviewCard
                            key={i}
                            review={review}
                        />
                    );
                })}
            </div>
        </div>
    );
}
