import React, { useEffect, useState } from 'react';
import useTitle from '../../../hook/useTitle';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [AllReviews, setAllReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])
    useTitle('Review')
    
    return (
        <div>
            {
                   AllReviews.map(reviews=> <ReviewCard
                    key={reviews._id}
                    reviews={reviews}
                    ></ReviewCard>)
                }
        </div>
    );
};

export default Review;