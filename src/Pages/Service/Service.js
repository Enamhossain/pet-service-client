import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Service = () => {
     
    const [service,setservice] = useState([])

    useEffect(() => {
       fetch('http://localhost:5000/services')
       .then(res => res.json())
       .then(data => setservice(data))
    },[])

    return (
        <div className='mt-5 '>
              <h4 className='text-center text-lg text-indigo-600 font-bold font-mono '  >OUR SERVICES</h4>
              <h2 className='text-center text-4xl text-indigo-600 font-bold font-mono'>All Pet Care Services</h2>
          
          <div className="grid gap-3 mx-auto container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
          {
              service.slice(0,3).map(services => <ServiceCard
              key={services._id}
              services = {services}
              ></ServiceCard>)
            }
          </div>
          <div className='flex justify-center align-center'>

          <Link to="/service" type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none  focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5  text-center  mt-5">see all</Link>
          </div>
    </div>
            
        
    );
};

export default Service;