'use client';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import ReviewCard from './components/review';

export default function Home() {
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
            <div className='flex flex-col h-fit bg-black/50'>
                <ImageGallery
                    items={images}
                    showNav={false}
                    showThumbnails={false}
                    autoPlay={true}
                    showFullscreenButton={false}
                    infinite={true}
                    showPlayButton={false}
                    slideDuration={1000}
                    slideInterval={10000}
                />
            </div>
            <p className='text-3xl text-center'>Here&apos;s what people are saying:</p>
            <div className='flex flex-row justify-around'>
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
