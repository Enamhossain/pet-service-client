import React, { useEffect, useState } from 'react';

import AllServiceCard from './AllServiceCard';

const AllServices = () => {
    const [allService,setAllService] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setAllService(data))
     },[])
    return (
        <div>
            <div className="grid gap-3 mx-auto container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
            {
              allService.map(services => <AllServiceCard
              key={services._id}
              services = {services}
              ></AllServiceCard>)
            }
          </div>
        </div>
    );
};

export default AllServices;