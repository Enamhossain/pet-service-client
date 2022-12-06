import React, { useEffect,  } from'react';

import ReviewCard from './ReviewCard';

const Review = ({AllReviews,setAllReviews}) => {
    
    useEffect(() => {
        fetch('https://percat-service-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])
   
    
    return (
        <div>
            {
                   AllReviews.map(review => <ReviewCard
                    key={review._id}
                    review={review}
                    ></ReviewCard>)
                }
        </div>
    );
};

export default Review;