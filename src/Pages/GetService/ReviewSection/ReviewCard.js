import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const ReviewCard = ({reviews}) => {
    return (
        <div>
             <div>
                <FaUserCircle className='h-10 w-10'></FaUserCircle><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    <span>{reviews}</span>
                </div>
        </div>
    );
};

export default ReviewCard;