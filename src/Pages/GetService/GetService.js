import { Card } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReview from './ReviewSection/AddReview';
import Review from './ReviewSection/Review';

const GetService = () => {
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
        <AddReview></AddReview>
        <Review></Review>
      </div>


    </div>



  );
};

export default GetService;