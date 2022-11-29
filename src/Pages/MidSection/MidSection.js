import { Accordion } from 'flowbite-react';
import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import img1 from '../../shape_circle_1.svg'

const MidSection = () => {
    return (
        <div className='grid grid-cols-2 container mx-auto mt-5'>

<div class="   p-16 ">
  <h1 className='text-4xl font-extrabold '>Welcome To Our <br/>Family</h1>
  <p className='w-41 text-2xl'>Sadly, there are no trucks for the driver at the moment.<br/> For the masses are not now the property of the land.<br/> The author of the augue mauris augue nor pregnant in the ferment</p>
<Accordion arrowIcon={ArrowLeftIcon}>
  <Accordion.Panel>
    <Accordion.Title>
    How Petopia Pet Care Started
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 dark:text-gray-400">
      Life and time of the house as diam. The magic pot now needs chocolate. He doesn't even need a master's degree. The bed is a great fringilla urn porttitor rhoncus pain pure
      </p>
     
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
    Mission Statement
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 dark:text-gray-400">
      Life and time of the house as diam. The magic pot now needs chocolate. He doesn't even need a master's degree. The bed is a great fringilla urn porttitor rhoncus pain pure
      </p>
      
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
    Value Added Services
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 dark:text-gray-400">
      Life and time of the house as diam. The magic pot now needs chocolate. He doesn't even need a master's degree. The bed is a great fringilla urn porttitor rhoncus pain pure
      </p>
      
     
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
    Social Responsability
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 dark:text-gray-400">
      Life and time of the house as diam. The magic pot now needs chocolate. He doesn't even need a master's degree. The bed is a great fringilla urn porttitor rhoncus pain pure
      </p>
     
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>


	
</div>
<div className="relative mt-12 " >
    <img className='absolute left-80  bottom-48 mb-32 z-40 ... border-4 border-white rounded-lg ' src="https://i.ibb.co/TP1NG7s/about-img-3.jpg" alt="" />
    <div className='absolute z-10 ... left-52 mx-auto bottom-80 h-16 w-80 ...    '>
    <img className="border-4 border-white rounded-lg" src="https://i.ibb.co/yB1Z9N1/about-img-2.jpg" alt="" />
    </div>
    <div className='mb-38  absolute z-10... ' >
    <img  src="https://i.ibb.co/bH7scXv/about-img-1.jpg" alt="" />
    </div>
    <img className='ml-80 z-40 ...   mt-12 ' src={img1} alt="" />
</div>
        </div>
    );
};

export default MidSection;