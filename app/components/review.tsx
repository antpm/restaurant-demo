import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';

type Review = {
    body: string;
    name: string;
};

export default function ReviewCard({ review }: { review: Review }) {
    return (
        <div className='border-1 border-blue-400 rounded-lg w-90 text-xl p-8 relative shadow-sm shadow-black/50 flex-shrink-0'>
            <FaQuoteLeft className='w-10 h-10 absolute top-1 left-1 opacity-10 text-blue-400' />
            <p>{review.body}</p>
            <p className='text-end'>-{review.name}</p>
            <FaQuoteRight className='w-10 h-10 absolute bottom-1 right-1 opacity-10 text-blue-400' />
        </div>
    );
}
