import React, { useEffect, useState } from 'react';
import useTitle from '../../../../hook/useTitle';
import MyreviewsCard from './MyreviewsCard';

const MyReview = () => {
    const [ MyReviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch('https://percat-service-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [])
    useTitle('MyReview')
    return (
        <div>
            {
                MyReviews.map(review=> <MyreviewsCard
                    key={review._id}
                    review={review}
                    > </MyreviewsCard>
                    )
            }
        </div>
    );
};

export default MyReview;