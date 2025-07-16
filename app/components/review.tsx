import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';

type Review = {
    body: string;
    name: string;
};

export default function ReviewCard({ review }: { review: Review }) {
    return (
        <div className='border-1 border-gray-300 rounded-lg w-96 text-xl p-8 relative'>
            <FaQuoteLeft className='w-10 h-10 absolute top-1 left-1 opacity-10' />
            <p>{review.body}</p>
            <p className='text-end'>-{review.name}</p>
            <FaQuoteRight className='w-10 h-10 absolute bottom-1 right-1 opacity-10' />
        </div>
    );
}
