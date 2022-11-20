import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
     
    const [service,setservice] = useState([])

    useEffect(() => {
       fetch('service.json')
       .then(res => res.json())
       .then(data => setservice(data))
    },[])

    return (
        <div className='mt-5'>
              <h4 className='text-center text-lg text-indigo-600 font-bold font-mono '  >OUR SERVICES</h4>
              <h2 className='text-center text-4xl text-indigo-600 font-bold font-mono'>All Pet Care Services</h2>
            {
              service.map(services => <ServiceCard
              key={services._id}
              services = {services}
              ></ServiceCard>)
            }

        </div>
    );
};

export default Service;