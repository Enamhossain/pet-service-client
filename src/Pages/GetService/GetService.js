import { Card } from 'flowbite-react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReview from './ReviewSection/AddReview';
import Review from './ReviewSection/Review';
// import Review from './ReviewSection/Review';
import ReviewCard from './ReviewSection/ReviewCard';


const GetService = () => {
  const [AllReviews, setAllReviews] = useState([]);
  const { description, img, title } = useLoaderData()


  return (
    <div className='grid grid-cols-2 mx-auto container gap-0 '>
      <div className="container mx-auto">
        <Card className='w-1/2' imgSrc={img}>
          <h2 className='text-4xl'>{title}</h2>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {
              description
            }
          </p>
        </Card>
      </div>
      <div className='text-center'>
         <AddReview
         AllReviews= {AllReviews}
         setAllReviews={setAllReviews}
         ></AddReview>
          <Review 
          AllReviews= {AllReviews}
          setAllReviews={setAllReviews}
          ></Review>
      </div>
      

    </div>



  );
};

export default GetService;