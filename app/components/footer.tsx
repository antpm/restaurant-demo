import { FaCalendar, FaMapLocation, FaPhone } from 'react-icons/fa6';

export default function Footer() {
    return (
        <div className='fixed flex md:flex-row flex-col bottom-0 left-0 w-full bg-black/50 justify-around items-center p-4 z-50'>
            <div className='flex flex-row items-center gap-2'>
                <FaPhone className='md:w-6 md:h-6 h-4 w-4 text-white' />
                <p className='md:text-xl text-white'>555-555-5555</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <FaMapLocation className='md:w-6 md:h-6 h-4 w-4 text-white' />
                <p className='md:text-xl text-white'>123 Fake Street, Some Town</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <FaCalendar className='md:w-6 md:h-6 h-4 w-4 text-white' />
                <p className='md:text-xl text-white'>Open 8am to 8pm Everyday</p>
            </div>
        </div>
    );
}
