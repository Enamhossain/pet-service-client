import React, { useState } from 'react';

const AddService = () => {
  const [service, setService] = useState()
  const handleAddService = event => {
    event.preventDefault();
    console.log(service);


    fetch('https://percat-service-server.vercel.app/services', {

      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(service)

    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          alert('service added successfully')
          event.target.reset()
        }
      })

  }

  const handleInputBlur = event => {
    const value = event.target.value;
    const field = event.target.name;
    console.log(value, field);
    const newService = { ...service }
    newService[field] = value;
    setService(newService);

  }
  return (
    <div >


      <div className=' gap-5 '>

        <form onSubmit = { handleAddService } className="container mx-auto" >
          <div className="form-control mb-5">
            <label className='block font-normal text-xl mb-2' htmlFor="email">Service Title</label>
            <input onBlur = {handleInputBlur} className='w-1/2 h-14 text-2xl pl-3 border-2 border-gray-500' type="text" name='title' />
          </div>
          <div className="form-control mb-5">
            <label className='block font-normal text-xl mb-2' htmlFor="email">Photo Url</label>
            <input onBlur={handleInputBlur} className='w-1/2 h-14 text-2xl pl-3 border-2 border-gray-500' type="text" name='photoURL' />
          </div>
          <div className="form-control mb-5">
            <label className='block font-normal text-xl mb-2' htmlFor="email">Price</label>
            <input onBlur={handleInputBlur} className='w-1/2 h-14 text-2xl pl-3 border-2 border-gray-500' type="text" name='price' />
          </div>
          <div className=" mb-5">
            <label className='block font-normal text-xl mb-2' htmlFor="email">Details</label>
            <input onBlur={handleInputBlur} className='w-1/2 h-32 text-lg pl-3 border-2 border-gray-500' type="text" name=' discription' required />
          </div>

          <div className='mb-4'>
            <input className='btn-submit w-24 h-12 bg-blue-700 rounded-lg font-md leading-10 text-white ' type="submit" name="" id="" value='Add Service' />
          </div>

        </form>


      </div>

     
    </div>
  );
};

export default AddService;