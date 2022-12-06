
import React, { useState } from 'react';


const AddReview = ({AllReviews,setAllReviews}) => {
    const [review, setReview] = useState()
    const handleAddreview = event => {
        event.preventDefault();
        console.log(review);


        fetch('https://percat-service-server.vercel.app/reviews',{
      
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(review)

        })
        .then(res=>res.json())
        .then(data=>{
            if (data.acknowledged) {
                alert('service added successfully')
                setAllReviews([...AllReviews,review])
                event.target.reset()
              }
        })
        
    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        console.log(value,field);
        const newReview ={...review}
        newReview[field] = value;
        setReview(newReview); 
        
    }
    return (
        <div className='d-flex mb-6'>
          <form onSubmit={handleAddreview}>
            <input onBlur={handleInputBlur} type="text" name='reviews' placeholder="Right a review" className="input input-bordered input-error w-full max-w-xs mr-4" />
            <button className="bg-blue-300 p-3 rounded-lg ">Submit</button>
            </form>

             
        </div>
    );
};

export default AddReview;