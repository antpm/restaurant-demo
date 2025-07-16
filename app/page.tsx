'use client';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function Home() {
    const images = [
        { original: '/home-gallery/gallery-1.jpg', thumbnail: '/home-gallery/gallery-1.jpg' },
        { original: '/home-gallery/gallery-2.jpg', thumbnail: '/home-gallery/gallery-2.jpg' },
        { original: '/home-gallery/gallery-3.jpg', thumbnail: '/home-gallery/gallery-3.jpg' },
        { original: '/home-gallery/gallery-4.jpg', thumbnail: '/home-gallery/gallery-4.jpg' },
    ];
    return (
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
    );
}
