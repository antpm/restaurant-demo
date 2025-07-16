import { FaCalendar, FaMapLocation, FaPhone } from 'react-icons/fa6';

export default function Footer() {
    return (
        <div className='fixed flex flex-row bottom-0 left-0 w-full bg-black/50 justify-around items-center p-4'>
            <div className='flex flex-row items-center gap-2'>
                <FaPhone className='w-6 h-6 text-white' />
                <p className='text-xl'>555-555-5555</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <FaMapLocation className='w-6 h-6 text-white' />
                <p className='text-xl'>123 Fake Street, Some Town</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <FaCalendar className='w-6 h-6 text-white' />
                <p className='text-xl'>Open 8am to 8pm Everyday</p>
            </div>
        </div>
    );
}
